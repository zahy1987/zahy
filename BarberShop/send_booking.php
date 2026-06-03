<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Verificare metodă POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

// Preluare date din formular
$name = isset($_POST['fullName']) ? trim($_POST['fullName']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$service = isset($_POST['service']) ? trim($_POST['service']) : '';
$servicePrice = isset($_POST['servicePrice']) ? trim($_POST['servicePrice']) : '';
$date = isset($_POST['date']) ? trim($_POST['date']) : '';
$time = isset($_POST['time']) ? trim($_POST['time']) : '';
$notes = isset($_POST['notes']) ? trim($_POST['notes']) : '';

// Validare date obligatorii
if (empty($name) || empty($email) || empty($phone) || empty($service) || empty($date) || empty($time)) {
    echo json_encode(["status" => "error", "message" => "Missing required fields"]);
    exit;
}

// Validare email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email address"]);
    exit;
}

// Formatare dată pentru afișare
$formattedDate = date('l, F j, Y', strtotime($date));

// ========== EMAIL CĂTRE CLIENT ==========
$client_subject = "The Grooming Rooms - Booking Confirmation";
$client_message = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>Booking Confirmation</title>
    <style>
        body { font-family: 'Lato', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0a0a0a; color: #f5c518; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; }
        .details { background: #fff; border-left: 4px solid #f5c518; padding: 15px; margin: 20px 0; }
        .footer { background: #0a0a0a; color: #888; padding: 15px; text-align: center; font-size: 12px; }
        h2 { color: #f5c518; margin-top: 0; }
        .label { font-weight: bold; color: #0a0a0a; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>THE GROOMING ROOMS</h1>
            <p>London's Premier Barber Shop</p>
        </div>
        <div class='content'>
            <h2>Thank you, $name!</h2>
            <p>Your appointment has been successfully confirmed. Please find your booking details below:</p>
            
            <div class='details'>
                <p><strong class='label'>✂️ Service:</strong> $service (£$servicePrice)</p>
                <p><strong class='label'>📅 Date:</strong> $formattedDate</p>
                <p><strong class='label'>⏰ Time:</strong> $time</p>
                <p><strong class='label'>📍 Location:</strong> 42 Great Eastern Street, London EC2A 3EP</p>
            </div>
            
            <p><strong>What to expect:</strong></p>
            <ul>
                <li>Complimentary drinks upon arrival</li>
                <li>Expert master barbers</li>
                <li>Premium British grooming products</li>
            </ul>
            
            <p>Need to reschedule? Please call us at <strong>020 7123 4567</strong> at least 2 hours before your appointment.</p>
            
            <p>We look forward to welcoming you!</p>
            <p><strong>— The Grooming Rooms Team</strong></p>
        </div>
        <div class='footer'>
            <p>© 2025 The Grooming Rooms — Premium Barber Services</p>
            <p>42 Great Eastern Street, London EC2A 3EP | 020 7123 4567</p>
        </div>
    </div>
</body>
</html>";

// Headere pentru email HTML
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: The Grooming Rooms <bookings@groomingrooms.co.uk>" . "\r\n";
$headers .= "Reply-To: bookings@groomingrooms.co.uk" . "\r\n";

// ========== EMAIL CĂTRE COMPANIE (NOTIFICARE) ==========
$admin_email = "shopzahy@gmail.com"; // **SCHIMBĂ CU EMAILUL REAL AL COMPANIEI**
$admin_subject = "🔴 NEW BOOKING - $name";

$admin_message = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <title>New Booking Notification</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0a0a0a; color: #f5c518; padding: 15px; text-align: center; }
        .content { background: #f4f4f4; padding: 20px; }
        .details { background: #fff; border-left: 4px solid #e63946; padding: 15px; margin: 15px 0; }
        .urgent { color: #e63946; font-weight: bold; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>🔴 NEW APPOINTMENT BOOKING</h2>
        </div>
        <div class='content'>
            <p><strong>A new booking has been made. Please review the details below:</strong></p>
            
            <div class='details'>
                <h3>Customer Information:</h3>
                <p><strong>👤 Name:</strong> $name</p>
                <p><strong>📧 Email:</strong> $email</p>
                <p><strong>📞 Phone:</strong> $phone</p>
                <hr>
                <h3>Booking Details:</h3>
                <p><strong>✂️ Service:</strong> $service (£$servicePrice)</p>
                <p><strong>📅 Date:</strong> $formattedDate</p>
                <p><strong>⏰ Time:</strong> $time</p>
                " . (!empty($notes) ? "<p><strong>📝 Special Requests:</strong> $notes</p>" : "") . "
            </div>
            
            <p class='urgent'>⚠️ Please confirm this booking in your system.</p>
            <p>Contact the customer if any issues arise.</p>
        </div>
    </div>
</body>
</html>";

// Trimitere email către client
$client_sent = mail($email, $client_subject, $client_message, $headers);

// Trimitere email către companie
$admin_sent = mail($admin_email, $admin_subject, $admin_message, $headers);

// Verificare rezultat
if ($client_sent && $admin_sent) {
    echo json_encode(["status" => "success", "message" => "Booking confirmed! Emails sent."]);
} else {
    error_log("Email sending failed - Client: " . ($client_sent ? "OK" : "FAILED") . " | Admin: " . ($admin_sent ? "OK" : "FAILED"));
    echo json_encode(["status" => "error", "message" => "Unable to send email. Please contact us directly at 020 7123 4567"]);
}
?>