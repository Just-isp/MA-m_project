function switchFooter1(){
    var btn1 = document.querySelector('#plus1');
    var info1 = document.querySelector('#info1');
    btn1.classList.toggle('opened');
    info1.classList.toggle('opened');
}

document.querySelector('#plus1').onclick = switchFooter1;

function switchFooter2(){
    var btn2 = document.querySelector('#plus2');
    var info2 = document.querySelector('#info2');
    btn2.classList.toggle('opened');
    info2.classList.toggle('opened');
}

document.querySelector('#plus2').onclick = switchFooter2;

function switchFooter3(){
    var btn3 = document.querySelector('#plus3');
    var info3 = document.querySelector('#info3');
    btn3.classList.toggle('opened');
    info3.classList.toggle('opened');
}

document.querySelector('#plus3').onclick = switchFooter3;