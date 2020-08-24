var head=document.createElement('h1');
head.setAttribute('class','heading');
head.innerText="Sliding Number Game";

var wrapper=document.createElement('div');
wrapper.setAttribute('class','wrapper');

buttonCaller();

document.body.append(head);
document.body.append(wrapper);

function buttonCaller(){
    for(var i=0;i<4;i++){
        var btn=document.createElement('button');
        btn.setAttribute('class','btnChanger');
        btn.innerText="Game "+(i+1);
        wrapper.append(btn);
    }
}
var buttons=document.getElementsByClassName('btnChanger');

buttons[0].innerHTML="<a href=three/index.html>Easy</a>"
buttons[1].innerHTML="<a href=four/index.html>Medium</a>"
buttons[2].innerHTML="<a href=five/index.html>Hard</a>"
buttons[3].innerHTML="<a href=six/index.html>Extreme</a>"