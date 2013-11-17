<?
include_once("databaseManager.php");
$con=new DatabaseManager();
/*$link=mysql_connect("localhost","root","890524") or die(mysql_error());
mysql_select_db("mathpass");
mysql_query("SET NAMES UTF8");
$result=mysql_query($sql,$link);
 */
	$sql="SELECT pcourseid,name";
	$sql.=" FROM pcourse";
	$sql.=" order by name";
$result=$con->Query($sql);
if(mysql_num_rows($result)>0){
    while($obj=mysql_fetch_object($result)){
      $arr[]=$obj;
 }
}
$con->Dispose();

//$arr = array ('a'=>1,'b'=>2,'c'=>3,'d'=>4,'e'=>5);
Echo json_encode($arr);
?>
