let ruleBox = document.querySelector(".ruleBox");
let ruleBtn = document.querySelector(".rules-btn");
let nextBtn = document.querySelector(".next-btn");
let playBtn = document.querySelector(".Playagain");
let hands = document.querySelector(".hands");
let contest = document.querySelector(".contest");
let usr_img = document.querySelector("#Upick");
let pc_img = document.querySelector("#Cpick");
let u_border=document.querySelector(".userImage");
let p_border=document.querySelector(".pcImage")
let result=document.querySelector("#result")
let userScoreElem = document.querySelector("#num1");
let computerScoreElem = document.querySelector("#num2");

// localStorage.setItem("userScore", 0);
// localStorage.setItem("computerScore", 0);
let userScore = Number(localStorage.getItem("userScore"));
let ComScore = Number(localStorage.getItem("computerScore"));
userScoreElem.innerHTML=userScore;
computerScoreElem.innerHTML=ComScore
const hideRule=()=>{
    ruleBox.style.display="none";
}

const showRules=()=>{
    if(ruleBox.style.display==="none"){
        ruleBox.style.display="inline";
    }
    else{
        ruleBox.style.display="none";
    }
}
const SeletecH = (uhand) => {
    hands.style.display = "none";
    ruleBox.style.display="none";
    contest.style.display="flex";
    if(uhand==='Rock'){
        usr_img.src="assets/Rock.svg";
        u_border.style.border= "16px solid #DE3A5A";
    }
    if(uhand==='Paper'){
        usr_img.src="assets/Paper.svg"
        u_border.style.border= "16px solid #ECA81E";
    }
    if(uhand==='Scissors'){
        usr_img.src="assets/Scissors.svg"
        u_border.style.border= "16px solid #516EF4";
    }

    let choices = ["Rock", "Paper", "Scissors"];
    let pcHand = choices[Math.floor(Math.random() * 3)];
    comapreHands(uhand,pcHand);

    if(pcHand==="Rock")
    {
        pc_img.src="assets/Rock.svg";
        p_border.style.border= "16px solid #DE3A5A";
    }
    if(pcHand==="Paper")
    {
        pc_img.src="assets/Paper.svg";
        p_border.style.border= "16px solid #ECA81E";
    }
    if(pcHand==="Scissors")
    {
        pc_img.src="assets/Scissors.svg";
        p_border.style.border= "16px solid #516EF4";
    }
}
const playAgain=()=>{
    hands.style.display = "inline-flex"
    contest.style.display="none"
    nextBtn.style.display="none";
    ruleBtn.style.marginRight="100px"
}

const updateScore = (uScore, cScore) => {
    userScoreElem.innerHTML = uScore;
    computerScoreElem.innerHTML = cScore;
  }

const comapreHands = (ushand,pchand)=>{
    if(ushand===pchand){
        result.innerHTML="TIE";
        result.style.textAlign="center";
        nextBtn.style.display="none";
        ruleBtn.style.marginRight="100px"
        playBtn.style.left="0px"
    }
    else if((ushand==="Paper" && pchand==="Rock") || 
            (ushand==="Scissors" && pchand==="Paper")||
            (ushand==="Rock" && pchand==="Scissors")){
                result.innerHTML="YOU WON";
                userScore += 1;
                localStorage.setItem("userScore", userScore);
                updateScore(userScore, ComScore);
                nextBtn.style.display="inline-block";
                ruleBtn.style.marginRight="25px";
                playBtn.style.left="20px"
    }
    else{
        result.innerHTML="YOU LOST";
        ComScore += 1;
        localStorage.setItem("computerScore", ComScore);
        updateScore(userScore, ComScore);
        nextBtn.style.display="none";
        ruleBtn.style.marginRight="100px"
        playBtn.style.left="20px"
    }
    
}