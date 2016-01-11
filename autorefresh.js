
var refresh = function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) { //Done && ok
			var myelement = document.getElementById("myelement"); 
			myelement.innerHTML= xhr.responseText;
		} 
	};
	xhr.open('GET', 'datas.html'); //remplace ça par ton url
	xhr.send();
};

var update = function(){
	refresh();
	window.setTimeout(function(){
	 update();
	}, 1000);  
}

update();


