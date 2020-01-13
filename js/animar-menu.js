const $btn = document.querySelector("#ck-menu");
const $menu = document.querySelector("#menu");
const $submenu = document.querySelector(".sub-menu");

$btn.addEventListener('click', function(){
    if ($btn.checked){
        $submenu.classList.add("abrir-sub-menu")
        $menu.classList.add("menu-abrir");
        
    }else{
        $submenu.classList.remove("abrir-sub-menu");
        $menu.classList.remove("menu-abrir");

    }
})
