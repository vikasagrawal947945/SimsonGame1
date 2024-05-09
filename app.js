let gameseq = []; // jo game ke sequence ko store karayrga game kaise chl raha hai
let userseq = []; // jo user ke squece ko store karayegaa ki user kya press kr raha hai
let btns = ["yellow", "red", "purple", "green"]; // saari ki sari button jo display ho rahi hai
let start = false; // initially hamara game stop hai
let level = 0;
let h2 = document.querySelector("h2");

//koi bhi key press karenge  keyboard ki to game start ho jayega issi liye abhi pure document pe event listiner lagayenge
document.addEventListener("keypress", function () {
  if (start == false) {
    // jb game bnd hoga tabhi start hoga
    console.log("game is started");
    start = true;
    levelup();
  }
});

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;
  // selecting  button
  let randIndex = Math.floor(Math.random() * 3); // button is 4, from 0 to 3 see on btns array conole log kr ke dekh skte hai
  let randcolor = btns[randIndex]; // button ki class aa gayi hai;
  let randbtn = document.querySelector(`.${randcolor}`); //  button ki class ke help se button select ho rahi hai
  gameseq.push(randcolor);
  console.log(gameseq);
    
  btnflash(randbtn); // jb game start hoga jo random button aayi hai ye function uspe flash generate karega
}

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

// selecting all the four button using querrySelctor and using loop adding event listner
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) { //saare ke saare button pe aaek loop chala denge
  btn.addEventListener("click", pressbtn); // jaise hi button ko press kiya jaye presstn fuction excute ho jaye
}

function pressbtn() {
 // console.log("button was pressed");
 // console.log(this); // this tells  which button is pressed
 let btn = this; // jon si button user ne click hui hai vo btn pe store ho jaygi;
  // pass this button to userflash function  for flash genrate ho kyoki hame tb bhi flash genrate krna hai jb user click karega button ko
  userflash(btn); // ye  function jb execute hoga jb uswr button ko flash karega
  usercolour = btn.getAttribute("id");
  userseq.push(usercolour);
  checkAns(userseq.length - 1);
}

function checkAns(idx) {
 // console.log("current level", level);

  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game over ! your score was <b>${level} </b> <br>press any key to restart`;
      reset();  // this fuction reset everything to zero see this function
  }
}

  function reset() // this fuction reset everything to zero
  {
     gameseq =[];
     userseq = [];
     level = 0;
     start = false;

  }