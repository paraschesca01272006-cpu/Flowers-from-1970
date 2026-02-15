var audio = document.getElementById('audio');
var button = document.getElementById('button');
var count = 0;
var a;
function b()
{
    if(count == 1)
    {
        document.getElementById("hi").style.display="inline";
        return count=0
    }
    else
    {
        document.getElementById("hi").style.display="none";
        return count=1
    }
}


function a(){
    if(count == 0){
        count = 1;
        audio.play();
    }else{
        count = 0;
        audio.pause();
    }
}

function show_hide(){
    a();
    b();
}

button.addEventListener('click',hideshow,false);

    function hideshow() {
        document.getElementById('button').style.display = 'block'; 
        this.style.display = 'none'
    }  

