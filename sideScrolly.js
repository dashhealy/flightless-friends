var intro = document.querySelector("#intro");
var intScrolly = intro.querySelector("#scrolly");
var intSticky = intScrolly.querySelector(".sticky-thing");
var intArticle = intScrolly.querySelector("article");
var intSteps = intArticle.querySelectorAll(".step");

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  // response = { element, direction, index }
  var el = response.element;

  // remove is-active from all steps
  // then add is-active to this step
  intSteps.forEach((step) => step.classList.remove("is-active"));
  el.classList.add("is-active");
}

function init() {
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.33,
      // debug: true
    })
    .onStepEnter(handleStepEnter);

  window.addEventListener("resize", scroller.resize);
}

init();
