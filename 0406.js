var app = document.getElementById("msgShow");
    var typewriter = new Typewriter(app, {
        loop: false,
      
    });

typewriter
    .typeString("저랑 대화해요~")
    .start();

var follow = 0;

function chat(){
    var txt = document.getElementById("input_msg").value;

    if(follow ==1)
        {
            if(values.includes("그만")){
                typewriter.deleteAll(1);
                typewriter.typeString("그만한다냥");
                typewriter.start();
                              
                follow=0;

            }
            else {
              typewriter.deleteAll(1);
              typewriter.typeString(txt + "냥");
              typewriter.start();
            }
        }

	else{
        typewriter.deleteAll(1);
        typewriter.typeString("뭐다냥냥");
        typewriter.start();
         
         
        follow=1;
	}
    }  