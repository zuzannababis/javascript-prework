function printMessage(msg){
	// var div = document.createElement('div');
	// console.log(div)
	// div.innerHTML = msg;
	// document.getElementById('messages').appendChild(div);
	document.getElementById('messages').innerHTML = msg;
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}