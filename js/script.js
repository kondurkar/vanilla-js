'use strict';

let navItems = document.querySelectorAll('.nav-item');
document.querySelectorAll('.nav-item').onclick = function () { 
    tabFunction();
};

function tabFunction() {
    console.log(this);
}