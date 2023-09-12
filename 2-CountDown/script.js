let enddate = "11 Sept 2023 8:44 PM";

let showdate = document.querySelector(".showtime");
showdate.innerHTML=enddate;

function clock(){
    let currdate= new Date();
    let endDate= new Date(enddate);
    // console.log(currdate);
    // console.log(endDate);
    // diff convertedin secs
    let diff = (endDate-currdate)/1000;
    
    if(diff<0) return; 
    let day = diff/(24*3600);
    let daycont = document.querySelector(".d");
    daycont.innerHTML=Math.floor(day);

    let hours = (diff/3600)%24;
    let hourcont = document.querySelector(".h");
    hourcont.innerHTML=Math.floor(hours);

    let minutes = (diff/60)%60;
    let mincont = document.querySelector(".m");
    mincont.innerHTML=Math.floor(minutes);

    let seconds = (diff%60);
    let seccont = document.querySelector(".s");
    seccont.innerHTML=Math.floor(seconds);
}

setInterval(clock,1000);