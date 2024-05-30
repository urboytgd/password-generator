const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const maxPassLength = 15;
let genPassBTN = document.getElementById("genPassBTN")
let newPass1 = document.getElementById("password1");
let newPass2 = document.getElementById("password2");

function passRandomizer() {
    let password = '';
    for (let i = 0; i < maxPassLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function genRandoPass() {
    newPass1.textContent = passRandomizer();
    newPass2.textContent = passRandomizer();
}




