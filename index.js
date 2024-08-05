







const btn = document.querySelectorAll('.btn');
const qoute = document.querySelector('.qoute');
const playerScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');
const computerRock = document.querySelector('.computer-rock');
const computerPaper = document.querySelector('.computer-paper');
const computerScissors = document.querySelector('.computer-scissors');
const active = document.querySelector('.active');
const userRock = document.querySelector('.user-rock');
const userScissors = document.querySelector('.user-scissors')
const userPaper = document.querySelector('.user-paper');
const restartBtn = document.querySelector('#restart')

let computerScore = 0;
let userScore = 0;


   



btn.forEach( choice => {
   choice.addEventListener('click', (e) => {
      let userChoice = e.target.innerHTML;


   



      choice = Math.floor(Math.random() * 3) + 1
      let computerChoice;
      switch(choice) {
         case 1:
            computerChoice = "rock";
            break
         case 2:
            computerChoice = "paper";
            break
         case 3:
            computerChoice = "scissors";
         }



      
 

      if(userScore < 5 && computerScore < 5) {
         playGame(userChoice, computerChoice)
      }

      
      playerScore.innerHTML = userScore;
      compScore.innerHTML = computerScore;
      
   })
})










function playGame( userChoice, computerChoice) {
   
   if(userChoice.toLowerCase() == computerChoice) {
      qoute.innerHTML =  "its a draw";
}else if(userChoice.toLowerCase() == "rock" && computerChoice == "scissors" || userChoice.toLowerCase() == "paper" && computerChoice == "rock" || userChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
         qoute.innerHTML = "You Win!";
         userScore++
}else{
         qoute.innerHTML = "You Lose!";
         computerScore++
   }
   
   


   if(computerChoice == 'rock') {
      computerRock.classList.add('active')
      if(computerScissors.classList.contains('active')) {
         computerScissors.classList.remove('active')
      }else if(computerPaper.classList.contains('active')) {
         computerPaper.classList.remove('active')
      }
   }else if(computerChoice == 'paper') {
      computerPaper.classList.add('active')
      if(computerRock.classList.contains('active')) {
         computerRock.classList.remove('active')
      }else if(computerScissors.classList.contains('active')){
         computerScissors.classList.remove('active')
      }
   }else {
      computerScissors.classList.add('active')
      if(computerRock.classList.contains('active')) {
         computerRock.classList.remove('active')
      }else if(computerPaper.classList.contains('active')){
         computerPaper.classList.remove('active')
      }
   }


   if(userChoice.toLowerCase() == 'rock') {
      userRock.classList.add('user-active')
      if(userPaper.classList.contains('user-active')){
         userPaper.classList.remove('user-active')
      }else if(userScissors.classList.contains('user-active')){
            userScissors.classList.remove('user-active')
         }
   }else if(userChoice.toLowerCase() == 'paper'){
      userPaper.classList.add('user-active')
      if(userRock.classList.contains('user-active')){
            userRock.classList.remove('user-active')
      }else if(userScissors.classList.contains('user-active')) {
            userScissors.classList.remove('user-active')
         }
   }else {
      userScissors.classList.add('user-active')
      if(userRock.classList.contains('user-active')) {
         userRock.classList.remove('user-active')
      }else if(userPaper.classList.contains('user-active')) {
         userPaper.classList.remove('user-active')
         }
      }

}


restartBtn.addEventListener('click', function(e) {

   location.reload()
})













