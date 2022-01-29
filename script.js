//selectors
const app = document.querySelector('.converter');
const appAnimation = ()=>{
    setInterval(() => {
       setTimeout(() => {
           app.classList.toggle('shadow-xl')
           app.classList.toggle('shadow-lg')
       }, 200); 
       setTimeout(() => {
        app.classList.toggle('shadow-lg')
        app.classList.toggle('shadow-md')
    },400); 
    setTimeout(() => {
        app.classList.toggle('shadow-md')
        app.classList.toggle('shadow-lg')
    }, 600); 
    setTimeout(() => {
        app.classList.toggle('shadow-lg')
        app.classList.toggle('shadow-xl')
    }, 800); 
    },800);
};
appAnimation();
const modeToggle = document.querySelector('#modeToggle');
modeToggle.addEventListener('click',()=>{
    document.querySelector('html').classList.toggle('dark');
    document.querySelector('i').classList.toggle('fas');
    document.querySelector('i').classList.toggle('far');
})

const celciusInput = document.querySelector("#celVal");
const farenheitInput = document.querySelector("#farVal");
const kelvinInput = document.querySelector("#kelVal");

const inputs = document.querySelectorAll('input');


for(let i = 0;i< inputs.length;i++){
    let input = inputs[i];
    input.addEventListener('input',(e)=>{
        let value = parseFloat(e.target.value);
        switch (e.target.name) {
            case 'celcius':
                farenheitInput.value = ( value*9/5 )+ 32 ;
                kelvinInput.value = value + 273;
                break;
        
            case 'farenheit':
                celciusInput.value = (value-32)*5/9;
                kelvinInput.value = ( value*9/5 )+ 32 + 273;
                break;
            case 'kelvin':
                celciusInput.value = value-273;
                farenheitInput.value = (value-273)*5/9+(32);
                break;
        }
    })
}
