body.onclick = function(event) {
  let target = event.target; // где был клик?
  console.log(target.classList.contains('myBtn'));

  if (target.classList.contains('myBtn')) {
    console.log(target);
    target.addEventListener( 'click', myFunction(target) );
  }; // не на TD? тогда не интересует

};


function myFunction(target) {
  let dots = target.closest("div").getElementsByClassName("dots")[0];
  console.log(dots);
  let moreText = target.closest("div").getElementsByClassName("more")[0];
  let btnText = target.closest("div").getElementsByClassName("myBtn")[0];
  //let moreText = target.getElementsByClassName("more")[0];
  //let btnText = target.getElementsByClassName("myBtn")[0];

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Подробнее";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Скрыть";
    moreText.style.display = "inline";
  }
}