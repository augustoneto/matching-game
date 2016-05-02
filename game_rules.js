var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces() {

  for (var i = 0; i < numberOfFaces; i++) {
    var img = document.createElement("img");
    var randomTopPos = Math.floor(Math.random() * 400);
    var randomLeftPos = Math.floor(Math.random() * 400);
    img.src = "smile.png";
    img.style.top = randomTopPos + "px";
    img.style.left = randomLeftPos + "px";
    theLeftSide.appendChild(img);
  }

  var leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);

  theLeftSide.lastChild.onclick = function nextLevel(event) {
    event.stopPropagation();
    numberOfFaces += 5;

    clearLeftSide();
    clearRightSide();
    generateFaces();
  }
}

theBody.onclick = function gameOver() {
  alert("Game Over!");

  theBody.onclick = null;
  theLeftSide.lastChild.onclick = null;
}

function clearLeftSide() {
  while (theLeftSide.firstChild) {
     theLeftSide.removeChild(theLeftSide.firstChild);
   }
}

function clearRightSide() {
  while (theRightSide.firstChild) {
      theRightSide.removeChild(theRightSide.firstChild);
  }
}
