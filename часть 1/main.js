document.addEventListener("DOMContentLoaded", function () {
  const btn1 = document.getElementById('btn-1')
  const blockTitle = document.getElementById('blockTitle')

  btn1.addEventListener("click", function () {
    blockTitle.classList.toggle('visually-hidden')
  })

  const btn2 = document.getElementById('btn-2')
  const blockItem2 = document.getElementById('blockItem2')

  btn2.addEventListener("click", function () {
    blockItem2.classList.toggle('block__item--order')
  })

  const closePopupButton = document.getElementById("closePopup");
  const popup = document.getElementById("popup");

  closePopupButton.addEventListener("click", function () {
    popup.style.display = "none";
  });
})