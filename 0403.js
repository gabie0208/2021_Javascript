function chat(){
    var txt = document.getElementById("input_msg").value;
    var msg = document.getElementById("msgShow");

    if(txt =="안녕"){
        msg.innerHTML = "안녕하세요";
    }
    else if(txt == "이름이 뭐야?"){
        msg.innerHTML = "gabie입니다";
    }
    else if(txt == "몇 살이야?"){
        msg.innerHTML = "비밀입니다";
    }
    else if(txt == "뭐해?"){
        msg.innerHTML = "그냥 생각중입니다";
    }
    else if(txt == "자?"){
        msg.innerHTML = "아직 잘 시간이 아닙니다";
    }
    else if(txt == "메롱" || txt == "바보"){
        msg.innerHTML = "나쁜 말은 하지 말아주세요";
    }
    else{
        msg.innerHTML = "미안하지만 모르는 말입니다";
    }  
}