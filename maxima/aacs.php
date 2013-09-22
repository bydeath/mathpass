<?
  include_once("infix2prefix.php");
  include_once("docmd.php"); 
	$checkcmd=$_POST["checkcmd"];
	if($checkcmd=="")
	{
		$err="";
	}
  //echo "checkcmd=".$checkcmd."<br>";
    $checkcmd=str_replace("\\","",$checkcmd);
   // $checkcmd= '[{"name":"c1","cmd":"(u1=s1)","exprs":[{"expr":"s1","encoding":"infix","role":"usrAnswer","value":"2*sqrt(3)/5"},{"expr":"u1","encoding":"infi","role":"stdAnswer","value":"4*sqrt(3)/10"}]}]';
  //echo "checkcmd=".$checkcmd;
  $objarr = json_decode($checkcmd);  
  $result='[';
  for($i=0;$i<count($objarr);$i++)
  {
    if(strlen($result)>=2)
    {
    	$result.=',';
    }
  	//$result.='{"name":"'.$objarr[$i]->name.'",';
  	$result.='{"status":"normal",';
  	if($objarr[$i]->cmd=="")
  	{
  	  $err='"status":"check failed","error":"Logical relationship not given"';
  	  $result.=$err.'}';
  	  continue;
  	}
  	$exprs=$objarr[$i]->exprs;
  	if(count($exprs)<1)
  	{
  		$err='"status":"check failed","error":"The expression not given"';
  	  $result.=$err.'}';
  	  continue;
  	}
  	for($j=0;$j<count($exprs);$j++) //convert the encoding into maxima
  	{
  		if($exprs[$j]->encoding=="")
  		{
  		}
  	}
  	$cmd=$objarr[$i]->cmd;
    $cmdprefix=ConvertToPrefix(strrev($cmd)) ;
    $cmdprefix=strrev($cmdprefix);
    $k=0;
    $opsign=0;
    $opr='';
    $opd1='';
    $opd2='';
    $suwei=0;
    while($k<strlen($cmdprefix)) 
    { 
    	 $cmdprefix=rtrim($cmdprefix);
    	 if($cmdprefix[$k]==' ')
    	 { 
    	 	$k++;
    	 }
       if (ctype_alnum($cmdprefix[$k]) || $cmdprefix[$k]=='_' || $cmdprefix[$k]=='.') // Operands
       {
       	 $opd1=$opd2;
       	 $opd2='';
         do
         {
           $opd2.= $cmdprefix[$k];
           $k++;
         }while($k<strlen($cmdprefix) &&(ctype_alnum($cmdprefix[$k]) || $cmdprefix[$k]=='_' || $cmdprefix[$k]=='.'));
         $opsign++;
       }
       if($opsign==2)
       {
       	 if($opr=='=' || $opr=='~')
       	 {
           for($j=0;$j<count($exprs);$j++) //convert the encoding into maxima
    	     {
    		     if($exprs[$j]->expr==$opd1)
    		     {
    		     	 $opdvalue1=$exprs[$j]->value;
    		     }
    		     if($exprs[$j]->expr==$opd2)
    		     {
    		     	 $opdvalue2=$exprs[$j]->value;
    		     }
    	     }
  	     }else{
  	     	$opdvalue1=$opd1;
  	     	$opdvalue2=$opd2;
  	     }
       	 $opresult=doCmd($opr,$opdvalue1,$opdvalue2);
       	 $n=$k-1;
       	 while($cmdprefix[$n] != '&' && $cmdprefix[$n] != '=' && $cmdprefix[$n] != '|' && $cmdprefix[$n] != '~')
       	 {
       	 	 $n--;
       	 }
       	 $cmdprefix=substr($cmdprefix,0,$n).' '.$opresult.' '.substr($cmdprefix,$k,strlen($cmdprefix)-$k);
       	 $k=0;
       	 $suw=$opr;
       	 $opsign=0;
         $opr='';
         $opd1='';
         $opd2='';
         $cmdprefix=trim($cmdprefix);
         if(strlen($cmdprefix)<=2)
           break;
       }
       if ($cmdprefix[$k] == '&' || $cmdprefix[$k] == '=' || $cmdprefix[$k] == '|' || $cmdprefix[$k] == '~') //operator
       {
       	 $opr=$cmdprefix[$k];
         $opsign=0;
         $k++;     
       } 
    } 
    if($cmdprefix=='0')
      $result.='"equality":"false"}';
    else
      $result.='"equality":"true"}';
  }
  $result.=']';
  print $result;
?>
