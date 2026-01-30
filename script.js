const sidemenuToggle = document.querySelector(".sidemenu-toggle");
const sidemenu = document.querySelector(".sidemenu");

sidemenuToggle.addEventListener("click", () => {
  console.log("sidemenu-toggle clicked");

  // sidemenu をクリックした時にopenクラスを追加する
  sidemenu.classList.toggle("open");
});
