<?
include_once("databaseManager.php");
$con=new DatabaseManager();
	$sql="SELECT courseId,title,days,room";
	$sql.=" FROM courses";
if($_SERVER["REQUEST_METHOD"]=="GET")
{
    $filter = filterStrGet();
    if($filter!="")
    {
        $filter_json=json_decode($filter,true);    
    }
    if($filter!='')
    {
        $userID=$filter_json[0]["value"];
        $sql.=" where (fk_user_teacher=".$userID." AND active=1)";
    }
}
//	$sql.=" WHERE ( fk_user_teacher=2227 AND active=1 )";
	$sql.=" ORDER BY title";
$result=$con->Query($sql);
if(mysql_num_rows($result)>0){
    while($obj=mysql_fetch_object($result)){
      $arr[]=$obj;
 }
}

//$arr = array ('a'=>1,'b'=>2,'c'=>3,'d'=>4,'e'=>5);
Echo json_encode($arr);
function formatStr($str)
{
    return trim(str_replace("'","''",$str));
}
function filterStrGet()
{
    $a = explode('&',$_SERVER["REQUEST_URI"]);
    $i = 0;
    while ($i < count($a)) {
        $b = split('=', $a[$i]);
        if(htmlspecialchars(urldecode($b[0]))=="filter")
        {
            $filter=urldecode($b[1]);
            return $filter;
        }
        $i++; 
    }
}
?>
