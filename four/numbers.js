var wrapper=document.createElement('div');
wrapper.setAttribute('class','wrapping');

var header=document.createElement('h1');
header.setAttribute('class','heading');
header.innerText="Number Game";

var container=document.createElement('div');
container.setAttribute('class','contain');


document.body.append(wrapper);
wrapper.append(header);
wrapper.append(container);

randomer();
var blank;
function randomer(){
    var a=[];
    var flag=0;
    a[0]=Math.floor(Math.random()*8)+1
    for(var i=0;a.length<16;i++){
        var ip=Math.floor(Math.random()*16)+1;
        for(var j=0;j<a.length;j++){
            if(a[j]==ip){
                flag=1;
            }
        }
        if(flag==0){
            a.push(ip);
        }
        else{
            flag=0;
            continue;
        }
        flag=0;
    }
    console.log(a);
    var counter=0;
    var max=(Math.max(...a));
  
  for(var j=0;j<a.length;j++){
      if(counter%4==0){
          var breaker=document.createElement('br');
          container.append(breaker);
      }
      var imgur=document.createElement('img');
      imgur.setAttribute('class','imgur');
      imgur.setAttribute('src',"/../assets/b"+a[j]+".gif");
      if(a[j]==max){
          imgur.setAttribute('style','display:none');
          blank=j;
    }
      container.append(imgur);
      counter++;
  } 
}
console.log(blank);
var images=document.getElementsByClassName('imgur');
images[blank].addEventListener("click",function(){
   console.log("You clicked the blank");
});


