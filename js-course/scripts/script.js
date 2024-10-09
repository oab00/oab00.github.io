function upDate(previewPic) {
  console.log(this + "is focused");
  var imageText = previewPic.alt;
  var imageSource = previewPic.src;

  var displayDiv = document.getElementById("image");

  displayDiv.innerHTML = imageText;
  displayDiv.style.backgroundImage = "url('" + imageSource + "')";
}

function unDo() {
  var displayDiv = document.getElementById("image");

  displayDiv.innerHTML = "Hover over an image below to display here.";
  displayDiv.style.backgroundImage = "url('')";
}

function addTabIndices() {
  var previewImages = document.querySelectorAll("img.preview");

  for (var i = 0; i < previewImages.length; i++) {
    previewImages[i].tabIndex = i + 2;
  }
}
