import './styles/style.css'
import './styles/styles_desktop.css'
import './styles/style.css'
import data from '../data.json'

//// ------------------------------------------------- ////

/*Mapeo de "comments" y "repliesComments":

  Crea todos los "comments" y "repliesComments", además, asigna en lugares especificados 
  los valores estraido del "data.json".

*/

/*Input: creamos una variable "str" vacia, la cual contendrá todo el mapeado*/

let commentsElements = "";

////

for (let i in data["comments"]) {

  /*Input: extraemos los valores del "data.json" y los asiganamos a una variable*/

  const image = data["comments"][i].user.image.webp;
  const score = data["comments"][i].score;
  const username = data["comments"][i].user.username;
  const createdAt = data["comments"][i].createdAt;
  const content = data["comments"][i].content;
  const id = data["comments"][i].id

  ////

  /*Input: creamos una variable "str" vacia, la cual contendrá todo el mapeado*/

  let repliesComments = "";

  console.log(score);
  console.log(i);
  console.log(id);
  

  for (let y in data["comments"][i].replies) {

    /*Input: extraemos los valores del "data.json" y los asiganamos a una variable*/

    const username = data["comments"][y].user.username;
    const replies = data["comments"][i].replies;

    ////

    repliesComments += `<div class="repliesCommentsContainer" id="containerComments-${replies[y].id}" >  
                          <div class="repliesContentContainer" data-value="${replies[y].user.username}" id="comments-${replies[y].id}">
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
                              <button data-value="${replies[y].user.username}" class="btnRepliesComments" id="btnReply-containerComments-${replies[y].id}">
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
                        </div>
  `
  }

  commentsElements += ` <div class="repliesCommentsContainer" id="containerComments-${id}" > 
                          <div class="commentsContainer" data-value="${username}" id="comments-${id}">
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
                              <button data-value="${username}" class="btn_replies" id="btnReply-containerComments-${id}">
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
                        </div>
                        `
}

/*Output: seleccionamos el contenedor, donde ingresará el mapeo recien creado */

document.querySelector("#comments").innerHTML = commentsElements;

////

//// ------------------------------------------------- ////

/*Editando el repliesCommentsUser:

  Añade al ultimo comments un diseño diferente ya que, el comentario es del 
  propietario de la cuenta "juliusomo" y este tiene funciones diferentes a 
  los demas comments.

*/

/*Input: seleccionamos los comments que editaremos y los asignamos a una variable*/

const repliesCommentText = document.getElementById(`comments-${5}`);
const repliesCommentindex = document.getElementById(`comments-${4}`);
const repliesCommentindexValue = document.getElementById(`comments-${3}`);

////

const propietaryCommentRemove = repliesCommentindex.querySelector(".propietarycomment");
const propietaryCommentRemoveValue = repliesCommentindexValue.querySelector(".propietarycomment");

/*Output: eliminamos las dos variables con la clase asignada*/

propietaryCommentRemove.remove();
propietaryCommentRemoveValue.remove();

////

const bRepliesComment = repliesCommentText.querySelector(".bRepliesComment");
const repliesBtnRemove = repliesCommentText.querySelector(".btnRepliesComments");

if (repliesCommentText) {

  /*Input: extraemos los valores de "data.json"*/

  const replies = data["comments"][1].replies;
  const username = replies[0].user.username;

  ////

  /*Output: editaremos el mapeado del último comment, añadiendole nuevas cosas*/

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
  
    ////

  }
}

//// ------------------------------------------------- ////

/*Evento de los botones de "score":

  Al presionar uno de los dos botones "+" o "-", cambiara el valor de "score"
  del comentario al cual corresponde el boton, este esta diseñado para que se
  solo una vez.

*/

/*Input: buscamos las clases en el html y las asignaremos a una variable*/

const btnPlus = document.querySelectorAll(".btn_plus"); 
const btnMinus = document.querySelectorAll(".btn_minus");


