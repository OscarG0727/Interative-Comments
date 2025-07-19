import './styles/style.css'
import './styles/styles_desktop.css'
import './styles/style.css'
import data from '../data.json'

let commentsElements = "";

for (let i in data["comments"]) {
  const image = data["comments"][i].user.image.webp;
  const score = data["comments"][i].score;
  const username = data["comments"][i].user.username;
  const createdAt = data["comments"][i].createdAt;
  const content = data["comments"][i].content;
  const id = data["comments"][i].id
  let repliesComments = "";

  console.log(score);
  console.log(i);
  console.log(id);
  

  for (let y in data["comments"][i].replies) {

    const username = data["comments"][y].user.username;
    const replies = data["comments"][i].replies;

    repliesComments += `<div class="repliesCommentsContainer" data-value="${replies[y].user.username}" id="comments-${replies[y].id}">
                          <div class="score">
                            <button class="btn_plus" data-value="${replies[y].id}" id="btnPlus-comments-${replies[y].id}"><img src="./src/assets/icon-plus.svg" alt=""></button>
                            <p data-value="${replies[y].score}" class="scoreName">${replies[y].score}</p>
                            <button class="btn_minus" data-value="${replies[y].id}" id="btnMinus-comments-${replies[y].id}"><img src="./src/assets/icon-minus.svg" alt=""></button>
                          </div>
                          <div class="username">
                            <img class="imgUser" src="${replies[y].user.image.webp}" alt="hola">
                            <p>${replies[y].user.username}</p>
                            <div class="propietarycomment">
                            </div>
                            <p class="createdAt">${replies[y].createdAt}</p>
                          </div>
                          <div class="deleteContainer">
                          </div>
                          <div class="replies">
                            <button data-value="${replies[y].user.username}" class="btnRepliesComments" id="btnReply-comments-${replies[y].id}">
                              <img src="./src/assets/icon-reply.svg"" alt="">
                              <p>Reply</p>
                            </button>
                          </div>
                          <div class="content">
                            <p class="pContentComment"><b class="bRepliesComment">@${username}</b> ${replies[y].content}</p>
                          </div>    
                          </div>
                          <div class="repliesCommentsMenssage" id="repliesCommentsMenssage-${replies[y].id}">
                          </div>
  `
  }

  commentsElements += `<div class="commentsContainer" data-value="${username}" id="comments-${id}">
                          <div class="score">
                            <button class="btn_plus" data-value="${id}" id="btnPlus-comments-${id}"><img src="./src/assets/icon-plus.svg" alt=""></button>
                            <p data-value="${score}" class="scoreName">${score}</p>
                            <button class="btn_minus" data-value="${id}" id="btnMinus-comments-${id}"><img src="./src/assets/icon-minus.svg" alt=""></button>
                          </div>
                          <div class="username">
                            <img class="imgUser" src="${image}" alt="hola">
                            <p data-value="${username}" id="username-${i}">${username}</p>
                            <p class="createdAt">${createdAt}</p>
                          </div>
                          <div class="replies">
                            <button data-value="${username}" class="btn_replies" id="btnReply-comments-${id}">
                              <img src="./src/assets/icon-reply.svg" alt="">
                              <p>Reply</p>
                            </button>
                          </div>
                          <div class="content">
                            <p class="pContentComment">${content}</p>
                          </div>    
                        </div>
                        <div class="repliesComments" id="repliesComments-${id}">
                          ${repliesComments}
                        </div>
                        `
}

document.querySelector("#comments").innerHTML = commentsElements;

////

const repliesCommentText = document.getElementById(`comments-${5}`);
const repliesCommentindex = document.getElementById(`comments-${4}`);
const repliesCommentindexValue = document.getElementById(`comments-${3}`);
const propietaryCommentRemove = repliesCommentindex.querySelector(".propietarycomment");
const propietaryCommentRemoveValue = repliesCommentindexValue.querySelector(".propietarycomment");
console.log("aca propietaryremove", propietaryCommentRemove);
propietaryCommentRemove.remove();
propietaryCommentRemoveValue.remove();
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

////

const btnPlus = document.querySelectorAll(".btn_plus");
const btnMinus = document.querySelectorAll(".btn_minus");


