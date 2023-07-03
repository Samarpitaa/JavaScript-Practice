let userScore=0;
let compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const scoreboard_div=document.querySelector(".scoreboard");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice(){
  const choices=['r','p','s'];
const randomNumber=(Math.floor(Math.random()*3));
  return choices[randomNumber];
  

}
function convertToWord(letter){
  if(letter==="r")return "rock";
  if(letter==="p")return "paper";
  if(letter==="s")return "scissors"
}

function win(userChoice,compChoice){
  userScore++;
  userScore_span.innerHTML=userScore;
  result_div.innerHTML=convertToWord(userChoice)+"(user) beats "+convertToWord(compChoice)+"(comp) YOU WIN! "
}

function lose(userChoice,compChoice){
  compScore++;
compScore_span.innerHTML=compScore;
  result_div.innerHTML=convertToWord(compChoice)+"(comp) beats "+convertToWord(userChoice)+"(user) COMPUTER WINS! ";
  
}
function tie(userChoice){
  result_div.innerHTML="You Both Chose The Same! "+convertToWord(userChoice);
}

function game(userChoice){
  const computerChoice=getComputerChoice();
  switch(userChoice+computerChoice){
    case 'rs':
    case 'sp':
    case 'pr':
      win(userChoice,computerChoice);
      break;
    case 'sr':
    case 'ps':
    case 'rp':
      lose(userChoice,computerChoice);
      break;
    case 'ss':
    case 'pp':
    case 'rr':
      tie(userChoice);
      break;
    
  }
  
  
  
  
}
function main(){
rock_div.addEventListener('click', function() {
  game("r");
});

paper_div.addEventListener('click', function(){
  game("p");
});

scissor_div.addEventListener('click', function(){
 game("s");
});}
main();