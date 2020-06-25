function displayMobileMenu(){
    var nav = document.getElementById('nav-items');

    if(window.innerWidth <= 992){
        if(nav.style.display == 'flex') nav.style.display = 'none';
        else nav.style.display = 'flex';
    }

}