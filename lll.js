
var qst= document.getElementsByClassName('questions');
var input = document.getElementById('input');

var chois= document.getElementsByClassName('choises');
var count =-1;
var score = 0;
var input2 = document.querySelectorAll('input')[1];
input.onclick = function(){
    if(count==-1){
        input.value='Next';
    }
    count++;
    qst[count].classList.remove('inactive');
    chois[count].classList.remove('inactive');
    for(var j=0 ;j<qst.length;j++){
        if(j!=count){
            qst[j].classList.add('inactive');
            chois[j].classList.add('inactive');
        }
    }
 
  if(count==2){
   input2.value = `Your score is ${score}`;
    qst[count].classList.add('inactive');
    chois[count].classList.add('inactive');
      input2.value = 'your score is';
      input2.classList.remove('inactive');
   }
}
var right=['manel','engineer','20'];
var ch = document.getElementsByClassName('ch');
var k=0;

function check(){
    if(k>=ch.length)
        k=0;
    if(this.innerHTML===right[k]){
        this.classList.toggle('right');
      score++;
    }
      
    else{
        this.classList.toggle('false');
       
    }
   

  k++;
}
for(var i=0 ; i<ch.length ; i++){
  
     ch[i].addEventListener('click',check);
}
