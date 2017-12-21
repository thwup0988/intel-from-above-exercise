document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("needbettername").onchange=changeEventHandler;},false);

function changeEventHandler(event){

    if (!event.target.value) {
	console.log("Deep Error: Catastrophe Eminem");
    }
    else {console.log(event.target.value);
	  console.log(coun.data);
	 }
}



function action(){
    var foo = document.getElementById("needbettername");

    console.log(foo);
}
