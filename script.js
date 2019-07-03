let selectors = document.querySelectorAll(".choice-selector");
let choices = document.querySelectorAll(".choice");

selectors[0].addEventListener('click', function(){
  selectors[0].classList.add("selected");
  selectors[1].classList.remove("selected");
  selectors[2].classList.remove("selected");
  choices[0].classList.add("choice-selected");
  choices[1].classList.remove("choice-selected");
  choices[2].classList.remove("choice-selected");
});

selectors[1].addEventListener('click', function(){
  selectors[0].classList.remove("selected");
  selectors[1].classList.add("selected");
  selectors[2].classList.remove("selected");
  choices[0].classList.remove("choice-selected");
  choices[1].classList.add("choice-selected");
  choices[2].classList.remove("choice-selected");
});

selectors[2].addEventListener('click', function(){
  selectors[0].classList.remove("selected");
  selectors[1].classList.remove("selected");
  selectors[2].classList.add("selected");
  choices[0].classList.remove("choice-selected");
  choices[1].classList.remove("choice-selected");
  choices[2].classList.add("choice-selected");
});
