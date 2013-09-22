<?
class Stack{
 
  private $stack;
  private $top;
  private $base;
  
  function Stack(){
   
   $this->stack[0]["content"] ="NULL";
   $this->top = 0;
   $this->base = 0;
   
   return true;
  
  }
  
  function destroyStack(){
  
   unset($this->stack);
   unset($this->top);
   unset($this->base);
   
   return true;
  
  }
  
  function clearStack(){
  
   for($i = 1; $i <= $this->top; $i++ ){
    
    $this->stack[$i]["content"] ="";
   
   }
  
   $this->top = 0;
   $this->base = 0;
  
  }
  
  function isEmpty(){
  
   if($this->top == $this->base)
    return true;
   else
    return false;
  
  }
  
  function getTop(){
  
   if($this->top == $this->base)
    return false;
    
   return $this->stack[$this->top]["content"];
  
  }
  
  function push($node){
  
   $this->top += 1;
   $this->stack[$this->top]["content"] = $node;
   
   return true;
   
  }
  
  function pop(){
  
   if($this->top == $this->base){

    return false;
    
   }else{

    $temp = $this->stack[$this->top]["content"];
    
    unset($this->stack[$this->top]);
    
    $this->top -= 1;
    
    return $temp;
   
   }
   
  }
  
  function stackLength(){
  
   return ($this->top - $this->base);
   
  }
  
}
function priority($c)
{
 if ( $c == '&' ) return 2 ;
 else if ( $c == '|')          return 1 ;
 else if ( $c == '=' || $c == '~' ) return 3 ;
 else return 0 ;
}
function ConvertToPrefix ($s)
{
 $opr='';
 $i=0;
 $t='';
 $sta=new Stack;
 while($i<strlen($s))
 {     
  if ($s[$i]==' ')
  {
   $i++;
   continue;
  }
  if (ctype_alnum($s[$i]) || $s[$i]=='_' || $s[$i]=='.') // Operands
  {	
   while(($i<strlen($s))&& (ctype_alnum($s[$i]) || $s[$i]=='_' || $s[$i]=='.'))
   {
    $t.= $s[$i];
    $i++;
   }
   $t=$t.' ';
  }
  
  if (($i<strlen($s))&& $s[$i] == ')')
  {
   $sta->push($s[$i]);
   $i++;
  }
  
  if(($i<strlen($s))&& ($s[$i] == '&' || $s[$i] == '=' || $s[$i] == '|' || $s[$i] == '~')) //operator
  {
   if (!($sta->isEmpty()))
   {
    $opr = $sta->getTop();
    $sta->pop();
    while (priority($opr)>=priority($s[$i]))
    {
     $t.= $opr; 
     $opr = $sta->getTop();
     $sta->pop();
    }
    $sta->push($opr); 
    $sta->push($s[$i]);
   }else
    $sta->push($s[$i]) ;
   $i++;
  }
  
  if (($i<strlen($s))&& $s[$i] == '(') 
  { $opr = $sta->getTop(); 
  	$sta->pop(); 
  	while ($opr != ')') 
  	{ 
      $t.=$opr; 
      $opr = $sta->getTop();
      $sta->pop(); 
     } 
    $i++; 
   }
   
 }
 
 while (!($sta->isEmpty())) // While stack is not empty
 {
  $opr = $sta->getTop();
  $sta->pop();
  $t.=' '.$opr;
 }
 return $t;
}

?>