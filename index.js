// increment 1
let count1=0;
document.getElementById('btn-1').addEventListener('click',function(){
  count1++;
  const p1 =document.getElementById('p-1');
  
  if(p1.innerText==33){
    alert('You have completed 33 times')
  }
    else{
        p1.innerText= count1;
    }
})
// decrement 1

document.getElementById('btn-2').addEventListener('click',function(){
  count1--;
  const p1 =document.getElementById('p-1');
  
  if(p1.innerText==0){
    alert('You cant decrease less than 0')
  }
    else{ 
        p1.innerText= count1;
    }
})
// increment 2
let count2=0;
document.getElementById('btn-3').addEventListener('click',function(){
  count2++;
  const p2 =document.getElementById('p-2');
  
  if(p2.innerText==33){
    alert('You have completed 33 times')
  }
    else{
        p2.innerText= count2;
    }
})
// decrement 2

document.getElementById('btn-4').addEventListener('click',function(){
  count2--;
  const p2 =document.getElementById('p-2');
  
  if(p2.innerText==0){
    alert('You cant decrease less than 0')
  }
    else{
        p2.innerText= count2;
    }
})
// increment 3
let count3=0;
document.getElementById('btn-5').addEventListener('click',function(){
  count3++;
  const p3 =document.getElementById('p-3');
  
  if(p3.innerText==34){
    alert('You have completed 34 times')
  }
    else {
        p3.innerText=count3;
    }

})
// decrement 3

document.getElementById('btn-6').addEventListener('click',function(){
  count3--;
  const p3 =document.getElementById('p-3');
  
  if(p3.innerText==0){
    alert('You cant decrease less than 0')
  }
    else{
        p3.innerText= count3;
    }
})
// reset button
document.getElementById('btn').addEventListener('click',function(){
  
  const p1 =document.getElementById('p-1');
  p1.innerText=0;
  const p2 =document.getElementById('p-2');
  p2.innerText=0;
  const p3 =document.getElementById('p-3');
  p3.innerText=0;
  count1=0;
  count2=0;
  count3=0;
  
  
})
