<?
$link=mysql_connect("localhost","root","890524");
mysql_select_db("mathpass");
mysql_query("SET NAMES UTF8");
$raw  = '';
$httpContent = fopen('php://input', 'r');
while ($kb = fread($httpContent, 1024)) {
    $raw .= $kb;
}
fclose($httpContent);
$params = json_decode($raw);
$id = formatStr($params->id);
$type_id= formatStr($params->type_id);
$typeID= formatStr($params->typeID);
$email= formatStr($params->email);
$password= formatStr($params->password);
$firstName= $params->firstName;
$lastName= $params->lastName;

if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $sql="insert into users(type,email,password,firstName,lastName)";
    $sql=$sql."values(";
    $sql=$sql."'".$type_id."',";  
    $sql=$sql."'".$email."',";
    $sql=$sql."'".$password."',";
    $sql=$sql."'".$firstName."',";
    $sql=$sql."'".$lastName."')"; 
    $result=mysql_query($sql);
    if(!$result)
    {
        die ('{"success":false,"message":"追加用户失败"}');
    }
    else
        echo '{"success":true,"message":"追加用户成功"}';
}
else if($_SERVER["REQUEST_METHOD"]=="PUT")
{
    $sql="update users set type='".$typeID."',";
    $sql=$sql."email='".$email."',";
    $sql=$sql."password='".$password."',";
    $sql=$sql."firstName='".$firstName."',";
    $sql=$sql."lastName='".$lastName."' ";
    $sql=$sql."where userId=".$id;
    $result=mysql_query($sql);
    if(!$result)
    {
        die('{"success":false,"message":"修改用户失败"}');
    }
    else
        echo '{"success":true,"message":"修改用户成功"}';
}
else if($_SERVER["REQUEST_METHOD"]=="DELETE")
{
    $sql="delete from users ";
    $sql=$sql."where userId=".$id;
    $result=mysql_query($sql);
    if(!$result)
    {
       die('{"success":false,"message":"删除用户失败"}');
    }
    else
        echo '{"success":true,"message":"删除用户成功"}';
}
function formatStr($str)
{
    return trim(str_replace("'","''",$str));
}
?>
