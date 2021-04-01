function check_text() {
	var chat = document.getElementById("console").value;
	console.log(chat);

	if(chat == "냥냥이 안녕?"){
		console.log("냐옹~");
	}else if(chat == "혹시 물개니?"){
		console.log("사실 물개당!");
	}
	else{
		console.log(chat);
	}
}