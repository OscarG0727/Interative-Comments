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
  const id = data["comments"][i].id
  
  console.log(score);
  console.log(i);
  console.log(id);


  commentsElements +=  `<div class="commentsContainer" data-value="${username}" id="comments-${id}">
                          <div class="score">
                            <button class="btn_plus" data-value="${id}" ><img src="./src/assets/icon-plus.svg" alt=""></button>
                            <p data-value="${score}" class="scoreName">${score}</p>
                            <button class="btn_minus" data-value="${id}" ><img src="./src/assets/icon-minus.svg" alt=""></button>
                          </div>
                          <div class="username">
                            <img class="imgUser" src="${image}" alt="hola">
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
                            <p class="pContentComment">${content}</p>
                          </div>    
                        </div>
                        <div class="repliesNewContainer" id="replies-${i}">
                        </div>
                        `
  document.querySelector("#comments").innerHTML = commentsElements;

  const repliesContainer = document.getElementById(`replies-${i}`);
  console.log("aca repliesContainer", repliesContainer);
  
}
for (let i in data["comments"][1].replies) {

  const username = data["comments"][1].user.username;
  const replies = data["comments"][1].replies;
  console.log(replies[i].id);
  
  repliesComments = `<div class="repliesCommentsContainer" data-value="${replies[i].user.username}" id="repliesComment-${replies[i].id}">
                          <div class="score">
                            <button class="btn_plus" data-value="${replies[i].id}" ><img src="./src/assets/icon-plus.svg" alt=""></button>
                            <p data-value="${replies[i].score}" class="scoreName">${replies[i].score}</p>
                            <button class="btn_minus" data-value="${replies[i].id}" ><img src="./src/assets/icon-minus.svg" alt=""></button>
                          </div>
                          <div class="username">
                            <img class="imgUser" src="${replies[i].user.image.webp}" alt="hola">
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
                              <p>Reply</p>
                            </button>
                          </div>
                          <div class="content">
                            <p class="pContentComment"><b class="bRepliesComment">@${username}</b> ${replies[i].content}</p>
                          </div>    
                          </div>
                          <div id="repliesCommentsMenssage-${i}">
                          </div>
  `
  document.querySelector(".repliesComments").insertAdjacentHTML("beforeend", repliesComments);
  
  
  
}

const btnPlus = document.querySelectorAll(".btn_plus");
const btnMinus = document.querySelectorAll(".btn_minus");

