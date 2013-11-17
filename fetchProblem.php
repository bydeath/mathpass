<?
include_once("databaseManager.php");
$con=new DatabaseManager();
$sql="SELECT problems.title,problems.number";
$sql.=" FROM problems";
$sql.=" inner join problemchapter on problems.number=problemchapter.fk_problem";
if($_SERVER["REQUEST_METHOD"]=="GET")
{
    $filter = filterStrGet();
    if($filter!="")
    {
        $filter_json=json_decode($filter,true);    
    }
    if($filter!='')
    {
        $chapter=$filter_json[1]["value"];
        //chapter title is  "all"
        if($chapter==24)
        {
            $course=$filter_json[0]["value"];
            $sql.=" inner join chapters on problemchapter.fk_chapter=chapters.chapterId";
            $sql.=" WHERE chapters.fk_pcourse=" . $course ;
        }
        else{
            $sql.=" WHERE problemchapter.fk_chapter=" . $chapter ;
        }
        $sql.=" ORDER BY problems.number";
    }
}
$result=$con->Query($sql);
if(mysql_num_rows($result)>0){
    while($obj=mysql_fetch_object($result)){
        $arr[]=$obj;
    }
}
$con->Dispose();
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
