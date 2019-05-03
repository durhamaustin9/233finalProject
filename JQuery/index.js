// index page js
$(document).ready(function () {
    slideCount = $(".swiper-page").length - 1;
    var width = window.innerWidth;

  let h1Select = document.getElementsByTagName("h1");
  let h2Select = document.getElementsByTagName("h2");
  let welcomePart1 = h1Select[0];
  let welcomePart2 = h2Select[0];
  let tutorialPart1 = h2Select[1];
  let tutorialPart2 = h2Select[2];
  let tutorialUnder1 = document.getElementById("tutorialUnder1");
  let stepOneStart = h2Select[3];
  let tutorialUnder2 = document.getElementById("tutorialUnder2");
  let button1View = document.getElementById("left");
  let button2View = document.getElementById("right");
  let buttonsExplained = document.getElementById("buttonsExplained");
  let definitionExplained1 = document.getElementById("definition1");
  let definitionExplained2 = document.getElementById("definition2");
  let textBoxExample = document.getElementById("textBoxExample");
  let textBoxInnerExample = document.getElementById("innerEx");
  let textDefinition1 = document.getElementById("textDefinition1");
  let textDefinition2 = document.getElementById("textDefinition2");
  let textDefinition3 = document.getElementById("textDefinition3");
  let finishingStepOne = document.getElementById("getStarted");

  function runSomething(callback) {
    $(welcomePart1).fadeIn(2000, function () {

    });
    $(welcomePart1).fadeOut(2000, function () {
      $(welcomePart2).fadeIn(2000, function () {

      });
      $(welcomePart2).fadeOut(2000, function () {
        $(tutorialPart1).fadeIn(2000, function () {

        });
        $(tutorialPart1).fadeOut(2000, function () {

        });
        $(tutorialPart2).fadeIn(2000, function () {
          $(tutorialUnder1).fadeIn(2000, function () {
            if (width <= 1024)  {
              $(tutorialPart2).animate({
                top: "10%",
                marginLeft: "-170px"
              }, 2000);

              $(tutorialUnder1).animate({
                top: "10%",
                marginLeft: "-170px"
              }, 2000);
            } else {
              $(tutorialPart2).animate({
                top: "0%"
              }, 2000);

              $(tutorialUnder1).animate({
                top: "0%"
              }, 2000);
            }

            $(stepOneStart).fadeIn(3000, function () {

            });

            $(tutorialUnder2).fadeIn(3000, function () {
              $(button1View).fadeIn(3000, function () {

              });

              $(button2View).fadeIn(3000, function () {
                $(buttonsExplained).fadeIn(2500, function () {
                  $(buttonsExplained).delay(2500).fadeOut(2500, function () {
                    $(definitionExplained1).fadeIn(3000, function () {

                    });

                    $(definitionExplained2).fadeIn(3000, function () {
                      $(definitionExplained1).delay(3000).fadeOut(2500, function () {

                      });
                      $(definitionExplained2).delay(3000).fadeOut(2500,function () {
                        $(textBoxExample).fadeIn(3000, function () {
                          $(textDefinition1).fadeIn(3000).delay(2000).fadeOut(3000, function () {
                            $(textDefinition2).fadeIn(3000).delay(2000).fadeOut(3000, function () {
                              $(textBoxInnerExample).css("color", "red");

                              $(textDefinition3).fadeIn(3000).delay(2000).fadeOut(3000, function () {

                              });

                              $(textBoxExample).delay(5000).fadeOut(3000, function () {
                                $(finishingStepOne).fadeIn(3000, function () {
                                  callback()
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  }


  runSomething(function(){

  });


  $("#jQInput").keyup(function () {
    jqAnswerCheck()
  });

  $("#funcInput").keyup(function () {
    funcAnswerCheck()
  })


});

function jqAnswerCheck()  {
  var jQValue = $("#jQInput").val();

  if (jQValue === "$")  {
    $("#jQInput").css("color", "greenyellow")
  } else {
    $("#jQInput").css("color", "red")
  }
}

function funcAnswerCheck()  {
  var funcValue = $("#funcInput").val();

  if (funcValue === "f")  {
    $("#funcInput").css("color", "greenyellow")
  } else if (funcValue === "fu")  {
    $("#funcInput").css("color", "greenyellow")
  } else if (funcValue === "fun") {
    $("#funcInput").css("color", "greenyellow")
  } else if (funcValue === "func")  {
    $("#funcInput").css("color", "greenyellow")
  } else if (funcValue === "funct") {
    $("#funcInput").css("color", "greenyellow")
  } else if (funcValue === "functi")  {
    $("#funcInput").css("color", "greenyellow")
  } else if (funcValue === "functio") {
    $("#funcInput").css("color", "greenyellow")
  } else if (funcValue === "function")  {
    $("#funcInput").css("color", "greenyellow")
  } else {
    $("#funcInput").css("color", "red")
  }
}

let currentSlide = 0;
let transitionValue = 0;

function scrollHorizontal(x) {
  const classifier = $(x).attr("id");

  if (classifier === "left")  {
    scrollLeft()
  }
  else if (classifier === "right")  {
    scrollRight()
  }

  if (currentSlide === 1) {
    secondStep(function () {

    })
  }
}

function scrollLeft() {
  if (currentSlide > 0)  {
    currentSlide--;
    transitionValue = currentSlide * -100;
  }

  document.getElementById("page-wrapper").style.transform = "translate3d("+transitionValue+"vw, 0px, 0px)"
}

function scrollRight() {
  if (slideCount !== currentSlide) {
    currentSlide++;
    transitionValue = currentSlide * -100;
  }

  document.getElementById("page-wrapper").style.transform = "translate3d("+transitionValue+"vw, 0px, 0px)"
}

//Step Two Animation
function secondStep(callback) {
  let jquerySelector = document.getElementById("jquery").getElementsByTagName("b");
  let jquerySelector2 = document.getElementById("jqueryPart2").getElementsByTagName("b");
  let jqueryDefSelector = document.getElementById("jQueryDefinition");

  $(jquerySelector).fadeIn(4000, function () {

  });

  $(jquerySelector2).fadeIn(4000, function () {

  });

  $(jqueryDefSelector).fadeIn(4000, function () {
    let documentSelector = document.getElementById("document").getElementsByTagName("b");
    let documentDefSelector = document.getElementById("documentDefinition");

    $(documentSelector).fadeIn(2500, function () {

    });
    
    $(documentDefSelector).fadeIn(2500, function () {
      let readySelector = document.getElementById("ready").getElementsByTagName("b");
      let readySelector2 = document.getElementById("readyPart2").getElementsByTagName("b");
      let readyDefSelector = document.getElementById("readyDefinition");

      $(readySelector).fadeIn(2500, function () {

      });

      $(readySelector2).fadeIn(2500, function () {

      });

      $(readyDefSelector).fadeIn(2500,function () {
        let functionSelector = document.getElementById("function").getElementsByTagName("b");
        let functionSelector2 = document.getElementById("functionPart2").getElementsByTagName("b");
        let functionSelector3 = document.getElementById("functionPart3").getElementsByTagName("b");
        let functionDefSelector = document.getElementById("functionDefinition");

        $(functionSelector).fadeIn(2500, function () {

        });

        $(functionSelector2).fadeIn(2500, function () {

        });

        $(functionSelector3).fadeIn(2500, function () {

        });

        $(functionDefSelector).fadeIn(2500, function () {
          callback()
        })
      })
    })
  })
}
//End Step Two Animation

