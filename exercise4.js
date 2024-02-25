function startUp(){
    setTimeout(function(){
        var greeting=document.getElementById('greeting');
        var info=document.getElementById('info');
        greeting.innerHTML="Hello, Desmond";
        info.innerHTML="It is a lovely day"}
    ,1000);
    
}

document.addEventListener('DOMContentLoaded',startUp);