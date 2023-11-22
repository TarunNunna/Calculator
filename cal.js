//to do ^ and , functional
let mode = document.querySelector('.icon');
var themechange = false;
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            //  for = we need result
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = eval(string);
            document.querySelector('input').value = " ";
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value=string;
        } 
       
    })
})

const nightmode = ()=>{
  mode.classList.replace('fa-moon','fa-sun');
  themechange= false;
}

const lightmode = ()=>{
    mode.classList.replace('fa-sun','fa-moon');
    
    themechange=true;
}

mode.addEventListener('click',()=>{
    if(themechange){
        nightmode();
    } 
    else{
        lightmode();
        
    }
    
})

