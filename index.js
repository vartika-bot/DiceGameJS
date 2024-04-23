var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice" + randomNumber1+".png";

var randomImageSource1="images/"+randomImage1;
var image1= document.getElementsByClassName("img1")[0];

image1.setAttribute('src', randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2+".png";

var randomImageSource2="images/"+randomImage2;
var image2= document.getElementsByClassName("img2")[0];

image2.setAttribute('src', randomImageSource2);


if(randomNumber1>randomNumber2)
{document.querySelector("h1").innerHTML="🚩Player 1 won"}
if(randomNumber1<randomNumber2)
{document.querySelector("h1").innerHTML="Player 2 won🚩"}
if(randomNumber1===randomNumber2)
{document.querySelector("h1").innerHTML="DRAW"}


