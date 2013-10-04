<?php
$id = formatStr($_REQUEST['problemId']);
$questionIntro = formatStr($_REQUEST['questionIntro']);

header('Content-Type: application/json');
$link=mysql_connect("localhost","root","890524");
mysql_select_db("mathpass");
mysql_query("SET NAMES UTF8"); 
    

if($_SERVER["REQUEST_METHOD"]=="POST")
    {
        $sql="update problems ";

        $sql=$sql."set questionIntro='".$questionIntro."'"; 

        $sql=$sql."where problemId=".$id; 
        $result=mysql_query($sql);
 if(!$result)
    {
        die('{"success":false,"message":"修改题目描述失败"}');
    }
    else
        echo '{"success":true,"message":"修改题目描述成功"}';
    }
   

function formatStr($str)
{
    return trim(str_replace("'","''",$str));
}
?>

