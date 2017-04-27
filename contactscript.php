<?php

require 'PHPMailerAutoload.php';

if(isset($_POST) && !empty($_POST['email'])){

$emailrecibido = $_POST['email'];

$mail = new PHPMailer;
$mail->CharSet = "UTF-8";
$mail->isSMTP();                       
$mail->Host = 'mail.realposada.com.mx';  
$mail->SMTPAuth = true;                
$mail->Port       = 26;   
$mail->Username = 'sender@realposada.com.mx';                            
$mail->Password = 's3nd3r';                                                               
$mail->isHTML(true);
$plantilla="
Email: ".$emailrecibido."
<br/>Nombre: ".$_POST['nombre']."
<br/>Asunto: ".$_POST['asunto']."
<br/>Mensaje: ".$_POST['mensaje']."
<br/>";  
$msg=$plantilla;

$mail->setFrom = 'sender@realposada.com.mx';
$mail->FromName = $_POST['nombre'];
$mail->AddReplyTo($emailrecibido, "Copía Hotel Real Posada"); // indicates ReplyTo headers
$mail->Subject = "Formulario de Contacto Hotel Real Posada";
$mail->addAddress('contacto@realposada.com.mx');
$mail->Body = $msg;
//$mail->AltBody = "Email envíado desde Hotel Real Posada.";

$resEmail	=	$mail->Send();


if($resEmail) {
	$ok	=	'ok';	
}else{
	$ok	=	$mail->ErrorInfo;
}
	echo $ok;	
}else{
	echo 'Error post vacio';
}

