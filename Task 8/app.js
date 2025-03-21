// const hour = document.getElementById("hour");
// const minute = document.getElementById("minute");
// const second = document.getElementById("second");

// const start = document.getElementById("start");
// const reset = document.getElementById("reset");

// const disp = document.getElementById("disp");

// var interval = null;
// var total = 0;

// totalValue = () => {
//   total =
//     Number(hour.value) * 3600 +
//     Number(minute.value) * 60 +
//     Number(second.value);
// };

// const Timer = () => {
  
//   if (totalValue >= 0) {
//     total--;
//     var hr = Math.floor(total / 3600);
//     var mt = Math.floor(total / 60 - hr * 60);
//     var sc = total - (hr * 3600 + mt * 60);
//     hour.value = hr;
//     minute.value = mt;
//     second.value = sc;
//   } else {
//       clearInterval(interval)
//     disp.innerText = "Times UP!";
//   }
// };

// start.addEventListener("click", () => {
//   clearInterval(interval);
//   totalValue();
//   interval= setInterval(Timer, 1000);

//   disp.innerText = "Timer Started!";
// });

// reset.addEventListener("click", () => {
//     clearInterval(interval);
//     hour.value=0;
//     minute.value =0;
//     second.value =0;
// total=0;
//     disp.innerText="Timer"
// });
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const start = document.getElementById("start");
const reset = document.getElementById("reset");

const disp = document.getElementById("disp");

var interval = null;
var total = 0;


const totalValue = () => {
  total =
    Number(hour.value) * 3600 +
    Number(minute.value) * 60 +
    Number(second.value);
};

const Timer = () => {
  if (total > 0) {
    total--; 
    var hr = Math.floor(total / 3600);
    var mt = Math.floor((total % 3600) / 60);
    var sc = total % 60;

    hour.value = hr;
    minute.value = mt;
    second.value = sc;
  } else {
    clearInterval(interval); 
    disp.innerText = "Time's UP!";
  }
};

start.addEventListener("click", () => {
  clearInterval(interval); 
  totalValue(); 
  interval = setInterval(Timer, 1000); 
  disp.innerText = "Timer Started!";
});

reset.addEventListener("click", () => {
  clearInterval(interval); 
  hour.value = 0;
  minute.value = 0;
  second.value = 0;
  total = 0; 
  disp.innerText = "Timer Reset!";
});
