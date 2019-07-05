'use strict';

const navItems = document.querySelectorAll('.nav-item');



//tab navigation
navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', function () {
        const children = navItem.children;
        //children.innerHTML.classList.add('active');
        //console.log(children.nodeValue);
        
        document.querySelectorAll('.nav-link').classList.add('active');
        this.querySelector('.nav-link').classList.add('active');
    });
});



let formBtn1 = document.getElementById('form-btn1');

formBtn1.addEventListener('click', function(){
    persondetailsForm();
});

//form validation
function persondetailsForm() {
    let regEmail = /^([a-z0-9\-_\.])+@(([a-z0-9\-_])+\.)+([a-z0-9]{2,4})$/i;
    let regName = /^(([a-z ]){2,})$/i;
    let regAddress = /^[\d\w][\s\d\w\,\-\(\)\/\.]+[\d\w]$/i;

    let persondetails = {
        fullName : document.getElementById('fullName').value,
        email : document.getElementById('email').value,
        gender : document.querySelector('input[name="gender"]:checked').value,
        adress : document.getElementById('adress').value,
        checked : false
    }

    if (!regName.test(persondetails.fullName)) {
        alert("please enter a valid name");
    }

    if (!regEmail.test(persondetails.email)) {
        alert("please enter a valid Email");
    }

    if (!regAddress.test(persondetails.adress)) {
        alert("please enter a valid Email");
    }


    persondetails.checked = true;
    window.localStorage.setItem('personDet', JSON.stringify(persondetails));

}

//fetch values


