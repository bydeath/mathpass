<?

$link=mysql_connect("localhost","root","890524");//or die(mysql_error())
mysql_select_db("mathpass");
mysql_query("SET NAMES UTF8");
//$problemTotalNum=formatStr($_REQUEST['problemTotalNum']);
//$problemCorrectNum=formatStr($_REQUEST['problemCorrectNum']);
//$problemNoSimpleNum=formatStr($_REQUEST['problemNoSimpleNum']);
//$problemCorrectRate=formatStr($_REQUEST['problemCorrectRate']);

/*$sql="select problemId from problems";
	$result=mysql_query($sql);
if(mysql_num_rows($result)>0){
    while($obj=mysql_fetch_object($result)){
      $arr[]=$obj;
 }
}*/
	$sql="select max(problemId) from problems";
	$dsproblemCount=mysql_query($sql);
	while($drproblemCount=mysql_fetch_row($dsproblemCount))
	{
		$problemNum=$drproblemCount[0];
		for($i=1;$i<=$drproblemCount[0];$i++)
		{
			$problemCorrectNum[$i]=0;
			$problemTotalNum[$i]=0;
			$problemNoSimpleNum[$i]=0;
			$problemCorrectRate[$i]=0;
		}
	}	

	
	$sql="select assignmenttakequestionid,fk_assignmenttake,fk_problem,result from assignmenttakequestions";
		$dsContent = mysql_query($sql);
		while($drContent=mysql_fetch_row($dsContent))
		{
			$problemTotalNum[(int)$drContent[2]]++;
			if($drContent[3]==1||$drContent[3]==2)
				$problemCorrectNum[(int)$drContent[2]]++;
			if($drContent[3]==3)
				$problemNoSimpleNum[(int)$drContent[2]]++;
		}
	
		for($j=1;$j<=$problemNum;$j++)
		{
			if($problemTotalNum[$j]!=0)
			{
				$problemCorrectRate[$j]=round($problemCorrectNum[$j]/$problemTotalNum[$j],4)*100;
				
			}	
		}

  
 
	for($k=1;$k<=$problemNum;$k++)
	{
	 $data[] = array(
		'problemId'=>$k,
		'problemTotalNum'=>$problemTotalNum[$k],
		'problemCorrectNum'=>$problemCorrectNum[$k],
		'problemNoSimpleNum'=>$problemNoSimpleNum[$k],
		'problemCorrectRate'=>$problemCorrectRate[$k],
		'answerDetail'=>$k
	 );	
	}

echo json_encode($data);
//echo json_encode($arr);
//echo json_encode($problemTotalNum);
//echo json_encode($problemCorrectNum);
//echo json_encode($problemNoSimpleNum);
//echo json_encode($problemCorrectRate);




?>
