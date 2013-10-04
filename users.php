<?
$link=mysql_connect("localhost","root","890524");
mysql_select_db("mathpass");
mysql_query("SET NAMES UTF8");
$email=formatStr($_POST['email']);
$password=formatStr($_POST['password']);
$lastname=formatStr($_POST['lastname']);
$firstname=formatStr($_POST['firstname']);
$usertype=formatStr($_POST['usertype']);
$sql="SELECT * FROM users where email='".$email."'";
$result = mysql_query($sql);
if(!$result)
    die('{"success":false,"message":"数据库操作失败"}');
if(mysql_num_rows($result)>0)
    die('{"success":false,"message":"该用户已存在"}');
$sql="insert into users(type,email,password,firstName,lastName)";
$sql=$sql."values(";
$sql=$sql."'".$usertype."',";
$sql=$sql."'".$email."',";
$sql=$sql."'".$password."',";
$sql=$sql."'".$firstname."',";
$sql=$sql."'".$lastname."')";
$result=mysql_query($sql);
if(!$result)
{
   die('{"success":false,"message":"数据库操作失败"}');
}
else
   echo '{"success":true}';
function formatStr($str)
{
   return trim(str_replace("'","''",$str));
}
?>