<?
 function doCmd($opr,$opd1,$opd2)
 {
 	$opresult='';
 	 switch($opr)
 	 {
 	 	case '=':
 	 	case '~':$opresult=checkthis($opd1,$opd2);  
 	 	         break;
 	 	case '|': if($opd1=='1' || $opd2=='1')
 	 	            $opresult='1'; 
 	 	          else
 	 	            $opresult='0';
 	 	          break;
 	 	case '&': if($opd1=='0' || $opd2=='0')
 	 	            $opresult='0'; 
 	 	          else
 	 	            $opresult='1';
 	 	         break;
 	  default: break;
 	 }
 	 return $opresult;
 }
 function checkthis($exp1,$exp2)
 {
		$seed = rand(0, 999999);
		$commandfile = "tempfile/command".$seed.".txt";
		$resultfile = "tempfile/result".$seed.".txt";
		$handle = fopen($commandfile, "w+");
		$expression = "ratsimp((".$exp1.")-(".$exp2."));\n";
		fwrite($handle, $expression);
		fwrite($handle, 'stringout("'.$resultfile.'", %o2);'."\n");
		fwrite($handle, "quit();\n");
		fclose($handle);
		exec('maxima -q -b '.$commandfile);
		$handle = fopen($resultfile, "r+");
		fgets($handle);						// Skip the newline at the head of file
		$out = fgets($handle);
		$out = str_replace(";", "", $out);
		$out = str_replace("\n", "", $out);
		exec('rm -f '.$commandfile);
		exec('rm -f '.$resultfile);
		if($out=='0') return 1;
		else return 0;
 }
?>