
function startUp(){
    var greeting=document.getElementById('greeting');
    var info=document.getElementById('info');

    function changeh1(){
        greeting.innerHTML="Hello, Desmond";
        greeting.removeEventListener('mouseleave',revert);
    }

    function changep(){
        info.innerHTML="It is a lovely day";
        info.removeEventListener('mouseleave',revert);
    }

    function revert(){
        greeting.innerHTML="Hello, World";
        info.innerHTML="It is a fair day";
    }


    greeting.addEventListener('mouseenter',()=>{greeting.innerHTML="Hello, Desmond";});
    info.addEventListener('mouseenter',()=>{info.innerHTML="It is a lovely day";});
    greeting.addEventListener('mouseleave',revert);
    info.addEventListener('mouseleave',revert);

    greeting.addEventListener('click',changeh1);
    info.addEventListener('click',changep);

}

document.addEventListener('DOMContentLoaded',startUp);