<?
	include_once("base/databaseManager.php");
 header("Content-type:application/vnd.ms-excel"); 
 header("Content-Disposition:attachment; filename=grades.xls");
 global $con;
 $con=new DatabaseManager();
	$cid=$_GET['cid'];
	$aids = $_GET['aid'];
	$aid=split(",",$aids);
 $dt=$_GET['dt'];
 $sql="SELECT courses.title";
 $sql.=" FROM courses";
 $sql.=" WHERE courses.courseId=".$cid;
 $ds=$con->Query($sql);
 $ctitle="";
 while($dr=mysql_fetch_row($ds))
 {
  	$ctitle=$dr[0];
 }
	$sql="SELECT assignments.title,_list_assignmenttypes.title";
 $sql.=" FROM assignments";
 $sql.=" INNER JOIN _list_assignmenttypes ON assignments.type=_list_assignmenttypes.assignmentTypeId";
 $sql.=" WHERE assignmentId=" .$aid[0] ;
 for($i=1;$i<count($aid);$i++)
 {
  	$sql.=" or assignmentId=".$aid[$i] ;
 }
	$sql.=" order by assignments.assignmentId";
 $ds=$con->Query($sql);
 $anamearr=array();
	$grades='Student Name'.chr(9);
	while($dr=mysql_fetch_row($ds))
 {
		$grades.=$dr[0].chr(9);
 }
 $grades.=chr(13);
 $sql="SELECT studentenrollment.fk_user,firstName,lastName,email";
 $sql.=" FROM studentenrollment";
 $sql.=" INNER JOIN users on users.userId=studentenrollment.fk_user";
 $sql.=" WHERE studentenrollment.fk_course=".$cid;
 $sql.=" order by lastName,firstName";
 $sds=$con->Query($sql);
 $n=0;
 while($sdr=mysql_fetch_row($sds))
 {	
  	$grades.=$sdr[2].', '.$sdr[1].chr(9);
  	for($i=0;$i<count($aid);$i++)
   {
    	$sql="SELECT correctAnswers,correctAnswers+incorrectAnswers,correctAnswersch";
      $sql.=" FROM assignmenttakes";
      $sql.=" WHERE fk_user_taker=" . $sdr[0] . " AND fk_assignment=".$aid[$i];
      $sql.=" order by correctAnswersch desc,assignmentTakeId desc limit 1";
      $sDs1=$con->Query($sql);
      if(mysql_num_rows($sDs1)==0)
      {
  	     $grades.='n/a'.chr(9);   
      }
      else
      {
       while($sDr1=mysql_fetch_row($sDs1))
    	 {
  	    $bs=$sDr1[2];
  	     if($dt=="1")
  	     {
  	      $res=round((int)$bs/(int)$sDr1[1]*100,2);
  	      $gra=(string)$res."%";
  	     }else if($dt=="2")
  	     {
  	    	 $gra=$bs;
  	     }else
  	     {
  	    	$gra=$bs."/(".$sDr1[1].")";
  	     }
  	     $grades.= $gra.chr(9);   
       }
      }
    }
    $n++;
     $grades.=chr(13); 
 }
 echo $grades;  
 $con->Dispose();
?>
