var sect2 = document.querySelector("#sect2");
var sect2scrolly = sect2.querySelector("#scrolly");
var sect2sticky = sect2scrolly.querySelector(".sticky-thing");
var sect2article = sect2scrolly.querySelector("article");
var sect2steps = sect2article.querySelectorAll(".step");
var sect2image = document.querySelector("#sect2Image");

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  // response = { element, direction, index }
  var el = response.element;

  // remove is-active from all steps
  // then add is-active to this step
  sect2steps.forEach((step) => step.classList.remove("is-active"));
  el.classList.add("is-active");

  // update graphic based on step
  sect2image.src = `${el.dataset.step}`;
}

function init() {
  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.33,
    })
    .onStepEnter(handleStepEnter);

  // setup resize event
  window.addEventListener("resize", scroller.resize);
}

// kick things off
init();
