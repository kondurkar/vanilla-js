'use strict';

document.querySelectorAll('.nav-item').onclick = function () { 
    tabFunction();
};

function tabFunction() {
    console.log(this);
}