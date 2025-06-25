import './styles/style.css'
import './styles/styles_desktop.css'
import './styles/style.css'
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
                            <button data-value="${username}" class="btn_replies">
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
  
  const username = data["comments"][1].user.username;
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
                            <div class="propietarycomment">
                            </div>
                            <p class="createdAt">${replies[i].createdAt}</p>
                          </div>
                          <div class="deleteContainer">
                          </div>
                          <div class="replies">
                            <button data-value="${replies[i].user.username}" class="btnRepliesComments">
                              <img src="./src/assets/icon-reply.svg"" alt="">
                              <p>REPLY</p>
                            </button>
                          </div>
                          <div class="content">
                            <p class="pContentComment"><b class="bRepliesComment">@${username}</b> ${replies[i].content}</p>
                          </div>    
                        </div>
  
  
  `
  document.querySelector(".repliesComments").insertAdjacentHTML("beforeend", repliesComments);

}

const btnPlus = document.querySelectorAll(".btn_plus");
const btnMinus = document.querySelectorAll(".btn_minus");
const btnRepliesPlus = document.querySelectorAll(".btnReplies_plus");
const btnRepliesMinus = document.querySelectorAll(".btnReplies_minus");

const repliesCommentText = document.getElementById(`repliesComment-${1}`);
const repliesCommentindex = document.getElementById(`repliesComment-${0}`);
const propietarycommentremove = repliesCommentindex.querySelector(".propietarycomment");
propietarycommentremove.remove();

const bRepliesComment = repliesCommentText.querySelector(".bRepliesComment");
const repliesBtnRemove = repliesCommentText.querySelector(".btnRepliesComments");
if (repliesCommentText) {
  const replies = data["comments"][1].replies;
  const username = replies[0].user.username;
  bRepliesComment.textContent = "@" + username; 
  if (repliesCommentText) {
    const propietarycomment = `<p>you</p>`

    repliesCommentText.querySelector(".propietarycomment").insertAdjacentHTML("beforeend", propietarycomment);
    
    const deletehtml = `<button data-value="" class="btn_delete">
                          <img src="./src/assets/icon-delete.svg" alt="">
                          <p>Delete</p>
                        </button>`
  
    repliesCommentText.querySelector(".deleteContainer").insertAdjacentHTML("beforeend", deletehtml);

    repliesBtnRemove.remove();

    const editbtn = ` <button data-value="" class="btn_edit">
                          <img src="./src/assets/icon-edit.svg" alt="">
                          <p>Edit</p>
                      </button>`

    repliesCommentText.querySelector(".replies").insertAdjacentHTML("beforeend", editbtn);
  }
}



for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", () => {
    console.log(btnPlus);
    const commentProdName = document.getElementById(`comments-${i}`);
    console.log("aca ProdName", commentProdName);
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
    console.log("aca repliesProdName", repliesCommentProdName); 
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

const repliesBtn = document.querySelectorAll(".btn_replies");
const repliesBtnComment = document.querySelectorAll(".btnRepliesComments");

for (let i = 0; i < repliesBtn.length; i++) {
  repliesBtn[i].addEventListener("click", () => {
    const nameReplies = document.getElementById(`comments-${i}`)
    const btnNameReplies = nameReplies.querySelector(".btn_replies");
    console.log(btnNameReplies.dataset.value);
    
    const replies = data["comments"][1].replies;
    
    
    const commentProdName = `<div class="repliesCommentsContainer" data-value="${replies[1].user.username}" id="repliesComment-${i}">
                                <div class="usernameReplies">
                                  <img class="imgUser" src="${replies[1].user.image.webp}" alt="hola">
                                  <p class="pUser">${replies[1].user.username}</p>
                                  <p class="createdAt">recently</p>
                                </div>
                                <div class="repliesbutton">
                                  <button class="btnCommentSend">
                                    <p>Send</p>
                                  </button>
                                </div>
                                <div class="contentReplies" id="repliesContent">
                                  <p class="pTextInput"><textarea class="textEditAreaComment" maxlength="300" class="newTextInputComment"> @${btnNameReplies.dataset.value} </textarea></p>
                                </div>    
                            </div>
    
    
    `
    document.querySelector(".repliesComments").insertAdjacentHTML("beforeend", commentProdName);

    const btnSend = document.querySelector(".btnCommentSend");

    btnSend.addEventListener("click", () => {
      console.log("su respuesta se ha enviado");
    })

  })
}

repliesBtnComment[0].addEventListener("click", () => {
    const nameReplies = document.getElementById(`repliesComment-${0}`)
    const btnNameReplies = nameReplies.querySelector(".btnRepliesComments");
    
    const replies = data["comments"][1].replies;
    
    
    const commentProdName = `<div class="repliesCommentsContainerNew" data-value="${replies[1].user.username}" id="repliesComment-${0}">
                                <div class="usernameReplies">
                                  <img src="${replies[1].user.image.webp}" alt="hola">
                                  <p>${replies[1].user.username}</p>
                                  <p class="createdAt">recently</p>
                                </div>
                                <div class="repliesbutton">
                                  <button class="btnCommentSend">
                                    <p>Send</p>
                                  </button>
                                </div>
                                <div class="contentReplies" id="repliesContent">
                                  <p class="pTextInput"><textarea class="textEditAreaComment" maxlength="300" class="newTextInputComment"> @${btnNameReplies.dataset.value} </textarea></p>
                                </div>    
                            </div>
    
    
    `
    document.querySelector(".repliesComments").insertAdjacentHTML("beforeend", commentProdName);

    const btnSend = document.querySelector(".btnCommentSend");

    btnSend.addEventListener("click", () => {
      console.log("su respuesta se ha enviado");
    })

  })



////

const username = data["comments"][1].user.username;
const replies = data["comments"][1].replies;
const btnEdit = document.querySelector(".btn_edit");

btnEdit.addEventListener("click", () => {
  console.log("esta editando su texto");
  const editTextComment = document.getElementById(`repliesComment-${1}`);
  const editText = editTextComment.querySelector(".pContentComment");
  console.log(editText);
  if(editText) {
    
    editText.remove();

    const newTextComment = `<textarea class="textEditArea" maxlength="300"> @${username} ${replies[1].content}</textarea>
    `

    editTextComment.querySelector(".content").insertAdjacentHTML("beforeend", newTextComment);

    btnEdit.remove();

    const updateBtnComment = `<button data-value="" class="btn_update">
                                <p>Update</p>
                              </button>`
                          
    editTextComment.querySelector(".replies").insertAdjacentHTML("beforeend", updateBtnComment);

    
  }
});

// const btnUpdate = document.querySelector(".btn_update");
// const updateText = document.querySelector(".textEditArea");
// const editTextComment = document.getElementById(`repliesComment-${1}`);

// btnUpdate.addEventListener("click", () => {

//   updateText.remove();

//   const newUpdateTextComment = `<p class="pContentComment"><b class="bRepliesComment">@${username}</b> ${replies[1].content}</p>`

//   editTextComment.querySelector(".content").insertAdjacentHTML("beforeend", newUpdateTextComment);
// })