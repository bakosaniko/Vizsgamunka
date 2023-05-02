let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function check(){

  cim = urlap.email.value
  if (cim.length==0){
alert('Az email cím üres!')
  }
  tel = urlap.telefonszam.value
  if (tel.length==0){
    alert('Kérjük, adja meg telefonszámát!')
      }
  if (isNaN(tel)){
alert('Kérjük, a telefonszámot az alábbi formátumban adja meg: 06 70 123 45 67')
  }
  szoveges = urlap.szoveges.value
  if (cim.length==0){
alert('Kérjük, fejtse ki pár szóban, milyen ügyben keres minket!')
  }
  
}