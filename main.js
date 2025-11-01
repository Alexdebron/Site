// main.js - PIN login logic (externalized)
// place this file in the same folder as index.html (or adjust the <script src> path)

let pin = "";
const CORRECT_PIN = "2008"; // change PIN here
const code = document.getElementById("login-code");
const msg = document.getElementById("msg");
const login = document.getElementById("login");
const site = document.getElementById("site");

function loginKey(n){
  if(pin.length < 4){
    pin += n;
    updateDisplay();
  }
}

function loginClear(){
  pin = "";
  updateDisplay();
  if (msg) msg.textContent = "";
}

function loginConfirm(){
  if(pin === CORRECT_PIN){
    if (msg) { msg.style.color = "#00ff99"; msg.textContent = "Access Granted..."; }
    setTimeout(()=>{
      if (login) login.style.display = "none";
      if (site) site.style.display = "block";
      document.body.style.overflow = "auto";
    },600);
  } else {
    if (msg) { msg.style.color = "#ff6666"; msg.textContent = "Incorrect PIN!"; }
    pin = "";
    updateDisplay();
  }
}

function updateDisplay(){
  if (code) code.value = "•".repeat(pin.length);
}

// optional keyboard support
document.addEventListener("keydown", (e)=>{
  if (!login || login.style.display === "none") return;
  if (e.key >= "0" && e.key <= "9") loginKey(e.key);
  else if (e.key === "Backspace") { pin = pin.slice(0,-1); updateDisplay(); }
  else if (e.key === "Enter") loginConfirm();
});
