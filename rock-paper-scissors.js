const score={
    wins:0,
    losses:0,
    ties:0
};

updateScoreElement();

function playGame(playerMove){

   
    let computerMove=pickComputerMove();
    

    let Result = '';
    if (playerMove === 'Scissors'){

        
        if (computerMove === 'Rock'){
            Result = 'you lose';
        }else if(computerMove === 'Paper'){
            Result = 'you win';
        }else if(computerMove === 'Scissors'){
            Result = 'tie';
        }

    }else if (playerMove ==='Paper'){

    
           
        if (computerMove === 'Rock'){
            Result='you win';
        }else if(computerMove === 'Paper'){
            Result='tie';
        }else if(computerMove === 'Scissors'){
            Result = 'you lose';
        }
    }else if(playerMove === 'Rock'){

        if (computerMove === 'Rock'){
            Result='tie';
        }else if(computerMove === 'Paper'){
            Result='you lose';
        }else if(computerMove === 'Scissors'){
            Result = 'you win';
        }             
    }
    if (Result === 'you win'){

        Score.wins = score.wins+1

    }else if(Result === 'you lose'){
        score.losses=score.losses+1
    }else if(Result==='tie'){
        score.ties=score.ties+1
    }     
   
 
    
    updateScoreElement();

    document.querySelector('.js-result').innerHTML=Result;
    document.querySelector('.js-move').innerHTML=`you<img src="${playerMove}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon"> computer`;

    

}
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`wins ${score.wins}  , losses ${score.losses}  , ties ${score.ties}`;

}

 
function pickComputerMove(){

    const randomNumber = Math.random();
    let computerMove = '';
    
    if (randomNumber>0 && randomNumber<1/3){
        computerMove = 'Rock';
    }
    else if(randomNumber>1/3 && randomNumber<2/3){
        computerMove = 'Paper';
    }
    else if(randomNumber>2/3 && randomNumber<1){
        computerMove = 'Scissors';
    }
    console.log(computerMove);
    return computerMove;
}