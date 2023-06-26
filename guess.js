let random = Math.floor(Math.random() * 101);
let chances=0;
console.log(random)
let input;
while(input!=random){
  input=Number.parseInt(prompt("Enter a number between 0 to 100"));
  if(input!=random){
    console.log("Wrong try again")
  }
    if(random>input){
      console.log("Number is bigger than"+input);
    }
    else if(random<input){
      console.log("Number is smaller than"+input)
    }
    chances+=1;
    
}
  console.log("Congrats You guessed right")
  console.log(`You scored ${100-chances} points.`)
