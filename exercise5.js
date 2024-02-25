function startUp(){
        var greeting=document.getElementById('greeting');
        var info=document.getElementById('info');
        greeting.innerHTML="Hello, Desmond";
        info.innerHTML="It is a lovely day";
    }
    

document.addEventListener('click',startUp);