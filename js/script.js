document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("needbettername").onchange=changeEventHandler;},false);

function changeEventHandler(event){

    if (!event.target.value) {
	console.log("Deep Error: Catastrophe Eminem");
    }
    else {
	  action(coun.data,event.target.value);
	 }
}



function action(stuffo,stat){
    var tab = document.createElement("table");
    for (i = 0; i < stuffo.length; ++i){
	if (stuffo[i].state_name === stat.toUpperCase()) {
	    if (stuffo[i].county_name === "OTHER (COMBINED) COUNTIES") {
	    } else {
		console.log(stuffo[i]);
		var trow = document.createElement("tr");
		var tdee1 = document.createElement("td");
		var cname = stuffo[i].county_name;
		var ndee1 = document.createTextNode(stuffo[i].county_name);
		tdee1.appendChild(ndee1);
		trow.appendChild(tdee1);
		var tdee2 = document.createElement("td");
		var ndee2 = document.createTextNode(stuffo[i].Value);
		tdee2.appendChild(ndee2);
		trow.appendChild(tdee2);
		var tdee3 = document.createElement("td");
		var ndee3 = document.createElement("a");
		ndee3.setAttribute("href","http://www.google.com");
		var n2dee3 = document.createTextNode("Get Rainfall");
		ndee3.appendChild(n2dee3);
		tdee3.appendChild(ndee3);
		trow.appendChild(tdee3);
		tab.appendChild(trow);
	    }
	}
    }
    var element = document.getElementById("tableC");
    element.appendChild(tab);

}
