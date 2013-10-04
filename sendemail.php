<?php 
//引入phpmailer类
require("class.phpmailer.php");
require("class.smtp.php");
$mail = new PHPMailer(); 
$address = '848427468@qq.com'; //$_POST['address']; //发件人地址
$mail->IsSMTP();              // set mailer to use SMTP 
$mail->Host = "smtp.qq.com";    // specify main and backup server (邮局)
$mail->SMTPAuth = true;          // turn on SMTP authentication 
$mail->Username = "2449616402@qq.com";   // SMTP username          (用户名)
$mail->Password = "071610521yry1";        // SMTP password          (密码)
$mail->From = "2449616402@qq.com"; // 发件人邮箱(如果人家回复的话就是回这个邮箱)
$mail->FromName = "MathPASS Email";     // 发件人
$mail->CharSet = "utf8";         //指定字符集
$mail->Encoding = "base64";        //邮件的编码方式
$mail->AddAddress("$address", "");     //添加收件人邮箱和姓名
$mail->IsHTML(true); // set email format to HTML 设置邮件格式是HTML
//
$email = $_REQUEST['email'] ;
$subject = $_REQUEST['subject'] ;
$message = $_REQUEST['message'] ;
$yourname = $_REQUEST['name'] ;
//
$mail->Subject = $subject; // 邮件主题
// 邮件内容
$body="<html><head>
      <meta http-equiv=\"Content-Language\" content=\"zh-cn\">
      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf8\"></head>
      <body>
      Users name: ".$yourname."<br />
      Users message: ".$message."<br />
      Users email address: ".$email."<br />
      </body>
      </html>";
$mail->AltBody ="text/html"; //设置是在邮件正文不支持HTML的备用显示
$mail->WordWrap = 80;
$mail->MsgHTML($body);
$mail->IsHTML(true);
if(!$mail->Send()) 
{

 echo '{"success":false}';
}
else
 echo '{"success":true}';
?>