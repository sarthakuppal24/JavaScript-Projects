let dayElement = document.querySelector(".d");
let hourElement = document.querySelector(".h");
let minElement = document.querySelector(".m");
let secElement = document.querySelector(".s");

// console.log(dayElement.innerText);
// console.log(hourElement.innerText);



function clock(){

    let currentDate = new Date();
    currentDate.toLocaleString('en-US', {
        hour12: false,
        });
    let currDay = currentDate.getDay();
    let currHour=String(currentDate.getHours()).padStart(2,'0');
    let currMin=String(currentDate.getMinutes()).padStart(2,'0');
    let currSec=String(currentDate.getSeconds()).padStart(2,'0');
    
    if(currDay==1){
        currDay="MO";
    }
    else if(currDay==2){
        currDay="TU";
    }
    else if(currDay==3){
        currDay="WE";
    }
    else if(currDay==4){
        currDay="TH";
    }
    else if(currDay==5){
        currDay="FR";
    }
    else if(currDay==6){
        currDay="SA";
    }
    else if(currDay==7){
        currDay="SU";
    }

    dayElement.innerText=currDay;
    hourElement.innerText=currHour;
    minElement.innerText=currMin;
    secElement.innerText=currSec;
}

setInterval(clock,1000);

// function start(){
//     clock(),
//     setInterval(clock,1000)
// };

// start();