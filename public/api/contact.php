<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

$name    = trim((string)($input['name']    ?? ''));
$email   = trim((string)($input['email']   ?? ''));
$company = trim((string)($input['company'] ?? ''));
$service = trim((string)($input['service'] ?? ''));
$budget  = trim((string)($input['budget']  ?? ''));
$message = trim((string)($input['message'] ?? ''));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || strlen($name) > 100 || strlen($email) > 200 || strlen($company) > 200
    || strlen($service) > 100 || strlen($budget) > 100 || strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing or invalid fields']);
    exit;
}

$esc = fn($s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
$html = "<h2>New Lead from getyoteam Website</h2>"
      . "<p><strong>Name:</strong> "    . $esc($name)    . "</p>"
      . "<p><strong>Email:</strong> "   . $esc($email)   . "</p>"
      . "<p><strong>Company:</strong> " . ($company !== '' ? $esc($company) : '—') . "</p>"
      . "<p><strong>Service:</strong> " . ($service !== '' ? $esc($service) : '—') . "</p>"
      . "<p><strong>Budget:</strong> "  . ($budget  !== '' ? $esc($budget)  : '—') . "</p>"
      . "<p><strong>Message:</strong></p><p>" . nl2br($esc($message)) . "</p>";

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode([
        'from'     => 'Getyoteam Website <noreply@getyoteam.com>',
        'to'       => ['info@getyoteam.com'],
        'reply_to' => $email,
        'subject'  => 'New Lead from getyoteam Website — ' . $name,
        'html'     => $html,
    ]),
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer __RESEND_API_KEY__',
        'Content-Type: application/json',
    ],
]);
$response = curl_exec($ch);
$status   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($status >= 200 && $status < 300) {
    echo json_encode(['success' => true]);
} else {
    error_log('[contact.php] Resend error (HTTP ' . $status . '): ' . $response);
    http_response_code(502);
    echo json_encode(['success' => false, 'message' => 'Email delivery failed']);
}
