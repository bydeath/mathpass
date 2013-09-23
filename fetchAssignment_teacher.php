<?
include_once("databaseManager.php");
$con=new DatabaseManager();
	$sql="SELECT assignmentId,assignments.title as assignmentTitle,_list_assignmenttypes.title as assignmentType,shared,startDate,dueDate";
	$sql.=" FROM assignments";
	$sql.="  INNER JOIN _list_assignmenttypes ON assignments.type=_list_assignmenttypes.assignmentTypeId";
	$sql.=" WHERE ( fk_user_owner=2227 AND assignments.active=1 )";
$result=$con->Query($sql);
if(mysql_num_rows($result)>0){
    while($obj=mysql_fetch_object($result)){
      $arr[]=$obj;
 }
}

//$arr = array ('a'=>1,'b'=>2,'c'=>3,'d'=>4,'e'=>5);
Echo json_encode($arr);
?>
