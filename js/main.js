 AOS.init();
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.header__list');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('open');
        navList.classList.toggle('active');

        // Toggle body overflow when menu is open
        if (navList.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.header__link, .header__link-name');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navList.classList.contains('active')) {
                hamburger.classList.remove('open');
                navList.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
});

// IF va Else doir masalalar

// 1-Masala;

// let a = Number(prompt("Iltimos, son kiriting:"));

// if (a > 0) {
//      console.log("Bu son musbat", (a + 1));
     
// } else {
//      console.log("Bu son manfiy" + (a - 1));
// }

// 2-Masala;

// let a = Number(prompt("Iltimos, son kiriting:"));
// let b = Number(prompt("Iltimos, ikkinchi sonni kiriting:"));
// let c = Number(prompt("Iltimos, uchinchi sonni kiriting:"));




// 3-Masala;

// let a = Number(prompt("Iltimos, son kiriting:"));
// let b = Number(prompt("Iltimos, ikkinchi sonni kiriting:"));
// let c = Number(prompt("Iltimos, uchinchi sonni kiriting:"));

// if (a > b && a > c) {
//     console.log("Eng katta son:", a);
// } else if (b > a && b > c) {
//     console.log("Eng katta son:", b);
// } else if (c > a && c > b) {
//     console.log("Eng katta son:", c);
// } else {
//     console.log("Sonlar teng");
// }
       