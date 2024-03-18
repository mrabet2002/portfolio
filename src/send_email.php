<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Make sure to include the PHPMailer library
// Retrieve data from the request body
$from = $_POST['from'] ?? '';
$subject = $_POST['subject'] ?? '';
$body = $_POST['body'] ?? '';

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'mrabetahmed1807@gmail.com'; // Your Gmail address
    $mail->Password   = 'tmllhhiggkiptfzh'; // Your Gmail password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Sender and recipient settings
    $mail->setFrom($from, '');
    $mail->addAddress('mrabetahmed1807@gmail.com', 'Recipient Name');

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $body;

    // Send the email
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
