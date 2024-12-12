let left = document.querySelector('.left');
let right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');
let burp = document.querySelector('.burp');
let pasta = document.querySelector('.pasta');
let wasted = document.querySelector('.wasted')
burp.style.display ="none";
pasta.style.display ="none";
let sleep= document.querySelector('.sleep');
sleep.style.display ="none";
let sleeping= document.querySelector('.sleeping')
sleeping.style.display="none";


// Choice A
let Chicken = document.querySelector('.Chicken');
Chicken.style.display ="none";
pasta.style.display ="none";
 wasted.style.display ="none";


// left click


left.addEventListener('click', function() {
    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    pasta.style.display ="none";
     wasted.style.display ="none";
    Chicken.style.display ="block";
    sleep.style.display ="block";
    text.innerHTML ="to eat double click or find sleep emoji"

});

// double click left
Chicken.addEventListener('dblclick', function() {
    text.innerHTML ="that was good";
    Chicken.style.display ="none";
    pasta.style.display ="none";
     wasted.style.display ="none";
    burp.style.display ="block";
});


// Choice B

right.addEventListener('click', function() { 
    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    pasta.style.display ="Block";
    Chicken.style.display ="none";
    wasted.style.display ="none";

    text.innerHTML ="to eat double click"
});

// double click right
pasta.addEventListener('dblclick', function() {
    text.innerHTML ="you have been poisened";
    Chicken.style.display ="none";
    pasta.style.display ="none";
    burp.style.display ="none";
    wasted.style.display ="block";


});

// mouseenter
sleep.addEventListener('mouseenter', function() {
    text.innerHTML ="you have went to sleep";
    Chicken.style.display ="none";
    pasta.style.display ="none";
    burp.style.display ="none";
    wasted.style.display ="none";
    sleeping.style.display ="block";
});