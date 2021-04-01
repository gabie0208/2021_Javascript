function chat(){
    var txt = document.getElementById("input_msg").value;
    var msg = document.getElementById("msgShow");

    if(txt =="안녕"){
        msg.innerHTML = "냐옹! 반갑다옹!";
    }
    else if(txt == "이름이 뭐야?"){
        msg.innerHTML = "냐옹이다옹!";
    }
    else if(txt == "뭐해?"){
        msg.innerHTML = "그냥 있다옹!";
    }
    else if(txt == "자?"){
        msg.innerHTML = "아직 안 잔다옹!";
    }
    else if(txt == "메롱" || txt == "바보"){
        msg.innerHTML = "냐옹!!! 못된 말이다옹!";
    }
    else if(txt=="불 꺼줘"){
        document.body.style.backgroundColor = "black";
        msg.style.color = "white";
        msg.innerHTML = "불 껐다옹!";
    }
    else if(txt=="불 켜줘"){
        document.body.style.backgroundColor="white";
        msg.innerHTML = "불 켰다옹!";
        msg.style.color = "black";
    }
    else{
        msg.innerHTML = "모르는 말이다옹!";
    }  
}