<?
echo "123";

		$seed = rand(0, 999999);
		$commandfile = "tempfile/command".$seed.".txt";
		$resultfile = "tempfile/result".$seed.".txt";
		$handle = fopen($commandfile, "w+");
		//$expression = "ratsimp((".$exp1.")-(".$exp2."));\n";
		$expression = "solve([x^2-4=0], [x]);\n";
		echo $expression;
		fwrite($handle, $expression);
		fwrite($handle, 'stringout("'.$resultfile.'", %o2);'."\n");
		//fwrite($handle, 'stringout("'.$resultfile.'", %o1);'."\n");
		fwrite($handle, "quit();\n");
		fclose($handle);
		exec('maxima -q -b '.$commandfile);
		$handle = fopen($resultfile, "r+");
		fgets($handle);						// Skip the newline at the head of file
		$out = fgets($handle);
		$out = str_replace(";", "", $out);
		$out = str_replace("\n", "", $out);
		echo $out;
		echo "33";
		//exec('rm -f '.$commandfile);
		//;exec('rm -f '.$resultfile);
		if($out=='0') return 1;
		else return 0;
 
?>