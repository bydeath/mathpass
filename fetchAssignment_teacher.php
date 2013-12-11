<?
include_once("databaseManager.php");
$con=new DatabaseManager();
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
    $classID=$filter_json[1]["value"];
}
$sql="SELECT assignmentId,assignments.title as assignmentTitle,_list_assignmenttypes.title as assignmentType,shared,startDate,dueDate";
$sql.=" FROM assignments";
$sql.="  INNER JOIN _list_assignmenttypes ON assignments.type=_list_assignmenttypes.assignmentTypeId";
$sql.=" INNER JOIN assignmentcourses ON assignments.assignmentId = assignmentcourses.fk_assignment";
$sql.=" WHERE (fk_user_owner=$userID AND assignmentcourses.fk_course=$classID AND assignments.active=1 )";
$result=$con->Query($sql);
if(mysql_num_rows($result)>0){
    while($obj=mysql_fetch_object($result)){
        $arr[]=$obj;
    }
}
$con->Dispose();

//$arr = array ('a'=>1,'b'=>2,'c'=>3,'d'=>4,'e'=>5);
Echo json_encode($arr);
}
else if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $raw='';
    $httpContent=fopen('php://input','r');
    while ($kb=fread($httpContent,1024)){
        $raw.=$kb;
    }
    fclose($httpContent);
    $params=json_decode($raw);
    $assignmentCreator=formatStr($params->assignmentCreator);
    $assignmentId=formatStr($params->assignmentId);
    $assignmentOwner=formatStr($params->assignmentOwner);
    $assignmentTitle=formatStr($params->assignmentTitle);
    $assignmentType=formatStr($params->assignmentType);
    $dueDate=formatStr($params->dueDate);
    $startDate=formatStr($params->startDate);
    $takes=formatStr($params->takes);
    $shared=formatStr($params->shared);
    $password=formatStr($params->password);
    $courses=formatStr($params->courses);
    //echo "asstitle:";
    //echo $assignmentTitle;
}
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