btnPlus.forEach(plus =>
  plus.addEventListener("click", () => {

    
    const idContainerPlus = plus.id.slice(8);
    const containerPlusSelect = document.getElementById(idContainerPlus);

    if (containerPlusSelect){
      const scorePlusSelect = containerPlusSelect.querySelector(".scoreName");
      console.log(scorePlusSelect.dataset.value);
      
      if (scorePlusSelect) {
        const valueScore = Number(scorePlusSelect.dataset.value);
        scorePlusSelect.textContent = valueScore + 1;
        scorePlusSelect.dataset.value = valueScore + 1;
        console.log(scorePlusSelect.dataset.value);
      }
      // else {
      //   console.log(scoreName.dataset.value);
      //   const valueScore = Number(scorePlusSelect.dataset.value);
      //   scorePlusSelect.textContent = valueScore - 1;
      //   scorePlusSelect.dataset.value = valueScore - 1;
      // }

    }


  })
)
btnMinus.forEach(minus =>
  minus.addEventListener("click", () => {
    
    const idContainerMinus = minus.id.slice(9);
    const containerMinusSelect = document.getElementById(idContainerMinus);
    console.log(containerMinusSelect);

    if (containerMinusSelect){
      const scorePlusSelect = containerMinusSelect.querySelector(".scoreName");
      console.log(scorePlusSelect.dataset.value);
      
      if (scorePlusSelect) {
        const valueScore = Number(scorePlusSelect.dataset.value);
        scorePlusSelect.textContent = valueScore - 1;
        scorePlusSelect.dataset.value = valueScore - 1;
        console.log(scorePlusSelect.dataset.value);
      }
      // else {
      //   console.log(scoreName.dataset.value);
      //   const valueScore = Number(scorePlusSelect.dataset.value);
      //   scorePlusSelect.textContent = valueScore + 1;
      //   scorePlusSelect.dataset.value = valueScore + 1;
      // }

    }


  }
)
)

const repliesBtn = document.querySelectorAll(".btn_replies");
const repliesBtnComment = document.querySelectorAll(".btnRepliesComments");

for (let i = 0; i < repliesBtn.length; i++) {
  repliesBtn[i].addEventListener("click", () => {

    console.log(repliesBtn[i]);
    
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
                                    <p>REPLY</p>
                                  </button>
                                </div>
                                <div class="contentReplies" id="repliesContent">
                                  <p class="pTextInput"><textarea class="textEditAreaComment" maxlength="300" class="newTextInputComment">@${btnNameReplies.dataset.value} </textarea></p>
                                </div>    
                            </div>
    
    
    `
    document.getElementById(`repliesComments-${id}`).insertAdjacentHTML("beforeend", commentProdName);

    const btnSend = document.querySelector(".btnCommentSend");

    btnSend.addEventListener("click", () => {
      console.log("su respuesta se ha enviado");
    })

  })
}

repliesBtnComment.forEach(replycomment =>
  replycomment.addEventListener("click", () => {

    const idContainerReply = replycomment.id.slice(9);
    console.log(idContainerReply);
    const nameRepliesSelect = document.getElementById(idContainerReply);
    const btnNameReplies = nameRepliesSelect.querySelector(".btnRepliesComments");
    console.log(btnNameReplies);
    
    const repliesUser = data["comments"][1].replies;
    
    
    const commentProdName = `<div class="repliesCommentsContainerNew" data-value="${repliesUser[1].user.username}" id="repliesCommentNew-${1}">
                                <div class="usernameReplies">
                                  <img class="imgUser" src="${repliesUser[1].user.image.webp}" alt="hola">
                                  <p class="pUser">${repliesUser[1].user.username}</p>
                                  <p class="createdAt">recently</p>
                                </div>
                                <div class="repliesbutton">
                                  <button class="btnCommentSend">
                                    <p>REPLY</p>
                                  </button>
                                </div>
                                <div class="contentReplies" id="repliesContent">
                                  <p class="pTextInput"><textarea class="textEditAreaComment" maxlength="300" class="newTextInputComment">@${btnNameReplies.dataset.value} </textarea></p>
                                </div>    
                            </div>
    
    
    `
    document.querySelector(".repliesCommentsMenssage").insertAdjacentHTML("beforeend", commentProdName);

    const btnSend = document.querySelector(".btnCommentSend");

    btnSend.addEventListener("click", () => {
      console.log("su respuesta se ha enviado");
    })

  })
)


////

const username = data["comments"][1].user.username;
const replies = data["comments"][1].replies;
const btnEdit = document.querySelector(".btn_edit");

btnEdit.addEventListener("click", () => {
  console.log("esta editando su texto");
  const editTextComment = document.getElementById(`comments-${5}`);
  const editText = editTextComment.querySelector(".pContentComment");
  console.log(editText);
  if (editText) {

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

const imageCurrentUser = data["currentUser"].image.png
const currentUser = `<img class="currentImgUser" src="${imageCurrentUser}" alt="hola">`

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

  ////

  const btnEmergentCancel = document.querySelector(".btn_Emergent_cancel");
  const winEmergentRemove = document.querySelector(".winEmergentContainer");

  btnEmergentCancel.addEventListener("click", () => {
    winEmergentRemove.style.display = "None"
  })

  const btnEmergentDelete = document.querySelector(".btn_Emergent_delete");

  btnEmergentDelete.addEventListener("click", () => {
    const commentRemoveContainer = document.getElementById(`comments-${5}`);
    commentRemoveContainer.remove();
    winEmergentRemove.style.display = "None"
  });
})