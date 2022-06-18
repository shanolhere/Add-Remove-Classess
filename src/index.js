/* <div class="emoji open">🙉</div>
<div class="emoji close active">🙈</div> */

const openFaced = document.querySelector(".open");
const closeFaced = document.querySelector(".close");
// const spanText = document.querySelector("span");

closeFaced.addEventListener("click", () => {
  //console.log("close face clicked");

  openFaced.classList.add("active");
  // spanText.innerHTML = "BOOOO!!!!";
  // spanText.style.color = "red";
  closeFaced.classList.remove("active");
});
openFaced.addEventListener("click", () => {
  //console.log("close face clicked");

  closeFaced.classList.add("active");

  openFaced.classList.remove("active");
});
