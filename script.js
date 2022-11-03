
//Navbar menu slide in on click
function nav_hide() {
    const menu_hamburger_btn = document.querySelector('.menu-dash-btn');
    const nav_menu_list = document.querySelector('.nav-li-container');

    menu_hamburger_btn.addEventListener('click', () => {
        nav_menu_list.classList.toggle('nav-li-hide');
        menu_hamburger_btn.classList.toggle('toggle-btn');
    })
}

nav_hide();


//Code to change the background color of navbar when mouse scroll detected
function changeNavBg() {
    var navbar = document.getElementById('navbar');

    var scrollValue = window.scrollY;
    console.log(scrollValue);
    if (scrollValue < 150) {
        navbar.classList.remove('navBg-onscroll-menu');
    }
    if (scrollValue > 150) {
        navbar.classList.add('navBg-onscroll-menu');
    }
    if (scrollValue < 600) {
        navbar.classList.remove('navBg-onscroll-about');
    }
    if (scrollValue > 600) {
        navbar.classList.add('navBg-onscroll-about');

    }

}

window.addEventListener('scroll', changeNavBg);



//Code to view menu when associated button is clicked
const menu_btn = document.querySelectorAll('.food-menu-btn');
const menu_content = document.querySelectorAll('.content-child-container');

for (let j = 0; j < menu_btn.length; j++) {
    menu_btn[j].addEventListener('click', () => {
        menu_content[j].style.display = 'flex';
        for (let k = 0; k < menu_content.length; k++) {
            if (menu_content[k] !== menu_content[j]) {
                menu_content[k].style.display = 'none';
            }
        }
    });
}


//Code to higtlight the active food menu button
for (let p = 0; p < menu_btn.length; p++) {
    menu_btn[p].addEventListener('click', () => {
        var clicked_btn = document.getElementsByClassName('active-btn');
        if (clicked_btn.length > 0) {
            clicked_btn[0].classList.remove('active-btn');
        }
        menu_btn[p].classList.add('active-btn');
    });
}




