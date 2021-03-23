let countdate = new Date("jan 1, 2022 00:00:00").getTime();
let code= setInterval(function(){
    
   let now = new Date().getTime();
   let diff= countdate-now;
  
   let days=Math.floor(diff/(1000*60*60*24));

   let hours=Math.floor( (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

   let minutes=Math.floor( (diff % (1000 * 60 * 60 )) / (1000 * 60));
  
   let seconds=Math.floor( (diff % (1000 * 60)) / (1000));
   
   document.getElementById("day").innerText=days;
   document.getElementById("hour").innerText=hours;
   document.getElementById("minute").innerText=minutes;
   document.getElementById("second").innerText=seconds;

   
});