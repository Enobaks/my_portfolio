let navBar = document.querySelector('.navbar');
let navBrand = document.querySelector('.brand-part');
let toggleIcon = document.querySelector('.navbar-toggler');
// let open = false;

window.onscroll = function() {addClass()}

function addClass() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navBar.classList.add('color');
        navBrand.style.color = 'white';
    }else{
        navBar.classList.remove('color');
        navBrand.style.color = 'crimson';
    }
}

const btn = document.querySelector('.submit button');
const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "enobakhare.emmanuel@gmail.com",
//         Password: "Osamagbe@1",
//         To: "enobakhare.emmanuel@gmail.com",
//         From: form.elements["email"].value,
//         Subject: form.elements["subject"].value,
//         Body: form.elements["message"].value + "<br><br>" + form.elements["names"].value
//     }).then(msg => alert('Email sent sucessfully'))
//     console.log(form.elements["email"].value);
// })
// form.reset();




let gen = [[2,8,7],[7,1,3],[1,9,5]]
let h = 'replace'
console.log(h.replace('e', 't'))

var canConstruct = function(ransomNote, magazine) {
    for (let char of magazine) {
        ransomNote = ransomNote.replace(char, "")
    }
    if (ransomNote == "") {
        console.log(true)
    } else {
        console.log(false)
    }
};

canConstruct('a', 'b')
console.log(Math.pow(3, three))