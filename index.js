let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";
let messageEl=document.getElementById("message-el");
let sumEl=document.querySelector("#sum-el");
let cardEl=document.querySelector("#cards-el");
let player={
    name:"Rahul",
    chips: "145",
    sayHello: function(){
        console.log("Hello "+player.name);
    }
}
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+": RS "+player.chips;

function startGame(){
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    gameRule();
}

function gameRule(){
    sumEl.textContent="Sum: "+sum;
    cardEl.textContent=" Cards: ";
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" ";
    }
    if(sum<21){
        message="Do you want to draw a new card?";
    }
    else if(sum===21){
        message="Wohoo! You've got Blackjack! ";
    }
    else{
        message="You're out of the game! ";
        isAlive=false;
    }
    messageEl.textContent=message;
}

function newCard(){
    if(!isAlive&&!hasBlackJack)
        return;
    let card=getRandomCard();
    cards.push(card);
    sum+=card;
    gameRule();
}

function getRandomCard(){
    let ranCard= Math.floor(Math.random()*13)+1;
    if(ranCard==1){
        ranCard=11;
    }
    else if(ranCard==11||ranCard==12||ranCard==13){
        ranCard=10;
    }
    return ranCard;
}