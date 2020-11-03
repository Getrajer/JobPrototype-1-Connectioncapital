const navButton = document.getElementById("NavigationButton");
const navCloseButton = document.getElementById("NavigationCloseButton");
const navigationMenu = document.getElementById("Menu");


const ToggleMenu = () =>{
    if(navigationMenu.style.display === 'block'){
        navigationMenu.style.display = 'none';
        navigationMenu.classList.remove('navAnimation_class');
        
        navCloseButton.style.display = 'none';
        navButton.style.display = 'block';
    }
    else{
        navigationMenu.style.display = 'block';
        navigationMenu.classList.add('navAnimation_class');

        navCloseButton.style.display = 'block';
        navButton.style.display = 'none';
    }
}


navButton.addEventListener("click", ToggleMenu);
navCloseButton.addEventListener("click", ToggleMenu);
