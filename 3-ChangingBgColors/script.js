let but = document.querySelectorAll(".button");
let bod = document.querySelector("body");

but.forEach((col)=>{
    col.addEventListener('click',(e)=>{
        if(e.target.id=="yellow"){
            bod.style.backgroundColor=e.target.id;
            
        }
        if(e.target.id=="red"){
            bod.style.backgroundColor=e.target.id;
           
        }
        if(e.target.id=="black"){
            bod.style.backgroundColor=e.target.id;
           
        }
        if(e.target.id=="blue"){
            bod.style.backgroundColor=e.target.id;
            
        }
    })
})