const repliesCommentText = document.getElementById(`repliesComment-${4}`);
const repliesCommentindex = document.getElementById(`repliesComment-${3}`);
const propietarycommentremove = repliesCommentindex.querySelector(".propietarycomment");
console.log(propietarycommentremove);
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
    
    
    const replies = data["comments"][1].replies;
    
    if (btnPlus[i].dataset.value == 3) {
      
      const repliesCommentProdName = document.getElementById(`repliesComment-${replies[0].id}`);
      console.log("aca repliesProdName", repliesCommentProdName);  
      const scoreName = repliesCommentProdName.querySelector(".scoreName");
      if (scoreName.dataset.value == replies[0].score) {
        console.log(scoreName.dataset.value);
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore + 1;
        scoreName.dataset.value = valueScore + 1;
      }
      else{
        console.log(scoreName.dataset.value);
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore - 1;
        scoreName.dataset.value = valueScore - 1;
        console.log(scoreName.dataset.value);
      }  
    }
    if(btnPlus[i].dataset.value == 4) {
      
      const repliesCommentProdName = document.getElementById(`repliesComment-${replies[1].id}`);
      console.log("aca repliesProdName", repliesCommentProdName);  
      const scoreName = repliesCommentProdName.querySelector(".scoreName");
      if (scoreName.dataset.value == replies[1].score) {
        console.log(scoreName.dataset.value);
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore + 1;
        scoreName.dataset.value = valueScore + 1;
      }
      else{
        console.log(scoreName.dataset.value);
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore - 1;
        scoreName.dataset.value = valueScore - 1;
        console.log(scoreName.dataset.value);
      }
    }
    
    if (btnPlus[i].dataset.value == 1 || btnPlus[i].dataset.value == 2){
      
      const score = data["comments"][i].score;
      const id = data["comments"][i].id

      const commentProdName = document.getElementById(`comments-${id}`);
      console.log("aca ProdName", commentProdName.dataset.value);
      const scoreName = commentProdName.querySelector(".scoreName");
      if (scoreName.dataset.value == score) {
        console.log(commentProdName);
        console.log(scoreName.dataset.value);
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore + 1;
        scoreName.dataset.value = valueScore + 1;
      }
      else{
      console.log(scoreName.dataset.value);
      const valueScore = Number(scoreName.dataset.value);
      scoreName.textContent = valueScore - 1;
      scoreName.dataset.value = valueScore - 1;
      console.log(scoreName.dataset.value);
      }
    }
  })
  btnMinus[i].addEventListener("click", () => {
    console.log(btnMinus);
    const replies = data["comments"][1].replies;
    
    if (btnMinus[i].dataset.value == 3) {

      const repliesCommentProdName = document.getElementById(`repliesComment-${replies[0].id}`);
      console.log("aca repliesProdName", repliesCommentProdName);  
      const scoreName = repliesCommentProdName.querySelector(".scoreName");
      if (scoreName.dataset.value == replies[0].score) {
        console.log(scoreName.dataset.value);
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore - 1;
        scoreName.dataset.value = valueScore - 1;
      }
      else{
        console.log(scoreName.dataset.value);
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore + 1;
        scoreName.dataset.value = valueScore + 1;
        console.log(scoreName.dataset.value);
      }   
    }
    if(btnMinus[i].dataset.value == 4) {

      const repliesCommentProdName = document.getElementById(`repliesComment-${replies[1].id}`);
      console.log("aca repliesProdName", repliesCommentProdName);  
      const scoreName = repliesCommentProdName.querySelector(".scoreName");
      if (scoreName.dataset.value == replies[1].score) {
        console.log(scoreName.dataset.value);
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore - 1;
        scoreName.dataset.value = valueScore - 1;
      }
      else{
        console.log(scoreName.dataset.value);
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore + 1;
        scoreName.dataset.value = valueScore + 1;
        console.log(scoreName.dataset.value);
      }   
    }
    
    if (btnMinus[i].dataset.value == 1 || btnMinus[i].dataset.value == 2){
      
      const score = data["comments"][i].score;
      const id = data["comments"][i].id

      const commentProdName = document.getElementById(`comments-${id}`);
      console.log("aca ProdName", commentProdName.dataset.value);
      const scoreName = commentProdName.querySelector(".scoreName");
      if (scoreName.dataset.value == score) {
        console.log(commentProdName);
        console.log(scoreName.dataset.value);
        const valueScore = Number(scoreName.dataset.value);
        scoreName.textContent = valueScore - 1;
        scoreName.dataset.value = valueScore - 1;
      }
      else{
      console.log(scoreName.dataset.value);
      const valueScore = Number(scoreName.dataset.value);
      scoreName.textContent = valueScore + 1;
      scoreName.dataset.value = valueScore + 1;
      console.log(scoreName.dataset.value);
      }
    }
  })
  //   btnRepliesPlus[i].addEventListener("click", () => {
  //   const repliesCommentProdName = document.getElementById(`repliesComment-${i}`);
  //   console.log("aca repliesProdName", repliesCommentProdName); 
  //   if(repliesCommentProdName){
  //     const scoreName = repliesCommentProdName.querySelector(".repliesScoreName");
  //     console.log(scoreName);
  //     if (scoreName) {
  //       const valueScore = Number(scoreName.dataset.value);
  //       scoreName.textContent = valueScore + 1;
  //       scoreName.dataset.value = valueScore + 1;
  //     }
  //   }   
  // })
  // btnRepliesMinus[i].addEventListener("click", () => {
  //   const repliesCommentProdName = document.getElementById(`repliesComment-${i}`);
  //   console.log(repliesCommentProdName); 
  //   if(repliesCommentProdName){
  //     const scoreName = repliesCommentProdName.querySelector(".repliesScoreName");
  //     console.log(scoreName.dataset.value);
  //     if (scoreName) {
  //       const valueScore = Number(scoreName.dataset.value);
  //       scoreName.textContent = valueScore - 1;
  //       scoreName.dataset.value = valueScore - 1;
  //     }
  //   }
  // })
}

const repliesBtn = document.querySelectorAll(".btn_replies");
const repliesBtnComment = document.querySelectorAll(".btnRepliesComments");

