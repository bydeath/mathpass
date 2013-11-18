<?
$link=mysql_connect("localhost","root","890524"); 
mysql_select_db("mysql"); 
mysql_query("SET NAMES UTF8");
$sql="SELECT courseId,title,days,room,
    assignmentId,
    assignments.title as assignmentTitle,
    _list_assignmenttypes.title as assignmentType,
    shared,
    startDate,
    dueDate
    from courses 
    inner join assignment 
    on courseId.id=assignmentId
    where fk_user_teacher=2227 AND active=1
    order by courseId,assignmentId";
$result = mysql_query($sql);
if(!$result)
{
    die('{"success":false,"message":"读取数据失败"}');
}
$row= mysql_fetch_array($result, MYSQL_ASSOC);
$classId=$row["classId"];
$className=$row["className"];
$studentArray[] = array(
    'id' => $row["studentId"],
    'number'=>$row["number"],
    'name' =>$row["studentName"],
    'age' => $row["age"],
    'phone' => $row["phone"]
); 
$studentCount=1;
$classArray = array();
while($row = mysql_fetch_array($result, MYSQL_ASSOC))
{
    if($classId<>$row["classId"])
    {
        $classArray[] = array(
            'id' => $classId,
            'name'=>$className,
            'studentCount'=> $studentCount,
            'students' => $studentArray
        ); 
        $classId=$row["classId"];
        $className=$row["className"];
        $studentArray = array();
        $studentArray[] = array(
            'id' => $row["studentId"],
            'number'=>$row["number"],
            'name'  =>$row["studentName"],
            'age' => $row["age"],
            'phone' => $row["phone"]
        ); 
        $studentCount=1;
    }
    else
    {
        $studentArray[] = array(
            'id' => $row["studentId"],
            'number'=>$row["number"],
            'name'  =>$row["studentName"],
            'age' => $row["age"],
            'phone' => $row["phone"]
        ); 
        $studentCount+=1;
    }
}
$classArray[] = array(
    'id' => $classId,
    'name'=>$className,
    'studentCount'=> $studentCount,
    'students' => $studentArray
); 
echo json_encode($classArray);
?>
