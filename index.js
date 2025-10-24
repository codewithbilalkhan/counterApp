let increamentbutton = document.getElementById('increment');
let decreamentbutton = document.getElementById('decrement');
let resetbutton = document.getElementById('reset');
let counterValueDisplay = document.getElementById('counterValue');

let modal = document.getElementById('resetModal');
let closeBtn = document.getElementsByClassName('close')[0];
let confirmBtn = document.getElementById('confirmReset');
let cancelBtn = document.getElementById('cancelReset');



let countervalue = 0;
 updateResetVisibility();

increamentbutton.addEventListener('click',function(){
   
    countervalue++;
    counterValueDisplay.innerText = countervalue;
     updateResetVisibility();
})

decreamentbutton.addEventListener('click',function(){
   
    countervalue--;
    counterValueDisplay.innerText = countervalue;
     updateResetVisibility();
})

resetbutton.addEventListener('click',function(){
    modal.style.display = 'block';
     updateResetVisibility();
})


closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
})


cancelBtn.addEventListener('click', function(){
    modal.style.display = 'none';
})

confirmBtn.addEventListener('click', function(){
    countervalue = 0;
    counterValueDisplay.innerText = countervalue;
    modal.style.display = 'none';
     updateResetVisibility();
})

function updateResetVisibility() {
  if(countervalue === 0 ) {
    resetbutton.style.display = 'none';
  } else {
    resetbutton.style.display = 'inline-block';
  }
}

window.addEventListener('click', function(event){
    if (event.target == modal) {
        modal.style.display = 'none';
    }
})
