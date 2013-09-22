<?
$link=mysql_connect("localhost","root","890524");
mysql_select_db("mathpass");
mysql_query("SET NAMES UTF8");
$sql="select type.id typeId,
      type.typeName,
      users.userId userId,
      users.email,
      users.password,
      users.type,
	users.lastName,
      users.firstName 
      from type 
      inner join users 
      on type.id=users.type 
      order by type.id,users.userId";
$result = mysql_query($sql);
if(!$result)
{
    die('{"success":false,"message":"读取数据失败"}');
}
$row= mysql_fetch_array($result, MYSQL_ASSOC);
$typeId=$row["typeId"];
$typeName=$row["typeName"];
$userArray[] = array(
    'id' => $row["userId"],
    'email'=>$row["email"],
    'password' =>$row["password"],
'typeID' =>$row["typeID"],
    'firstName' => $row["firstName"],
 'lastName' => $row["lastName"]
); 
$userCount=1;
$typeArray = array();
while($row = mysql_fetch_array($result, MYSQL_ASSOC))
{
    if($typeId<>$row["typeId"])
    {
        $typeArray[] = array(
                'id' => $typeId,
                'name'=>$typeName,
                'userCount'=> $userCount,
                'users' => $userArray
        ); 
        $typeId=$row["typeId"];
        $typeName=$row["typeName"];
        $userArray = array();
        $userArray[] = array(
                'id' => $row["userId"],
                'email'=>$row["email"],
                'password'  =>$row["password"],
                'typeID' =>$row["typeID"],
                'firstName' => $row["firstName"],
		'lastName' => $row["lastName"]
        ); 
        $userCount=1;
    }
    else
    {
        $userArray[] = array(
                'id' => $row["userId"],
                'email'=>$row["email"],
                'password'  =>$row["password"],
              'typeID' =>$row["typeID"],
                'firstName' => $row["firstName"],
              'lastName' => $row["lastName"]
        ); 
        $userCount+=1;
    }
}
$typeArray[] = array(
    'id' => $typeId,
    'name'=>$typeName,
    'userCount'=> $userCount,
    'users' => $userArray
); 
echo json_encode($typeArray);
?>