btnPlus.forEach(plus =>
  plus.addEventListener("click", () => {
    
    
    const idContainerPlus = plus.id.slice(8);
    const containerPlusSelect = document.getElementById(idContainerPlus);

    if (containerPlusSelect) {
      const scorePlusSelect = containerPlusSelect.querySelector(".scoreName");
      console.log(scorePlusSelect.dataset.value);

      console.log(Boolean(scorePlusSelect.dataset.flag));
      
      const flag = scorePlusSelect.dataset.flag ? Boolean(scorePlusSelect.dataset.flag) : false;
      let currentButtonValue = Number(scorePlusSelect.dataset.value)

      if (!flag) {
        currentButtonValue += 1;
        scorePlusSelect.dataset.flag = "true";
      }

      scorePlusSelect.textContent = currentButtonValue.toString();
      scorePlusSelect.dataset.value = currentButtonValue.toString();
    }
  }
  )
);


btnMinus.forEach(minus =>
  minus.addEventListener("click", () => {
    

    const idContainerMinus = minus.id.slice(9);
    const containerMinusSelect = document.getElementById(idContainerMinus);
    console.log(containerMinusSelect);

    if (containerMinusSelect) {
      const scoreMinusSelect = containerMinusSelect.querySelector(".scoreName");
      const flag = scoreMinusSelect.dataset.flag ? Boolean(scoreMinusSelect.dataset.flag) : false;
      let currentButtonValue = Number(scoreMinusSelect.dataset.value)

      if (!flag) {
        currentButtonValue -= 1;
        scoreMinusSelect.dataset.flag = "true";
      }

      scoreMinusSelect.textContent = currentButtonValue.toString();
      scoreMinusSelect.dataset.value = currentButtonValue.toString();
    }

})
);

//// ------------------------------------------------- ////

/*Evento de botones "replies": 

  Crea nuevos "repliesComments" al precionar cualquiera de los botones "replies", permitiendo
  responder al comment al cual corresponde el boton.

*/

/*Input: buscaremos los botones por las clases en el mapeado principal*/

const repliesBtn = document.querySelectorAll(".btn_replies");
const repliesBtnComment = document.querySelectorAll(".btnRepliesComments");

////

repliesBtn.forEach(replycomment =>
  replycomment.addEventListener("click", () => {

    const idContainerReply = replycomment.id.slice(9);
    console.log(idContainerReply);
    const nameRepliesSelect = document.getElementById(idContainerReply);
    console.log("nameRepliesSelect", nameRepliesSelect);
    const btnNameReplies = nameRepliesSelect.querySelector(".btn_replies");
    console.log(btnNameReplies);



    const repliesUser = data["comments"][1].replies;


    const commentProdName = `<div class="repliesContentContainerNew" data-value="${repliesUser[1].user.username}" id="repliesCommentNew-${1}">
                                <div class="usernameReplies">
                                  <img class="imgUserNew" src="${repliesUser[1].user.image.webp}" alt="hola">
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
    /*Output: seleccionamos la clase que está dentro de cada uno de los contenedores principales, 
      donde ingresará el mapeo recien creado*/

    nameRepliesSelect.querySelector(".repliesComments").insertAdjacentHTML("beforeend", commentProdName);

    ////

    const btnSend = nameRepliesSelect.querySelector(".btnCommentSend");

    btnSend.addEventListener("click", () => {
      console.log("su respuesta se ha enviado");
    })

  })
)

repliesBtnComment.forEach(replycomment =>
  replycomment.addEventListener("click", () => {

    const idContainerReply = replycomment.id.slice(9);
    console.log(idContainerReply);
    const nameRepliesSelect = document.getElementById(idContainerReply);
    console.log("nameRepliesSelect", nameRepliesSelect);
    const btnNameReplies = nameRepliesSelect.querySelector(".btnRepliesComments");
    const nameReplies = nameRepliesSelect.querySelector(".repliesCommentsMenssage");
    console.log(btnNameReplies);
    console.log("namereplies", nameReplies);


    const repliesUser = data["comments"][1].replies;


    const commentProdName = `<div class="repliesContentContainerNew" data-value="${repliesUser[1].user.username}" id="repliesCommentNew-${1}">
                                <div class="usernameReplies">
                                  <img class="imgUserNew" src="${repliesUser[1].user.image.webp}" alt="hola">
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
    /*Output: seleccionamos la clase que está dentro de cada uno de los contenedores principales, 
      donde ingresará el mapeo recien creado*/

    nameRepliesSelect.querySelector(".repliesCommentsMenssage").insertAdjacentHTML("beforeend", commentProdName);

    ////

    const btnSend = nameRepliesSelect.querySelector(".btnCommentSend");

    btnSend.addEventListener("click", () => {
      console.log("su respuesta se ha enviado");
    })

  })
)

