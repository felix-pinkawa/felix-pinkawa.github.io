(function () {

    var burgerIcon = document.getElementById('burger-menu-icon');
    var burgerMenu = document.getElementById('burger-menu');

    burgerIcon.addEventListener('click', onMenuClick);

    function onMenuClick() {
        if (burgerMenu.classList.contains('open')) {
            burgerMenu.classList.remove('open');
        } else {
            burgerMenu.classList.add('open');
        }
    }

})();