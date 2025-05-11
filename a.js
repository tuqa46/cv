window.onload = function () {
  var bars = document.getElementsByClassName("bar");
  for (var i = 0; i < bars.length; i++) {
    var percent = bars[i].getAttribute("data-percent");
    bars[i].style.width = percent + "%";}};

showSlideC(0);
showSlideB(0);
showSlideR(0);

var currentSlideC = 0;
function showSlideC(index) {
  var slides = document.getElementsByClassName("cer");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(" + (-100 * index) + "%)";}}


function nextSlideC() {
  var slides = document.getElementsByClassName("cer");
  currentSlideC = (currentSlideC + 1) % slides.length;
  showSlideC(currentSlideC);}

function prevSlideC() {
  var slides = document.getElementsByClassName("cer");
  currentSlideC = (currentSlideC - 1 + slides.length) % slides.length;
  showSlideC(currentSlideC);}


  
var currentSlideB = 0;
function showSlideB(index) {
  var slides = document.getElementsByClassName("bro");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(" + (-100 * index) + "%)"; }}


function nextSlideB() {
  var slides = document.getElementsByClassName("bro");
  currentSlideB = (currentSlideB + 1) % slides.length;
  showSlideB(currentSlideB);}

function prevSlideB() {
  var slides = document.getElementsByClassName("bro");
  currentSlideB = (currentSlideB - 1 + slides.length) % slides.length;
  showSlideB(currentSlideB);}

var currentSlideR = 0;
function showSlideR(index) {
  var slides = document.getElementsByClassName("pro");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(" + (-100 * index) + "%)";}}


function nextSlideR() {
  var slides = document.getElementsByClassName("pro");
  currentSlideR = (currentSlideR + 1) % slides.length;
  showSlideR(currentSlideR);}

function prevSlideR() {
  var slides = document.getElementsByClassName("pro");
  currentSlideR = (currentSlideR - 1 + slides.length) % slides.length;
  showSlideR(currentSlideR);}
