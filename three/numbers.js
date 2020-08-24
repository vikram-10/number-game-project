var wrapper=document.createElement('div');
wrapper.setAttribute('class','wrapping');

var header=document.createElement('h1');
header.setAttribute('class','heading');
header.setAttribute('id','dummyID');
header.innerText="Number Game";

var container=document.createElement('div');
container.setAttribute('class','contain');



document.body.append(wrapper);
wrapper.append(header);
wrapper.append(container);


var blankPosition;
var numBoxes=9;
var blank;
//USING THE RANDOM FUNCTION TO GENERATE RANDOM IMAGES
    var a=[];
    var flag=0;
    a[0]=Math.floor(Math.random()*8)+1
    for(var i=0;a.length<9;i++){
        var ip=Math.floor(Math.random()*9)+1;
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
for(var k=0;k<a.length;k++){
  if(counter%3==0){
      var breaker=document.createElement('br');
      container.append(breaker);
  }  
  var box=document.createElement('img');
  box.setAttribute('class','rounder');
  box.setAttribute('src',`../assets/b${a[k]}.gif`);
  box.setAttribute('id',`img${a[k]}`);             //ASSIGNING RANDOM VALUES TO IMAGE SRC'S
  container.append(box);
  counter++;
}
//---------------------------------------------------------



var images=document.getElementsByClassName('contain');
var imgPositions=(images[0].getElementsByTagName('img'));
blankPosition=gettingBlankPosition(imgPositions);



//FOR KEYBOARD EVENT LISTENERS
var a=[];
window.addEventListener("keyup",function(e){
        if(e.keyCode===39){
            blankPosition=switchBoxes(blankPosition,+1);
            a.length=0
            for(var k=0;k<imgPositions.length;k++){
                var imgpos=(imgPositions[k].id).split("img");
                a.push(imgpos[1]);
                checker();
            }
        }
        else if(e.keyCode===37){
            blankPosition=switchBoxes(blankPosition,-1);
            a.length=0;
            for(var k=0;k<imgPositions.length;k++){
                var imgpos=(imgPositions[k].id).split("img");
                a.push(imgpos[1]);
                checker();
            }
        }
        else if(e.keyCode==38){
            blankPosition=switchBoxes(blankPosition,-3);
            a.length=0;
            for(var k=0;k<imgPositions.length;k++){
                var imgpos=(imgPositions[k].id).split("img");
                a.push(imgpos[1]);
                //console.log(imgpos[1]);
                checker();
            }
        }
        else if(e.keyCode==40){
            blankPosition=switchBoxes(blankPosition,+3)
            a.length=0;
            for(var k=0;k<imgPositions.length;k++){
                var imgpos=(imgPositions[k].id).split("img");
                a.push(+imgpos[1]);
            }
            checker();
        }
//TO CHECK IF ALL THE ELEMTS FROM A AND IMAGE ID NUMBER ARE SAME    
function checker(){
 var count1=0;       
        for(var l=0;l<a.length;l++){
            if(a[l]==l){
                count1++;
            }
        }
        if(count1==a.length){
            var heading=document.getElementById('dummyID');
            heading.innerText="GAME OVER!!!";
        }
        else{
            count1=0;
        }
}
});


function switchBoxes(blankPosition,num){
    let temp=imgPositions[blankPosition].src;
    let temp1=imgPositions[blankPosition].id
    imgPositions[blankPosition].src=imgPositions[blankPosition+num].src;
    imgPositions[blankPosition].id=imgPositions[blankPosition+num].id;
    imgPositions[blankPosition+num].src=temp;
    imgPositions[blankPosition+num].id=temp1;
    return blankPosition+num;
}


//put if in while(until elements are ordered);


function gettingBlankPosition(imgPositions){
for(var k=0;k<imgPositions.length;k++){
    if(imgPositions[k].id=="img9"){
        return k;
    }
}
}