//// ------------------------------------------------- ////

/* evento del boton "edit":

  permite editar el texto del comments del propietario de la cuenta "juliusomo". 


*/

/*Input: asignaremos los valores a una variable para usarlas en el evento*/

const username = data["comments"][1].user.username;
const replies = data["comments"][1].replies;
const btnEdit = document.querySelector(".btn_edit");

////

btnEdit.addEventListener("click", () => {

  console.log("esta editando su texto");
  const editTextComment = document.getElementById(`comments-${5}`);
  const editText = editTextComment.querySelector(".pContentComment");

  if (editText) {

    /*Output: cambia a un textarea para poder reescribir el contenido y se añade el boton "update",
      eliminando el boton "edit"*/

    editText.remove();

    const newTextComment = `<textarea class="textEditArea" maxlength="300">@${username} ${replies[1].content}</textarea>
    `

    editTextComment.querySelector(".content").insertAdjacentHTML("beforeend", newTextComment);

    btnEdit.remove();

    const updateBtnComment = `<button data-value="" class="btn_update">
                                <p>Update</p>
                              </button>`

    editTextComment.querySelector(".replies").insertAdjacentHTML("beforeend", updateBtnComment);

    ////

  }
});

//// ------------------------------------------------- ////

/*Asignamos la imagen del "inputComments":

  permite ingresar la foto de perfil en el "inputComment".

*/

/*Input: extraemos la imagen de usuario del "data.json"*/

const imageCurrentUser = data["currentUser"].image.png;

////

/*Output: ingresaremos el nuevo mapeo al contenedor con la clase "inputCommentUsername"*/

const currentUser = `<img class="currentImgUser" src="${imageCurrentUser}" alt="hola">`;

document.querySelector(".inputCommentUsername").insertAdjacentHTML("beforeend", currentUser);

////

//// ------------------------------------------------- ////

/*Evento del boton "delete" y mapeo de ventana emergente:

  Crea la ventana emergente al presionar el boton, dandole opcion al usuario de confirmar 
  la eliminacion del comments o si desea cancelarlo.

*/

/*Input: selecionamos el boton "delete" del comentario del propietario*/

const btnDelete = document.querySelector(".btn_delete");

////

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

    /*Output: ingresamos el mapeado de la ventana emergente en el contenedor seleccionado*/

    document.querySelector(".windowsEmergent").insertAdjacentHTML("beforeend", winEmergent);
  
    ////

  }

  if (winEmergentContainer) {
    winEmergentContainer.style.display = "flex"
  }

//// ------------------------------------------------- ////

  /*Evento del boton "delete" y boton "cancel" en la ventana emergente:
  
    cumple con la peticion del usuario, cancelar la eliminacion o confirmar la eliminacion del comment.
  
  */

  /*Input: seleccionamos los botones y el contenedor de la ventana emergente*/

  const btnEmergentCancel = document.querySelector(".btn_Emergent_cancel");
  const winEmergentRemove = document.querySelector(".winEmergentContainer");
  const btnEmergentDelete = document.querySelector(".btn_Emergent_delete");

  ////

  btnEmergentCancel.addEventListener("click", () => {
    
    /*Output: se cierra la ventana emergente, sin afectar el contenido*/

    winEmergentRemove.style.display = "None"

    ////

  })

  btnEmergentDelete.addEventListener("click", () => {
    
    const commentRemoveContainer = document.getElementById(`comments-${5}`);
    
    /*Output: se cierra la ventana emergente, eliminando el comment del propietario */

    commentRemoveContainer.remove();
    winEmergentRemove.style.display = "None"
  
    ////

  });
})

//// ------------------------------------------------- ////