for (let i = 0; i < repliesBtn.length; i++) {
  repliesBtn[i].addEventListener("click", () => {
    
    const id = data["comments"][i].id

    const nameReplies = document.getElementById(`comments-${id}`)
    const btnNameReplies = nameReplies.querySelector(".btn_replies");
    console.log(btnNameReplies.dataset.value);
    
    const replies = data["comments"][1].replies;
    
    
    const commentProdName = `<div class="repliesCommentsContainerNew" data-value="${replies[1].user.username}" id="repliesCommentNew-${i}">
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
                                  <p class="pTextInput"><textarea class="textEditAreaComment" maxlength="300" class="newTextInputComment">@${btnNameReplies.dataset.value} </textarea></p>
                                </div>    
                            </div>
    
    
    `
    document.getElementById(`replies-${i}`).insertAdjacentHTML("beforeend", commentProdName);

    const btnSend = document.querySelector(".btnCommentSend");

    btnSend.addEventListener("click", () => {
      console.log("su respuesta se ha enviado");
    })

  })
}

repliesBtnComment[0].addEventListener("click", () => {
    const replies = data["comments"][1].replies;
    
    const nameReplies = document.getElementById(`repliesComment-${3}`)
    const btnNameReplies = nameReplies.querySelector(".btnRepliesComments");
    
    
    
    const commentProdName = `<div class="repliesCommentsContainerNew" data-value="${replies[1].user.username}" id="repliesCommentNew-${0}">
                                <div class="usernameReplies">
                                  <img class="imgUser" src="${replies[1].user.image.webp}" alt="hola">
                                  <p>${replies[1].user.username}</p>
                                  <p class="createdAt">recently</p>
                                </div>
                                <div class="repliesbutton">
                                  <button class="btnCommentSend">
                                    <p>Send</p>
                                  </button>
                                </div>
                                <div class="contentReplies" id="repliesContent">
                                  <p class="pTextInput"><textarea class="textEditAreaComment" maxlength="300" class="newTextInputComment">@${btnNameReplies.dataset.value} </textarea></p>
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
  const editTextComment = document.getElementById(`repliesComment-${4}`);
  const editText = editTextComment.querySelector(".pContentComment");
  console.log(editText);
  if(editText) {
    
    editText.remove();

    const newTextComment = `<textarea class="textEditArea" maxlength="300">@${username} ${replies[1].content}</textarea>
    `

    editTextComment.querySelector(".content").insertAdjacentHTML("beforeend", newTextComment);

    btnEdit.remove();

    const updateBtnComment = `<button data-value="" class="btn_update">
                                <p>Update</p>
                              </button>`
                          
    editTextComment.querySelector(".replies").insertAdjacentHTML("beforeend", updateBtnComment);

    
  }
});

///

const image = data["currentUser"].image.png
const currentUser = `<img class="currentImgUser" src="${image}" alt="hola">`

document.querySelector(".inputCommentUsername").insertAdjacentHTML("beforeend", currentUser);

///

const btnDelete = document.querySelector(".btn_delete");

btnDelete.addEventListener("click", () => {
  console.log("se elimino el comentario")
  const winEmergent = ` <div class="winEmergentContainer">
                          <div class="emergentContent">
                            <div class="emergentText" >
                              <h2>Delete Comment</h2>
                            </div>
                            <div class="emergent_question">
                              <p>Are you sure want to delete thie comment? This will remove the comment and can't be undone</p>
                            </div>
                            <div class="emergent_button">
                              <button class="btn_Emergent_cancel">NO, CANCEL</button>
                              <button class="btn_Emergent_delete">YES, DELETE</button>
                            </div>
                          </div>
                        </div>`

  const winEmergentContainer = document.querySelector(".winEmergentContainer")
    
  if (!winEmergentContainer) {
    document.querySelector(".windowsEemergent").insertAdjacentHTML("beforeend", winEmergent);
  }

  if (winEmergentContainer) {
    winEmergentContainer.style.display = "flex"
  }

             
  const btnEmergentCancel = document.querySelector(".btn_Emergent_cancel");
  const winEmergentRemove = document.querySelector(".winEmergentContainer");
  
  btnEmergentCancel.addEventListener("click", () => {
    winEmergentRemove.style.display = "None"
  })

  const btnEmergentDelete = document.querySelector(".btn_Emergent_delete");

  btnEmergentDelete.addEventListener("click", () => {
    const commentRemoveContainer = document.getElementById(`repliesComment-${4}`);
    commentRemoveContainer.remove();
    winEmergentRemove.style.display = "None"
  });
})