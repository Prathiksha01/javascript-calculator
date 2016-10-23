$(document).ready(function(){
	var exp, clear = false, text = "", ans = "";

	$("button").click(function(){
	exp = $(this).attr("value");

	
	
    
	if((parseInt(exp, 10)) == exp || exp === "." || exp === "/" || exp === "*" || exp === "-" || exp === "+" || exp === "%") 
	{
      if(text !== "") {
        text += exp;
        $("#jumbo").text(text);
      } else 
        text = exp;
        $("#jumbo").text(text);
    }
     
     if(exp === "AC")
    {
      text = "";
      $("#jumbo").text(text);
    } else if(exp === "CE") {
      text = text.slice(0, -1);
      $("#jumbo").text(text);
    } else if(exp === "=") {
      ans = eval(text);
      $("#jumbo").text(ans);
      text = ans;
    }else if(exp === "Ans") { 
      ans = eval(text);
      text = ans;
      $("#jumbo").text(text); 
    }
});
});
