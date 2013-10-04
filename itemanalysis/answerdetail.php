<script type="text/javascript" src="mathEdit/mathplayer.js"></script>
<script type="text/javascript" src="mathEdit/mathedit/infix.js"></script>
<script type="text/javascript" src="mathEdit/mathedit/editing.js"></script>
<script type="text/javascript" src="scripts/ajax.js"></script>
<link rel="stylesheet" type="text/css" href="globals.css" />

<?
	include_once("base/baseForm.php");
	include_once("base/databaseManager.php");
	include_once("base/layoverGenerator.php");

	include_once("base/gen_func.inc");
	include_once("base/rand_gen.inc");
	include_once("base/str_funcs.inc");
	include_once("base/reduce.inc");
	include_once("base/rand_switch_sign.inc");
	include_once("base/parsers.inc");
	include_once("base/answer_input.inc");
	include_once("base/question_retrieve.inc");
	
	
	$number=$_GET["number"];
	$page=$_GET["page"];
	$pageSize=200;
	$c=0;
	$flag=0;
	$b->AddCrumb("The kind of answers for P".$number.".","");
	$b->ActiveMenu=23;
	$b->MainMenuIndex=23;

	$con=new DatabaseManager();
	

  
	
	$sql="select count(*) from kindofanswers where fk_problem=".$number;
	$dscount=$con->Query($sql);
	$drcount=mysql_fetch_row($dscount);
	$totalPage=((int)$drcount[0])/$pageSize+1;
	//	select * from users limit (pageNo-1)*pageSize,pageSize;
	
	$sql="select * from kindofanswers where fk_problem=".$number." order by questions asc limit ".(($page-1)*$pageSize).",".$pageSize;
	$dsp=$con->Query($sql);
	while($drp=mysql_fetch_row($dsp))
	{
		  $q_out = parse_question($drp[2],(int)$number,$c);
		  if($drp[7]==1)
		  {
			 
				$answerkind.='	'.$q_out.'</td>';
				$answerkind.='	'.$drp[3].'</td>';
        if(strcmp($drp[6],"YES")==0)
				{
					
				}else
				{
					
				}
				$answerkind.='	'.$drp[4].'</td>';
				
				$answerkind.='	'.$drp[5].'</td>';
			  
		  }else
		  {
		  	
				$answerkind.='	'.$q_out.'</td>';
				
				$answerkind.='	'.$drp[3].'</td>';
				if(strcmp($drp[6],"YES")==0)
				{
					
				}else
				{
					
				}
				$answerkind.='	'.$drp[4].'</td>';
				
				$answerkind.='	'.$drp[5].'</td>';
			 
		  }
		  $c++;
  }
  $answerkind.='</table><br><br>';
  $answerkind.='<center>Page ';
  for($i=1;$i<= $totalPage;$i++)
  {
  	if($i==$page)
  	  $answerkind.='<a href="answerKindAdmin.php?number='.$number.'&page='.$i.'" ><font size="2" color="red"><b>'.$i.'&nbsp;&nbsp;</b></font></a>';
  	else
  		$answerkind.='<a href="answerKindAdmin.php?number='.$number.'&page='.$i.'" ><font size="2"><b>'.$i.'&nbsp;&nbsp;</b></font></a>';
  }
  $answerkind.='</center>';
	$answerkind.='</p>';
	
//	echo($retval);
	//
	// - Drop out
	//
	$con->Dispose();	
	$b->RenderTemplateTop();
?>

