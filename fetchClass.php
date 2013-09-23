<?
include_once("databaseManager.php");
$con=new DatabaseManager();
	$sql="SELECT courseId,title,days,room";
	$sql.=" FROM courses";
	$sql.=" WHERE ( fk_user_teacher=2227 AND active=1 )";
	$sql.=" ORDER BY title";
$result=$con->Query($sql);
if(mysql_num_rows($result)>0){
    while($obj=mysql_fetch_object($result)){
      $arr[]=$obj;
 }
}

//$arr = array ('a'=>1,'b'=>2,'c'=>3,'d'=>4,'e'=>5);
Echo json_encode($arr);
?>
