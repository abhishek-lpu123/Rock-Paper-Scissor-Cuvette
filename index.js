let ruleBox = document.querySelector(".ruleBox");
let ruleBtn = document.querySelector(".rules-btn");
let hands = document.querySelector(".hands");
let contest = document.querySelector(".contest");

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
const SeletecH = (hand) => {
    hands.style.display = "none";
    ruleBox.style.display="none";
    contest.style.display="flex";

}
const playAgain=()=>{
    hands.style.display = "inline-flex"
    contest.style.display="none"
}