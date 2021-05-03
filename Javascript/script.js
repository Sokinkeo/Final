var a;
function show_hide()
{
	if (a==1) 
	{

		document.getElementById("footer").style.display="none";
		document.getElementById("btn-footer").style.marginBottom = "-75px";
		return a=0;
	}
	else
	{
		document.getElementById("footer").style.display="inline";
		document.getElementById("btn-footer").style.marginBottom = "0px";
		return a=1;
	}
}
document.getElementById("footer").style.display="none";
document.getElementById("btn-footer").style.marginBottom = "-75px";
var b;
function dark_mode() {
	if (b==1) {
	document.body.style.background = "white";
	document.getElementById("item1").style.color = "black";
	document.getElementById("item2").style.color = "black";
	document.getElementById("item3").style.color = "black";
	document.getElementById("item4").style.color = "black";
	return b=0;
	}
	else
	{

	document.body.style.background = "black";
	document.getElementById("item1").style.color = "white";
	document.getElementById("item2").style.color = "white";
	document.getElementById("item3").style.color = "white";
	document.getElementById("item4").style.color = "white";
	return b=1;
	}


}

