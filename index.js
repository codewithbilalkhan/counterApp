let increamentbutton = document.getElementById('increment');
let decreamentbutton = document.getElementById('decrement');
let resetbutton = document.getElementById('reset');
let counterValueDisplay = document.getElementById('counterValue');

let modal = document.getElementById('resetModal');
let closeBtn = document.getElementsByClassName('close')[0];
let confirmBtn = document.getElementById('confirmReset');
let cancelBtn = document.getElementById('cancelReset');
let colorButtons = document.querySelectorAll('.color-btn');

let countervalue = 0;
updateResetVisibility();

const colorThemes = {
    blue: 'linear-gradient(135deg, #3B82F6, #1D4ED8, #1E40AF)',
    red: 'linear-gradient(135deg, #EF4444, #DC2626, #B91C1C)',
    green: 'linear-gradient(135deg, #10B981, #059669, #047857)',
    yellow: 'linear-gradient(135deg, #F59E0B, #D97706, #B45309)'
};

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
    if(countervalue === 0) {
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


colorButtons.forEach(button => {
    button.addEventListener('click', function(){
        const color = this.getAttribute('data-color');
        
        
        colorButtons.forEach(btn => btn.classList.remove('active'));
     
        this.classList.add('active');
        
    
        if (colorThemes[color]) {
            document.body.style.background = colorThemes[color];
        }
    });
});
