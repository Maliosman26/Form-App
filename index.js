// FORM SUBMIT

/*
let formDom = document.querySelector("#userForm");
formDom.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  console.log("islem gerceklesti");
  let scoreInputDom = document.querySelector("#score");
  console.log(scoreInputDom.value);
  localStorage.setItem("score", scoreInputDom.value);
}
*/

// FORMLARLA CALISMAK: BOLUM SONU EGZERSIZI

/*
1: Formu Seç
2: Input Bilgisini UL icerisine ekle
3: Form içindeki bilgiyi sifirla
5: Eger forma bilgi girilmezse kullaniciyi uyar
*/

let userFormDom = document.querySelector("#userForm");
userFormDom.addEventListener("submit", formHandler);
const alertDOM = document.querySelector("#alert");

const alertFunciton = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;
function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");

  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    alertDOM.innerHTML = alertFunciton(
      "Baslik Bilgisi",
      "Eksik Bilgi Girdiniz",
      "danger",
    );
  }
}
/*
<li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
</li>
*/

let userListDOM = document.querySelector("#userList");

const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>
   `;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
  );
  userListDOM.append(liDOM);
};
