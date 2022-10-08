const imageEl = document.getElementById("fadingImage");
const images = [
  "./images/1.jpg",
  "./images/11.jpg",
  "./images/2.jpg"
];
let i = 0;
// let alink = window.location.href;
// console.log(window.location.href)
function checkurl() {
  if (window.location.href === 'https://kartplus.netlify.app/') {
    setInterval(changePicture, 5000)
function changePicture() {
  i++;
  if (i > images.length - 1)
    i = 0;
  document.getElementById("fadingImage").style.backgroundImage = `url(${images[i]})`;
}
  }
  
}
setInterval(checkurl, 10000);

