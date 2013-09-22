<?
$link=mysql_connect("localhost","root","890524") or die(mysql_error());
mysql_select_db("mathpass");
/*
$raw='';
$httpContent = fopen('php://input', 'r'); 
while ($kb = fread($httpContent, 1024)) {
    $raw .= $kb;
}
fclose($httpContent);
$params = json_decode($raw);
$course= formatStr($params->pcourseid);
 */
mysql_query("SET NAMES UTF8");
$sql="SELECT chapterId,title";
$sql.=" FROM chapters";
if($_SERVER["REQUEST_METHOD"]=="GET")
{
    $filter = filterStrGet();
    if($filter!="")
    {
        $filter_json=json_decode($filter,true);    
    }
    if($filter!='')
    {
        $value=$filter_json[0]["value"];
        $sql = $sql ." where fk_pcourse=".$value;
    }
}
$result=mysql_query($sql,$link);
if(mysql_num_rows($result)>0){
    while($obj=mysql_fetch_object($result)){
        $arr[]=$obj;
    }
}
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
