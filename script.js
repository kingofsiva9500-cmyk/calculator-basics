const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");


buttons.forEach(button => {
    button.addEventListener("click",()=>{
        const value = button.dataset.value;

        if(value === "C"){
            display.value = "";
        }
        else if(value === "DEL"){
             display.value = display.value.slice(0, -1);
        }
        else if(value ==="%"){
        try {
                display.value = eval(display.value) / 100;
            } 
            catch {
                display.value = "Error";
            }
        }
    
          else if (value === "=") {
            try {
                display.value = eval(display.value);
            } 
            catch {
                display.value = "Error";
            }
        }
        else{
            display.value += value;
        }

    })
})