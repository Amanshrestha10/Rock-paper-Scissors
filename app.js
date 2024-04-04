let userscore= 0;
let computerscore= 0;

const chocies = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");

const gencompchoice =() => {
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}
const drawgame = () =>{
    msg.innerText= "Game was draw.";
    msg.style.backgroundColor = "grey";
}

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText= `You win ${userchoice} wins from  ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerscore++;
        computerscorepara.innerText = computerscore;
        msg.innerText= `you lost ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const play = (userchoice) => {
    const compchoice = gencompchoice();
    

    if(userchoice === compchoice){
        drawgame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper") {
            userwin = compchoice === "scissors"? false : true
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}
chocies.forEach ((choice) => { 
    choice.addEventListener("click", ()=> {
        const userchoice= choice.getAttribute("id");
        play(userchoice);
    });
});
