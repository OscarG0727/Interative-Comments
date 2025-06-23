import './style.css'
import data from '../data.json'

let commentsElements = "";
let repliesComments = "";

for (let i in data["comments"]) {
  const image = data["comments"][i].user.image.webp;
  const score = data["comments"][i].score;
  const username = data["comments"][i].user.username;
  const createdAt = data["comments"][i].createdAt;
  const content = data["comments"][i].content;
  
  console.log(score);
  console.log(i);


  commentsElements +=  `<div class="commentsContainer" data-value="${username}" id="comments-${i}">
                          <div class="score">
                            <button class="btn_plus" ><img src="./src/assets/icon-plus.svg" alt=""></button>
                            <p data-value="${score}" class="scoreName">${score}</p>
                            <button class="btn_minus"><img src="./src/assets/icon-minus.svg" alt=""></button>
                          </div>
                          <div class="username">
                            <img src="${image}" alt="hola">
                            <p data-value="${username}" id="username-${i}">${username}</p>
                            <p class="createdAt">${createdAt}</p>
                          </div>
                          <div class="replies">
                            <button>
                              <img src="./src/assets/icon-reply.svg" alt="">
                              <p>Reply</p>
                            </button>
                          </div>
                          <div class="content">
                            <p>${content}</p>
                          </div>    
                        </div>
  
                              `
  document.querySelector("#comments").innerHTML = commentsElements;

  
}

for (let i in data["comments"][1].replies) {
  
  const replies = data["comments"][1].replies;
  
  repliesComments = `<div class="repliesCommentsContainer" data-value="${replies[i].user.username}" id="repliesComment-${i}">
                          <div class="score">
                            <button class="btnReplies_plus"><img src="./src/assets/icon-plus.svg" alt=""></button>
                            <p data-value="${replies[i].score}" class="repliesScoreName">${replies[i].score}</p>
                            <button class="btnReplies_minus"><img src="./src/assets/icon-minus.svg" alt=""></button>
                          </div>
                          <div class="username">
                            <img src="${replies[i].user.image.webp}" alt="hola">
                            <p>${replies[i].user.username}</p>
                            <p class="createdAt">${replies[i].createdAt}</p>
                          </div>
                          <div class="replies">
                            <button>
                              <img src="./src/assets/icon-reply.svg"" alt="">
                              <p>REPLY</p>
                            </button>
                          </div>
                          <div class="content">
                            <p>${replies[i].content}</p>
                          </div>    
                        </div>
  
  
  `
  document.querySelector(".repliesComments").insertAdjacentHTML("beforeend", repliesComments);

}

const btnPlus = document.querySelectorAll(".btn_plus");
const btnMinus = document.querySelectorAll(".btn_minus");
const btnRepliesPlus = document.querySelectorAll(".btnReplies_plus");
const btnRepliesMinus = document.querySelectorAll(".btnReplies_minus");

for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", () => {
    console.log(btnPlus);
    const commentProdName = document.getElementById(`comments-${i}`);
    if (commentProdName) {
      const scoreName = commentProdName.querySelector(".scoreName");
      console.log(commentProdName);
      console.log(scoreName.dataset.value);
      if (scoreName) {
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore + 1;
        scoreName.dataset.value = valueScore + 1;
      }
    }
  })
  btnMinus[i].addEventListener("click", () => {
    console.log(btnMinus);
    const commentProdName = document.getElementById(`comments-${i}`);
    if (commentProdName) {
      const scoreName = commentProdName.querySelector(".scoreName");
      console.log(commentProdName);
      console.log(scoreName.dataset.value);
      if (scoreName) {
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore - 1;
        scoreName.dataset.value = valueScore - 1;
      }
    }
  })
  btnRepliesPlus[i].addEventListener("click", () => {
    const repliesCommentProdName = document.getElementById(`repliesComment-${i}`);
    console.log(repliesCommentProdName); 
    if(repliesCommentProdName){
      const scoreName = repliesCommentProdName.querySelector(".repliesScoreName");
      console.log(scoreName);
      if (scoreName) {
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore + 1;
        scoreName.dataset.value = valueScore + 1;
      }
    }   
  })
  btnRepliesMinus[i].addEventListener("click", () => {
    const repliesCommentProdName = document.getElementById(`repliesComment-${i}`);
    console.log(repliesCommentProdName); 
    if(repliesCommentProdName){
      const scoreName = repliesCommentProdName.querySelector(".repliesScoreName");
      console.log(scoreName.dataset.value);
      if (scoreName) {
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore - 1;
        scoreName.dataset.value = valueScore - 1;
      }
    }
  })
}