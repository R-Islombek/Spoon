 document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navList = document.querySelector('.header__list');
            
            hamburger.addEventListener('click', function() {
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
                link.addEventListener('click', function() {
                    if (navList.classList.contains('active')) {
                        hamburger.classList.remove('open');
                        navList.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            });
        });






//         .main__item {
//     width: 320px;
//     padding: 40px;
//     border: 2px solid #fff;
//     height: 300px;
//     backdrop-filter: blur(5px);
//     box-shadow: 0 4px 15px rgba(113, 107, 107, 0.4);
//     color: #a4d4e4;
//     border-radius: 20px;
// }