//selectors
const celspan = document.querySelector("#celspan");
const farspan = document.querySelector("#farspan");
const kelspan = document.querySelector("#kelspan");
const app = document.querySelector('.converter');
const lightbulb = document.querySelector('.fa-lightbulb');
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
    document.querySelector('html').classList.toggle('dark')
    lightbulb.classList.toggle('fas');
    lightbulb.classList.toggle('far');

})
//প্রথমে তিনটি ইনপুট বক্সকেই সিলেক্ট করে variable এ store করব 
const celciusInput = document.querySelector("#celVal");
const farenheitInput = document.querySelector("#farVal");
const kelvinInput = document.querySelector("#kelVal");

// এরপরে একটি var এ সবগুলি ইনপুট বক্সকেই store করব 
const inputs = document.querySelectorAll('input');

// এরপর for loop চালিয়ে প্রত্যেকটি ইনপুট বক্সের জন্য আলাদা আলাদাভাবে 
for(let i = 0;i< inputs.length;i++){
    // একেকটি ইনপুটকে input নামক variable এ store করব 
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
                kelvinInput.value = ( value+459) *5/9;
                break;
            case 'kelvin':
                celciusInput.value = value-273;
                farenheitInput.value = (value-273)*5/9+(32);
                break;
        }
    })
}






// const methods = {
//     celToFar : () =>{
//         tempVal.placeholder = "Enter Celcius Temperature";
//         secondaryPlaceholder.textContent = "Enter Celcius Temperature";
//         resultTyp.innerHTML = '<sup>o</sup>' + 'F';

//     },
//     farToCel : () =>{
//         tempVal.placeholder = "Enter Farenheit Temperature";
//     },
//     celToKel : () =>{
//         tempVal.placeholder = "Enter Celcius Temperature";
//     },
//     kelToCel : () =>{
//         tempVal.placeholder = "Enter Kelvin Temperature";
//     },
//     kelToFar : () =>{
//         tempVal.placeholder = "Enter Kelvin Temperature";
//     },
//     farToKel : () =>{
//         tempVal.placeholder = "Enter Farenheit Temperature";
//     }
// }






// tempVal.addEventListener('input',(e) => {
//     x = e.target.value;
// })

// //converterFunctions 
// const calculations = {
//     0: 0,
//     1 : ()  =>{
//         y = (x*9/5)+32;
//     }
// }
// //functions for method btns 
// convert.addEventListener('click',convertion)
// const convertion = () => {
//     calculations.i();
//     resultVal.innerHTML = y;
// }
// const calculations = {
//     method1: () =>{
//         resultVal.innerHTML = x-32;
//     }
// }
// darkToggle.addEventListener('click', () => {
    //     document.querySelector('html').classList.toggle('dark')
    //     bulb.classList.toggle('fas')
    //     bulb.classList.toggle('far')
    //     loginboxContainer.classList.toggle('bg-gradient-to-br')
    //     loginboxContainer.classList.toggle('bg-background')
    //     loginboxContainer.classList.toggle('bg-background-dark')
    
    // })