const display= document.querySelector("#screen");

function appendtodisplay(input){
    display.value= display.value +input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
    display.value= eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}

function backspace(){
    display.value= display.value.slice(0, -1);   //starts from beginning index(0) and removes the last char
}