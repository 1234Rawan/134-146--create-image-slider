var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
var slidesCount = sliderImages.length;
var currentSlide = 1;
var slideNumberElement = document.getElementById("slide-number");
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');
for (var i = 1; i <= slidesCount; i++) {
  var paginationItem = document.createElement('li');
  paginationItem.setAttribute('data-index', i);
  paginationItem.appendChild(document.createTextNode(i))
  paginationElement.appendChild(paginationItem);
}
document.getElementById('indicators').appendChild(paginationElement);

var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
for (var i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute('data-index'));
    theChecker();

  }
}

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

function nextSlide() {
  currentSlide++;
  if (currentSlide > slidesCount) {
    currentSlide = 1;
  }
  theChecker();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 1) {
    currentSlide = slidesCount;
  }
  theChecker();
}
function theChecker() {
  slideNumberElement.textContent = 'slide #' + (currentSlide) + ' of ' + (slidesCount);
  removeAllActive();
  sliderImages[currentSlide - 1].classList.add('active');
  paginationBullets[currentSlide - 1].classList.add('active');
  if (currentSlide == slidesCount) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}

function removeAllActive() {
  sliderImages.forEach(function (img) {
    img.classList.remove('active');
  });
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove('active');
  });
}
