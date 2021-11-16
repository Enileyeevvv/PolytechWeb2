function menu_burger() {
    var menu = document.getElementById("menu-burger")
    var menu_top = document.getElementById("menu-top")
    var menu_bottom = document.getElementById("menu-bottom")
    var menu_middle_one = document.getElementById("menu-middle-one")
    var menu_middle_two = document.getElementById("menu-middle-two")
    menu.classList.toggle("menu-trans")
    menu_top.classList.toggle("opacity")
    menu_middle_one.classList.toggle("rotate-one")
    menu_middle_two.classList.toggle("rotate-two")
    menu_bottom.classList.toggle("opacity")
}

function lamp()
{
    var lamp = document.getElementById("lamp")
    var luk_one = document.getElementById("luk_one")
    var luk_two = document.getElementById("luk_two")
    var luk_three = document.getElementById("luk_three")
    lamp.classList.toggle("yellow")
    luk_one.classList.toggle("yellow-luk")
    luk_two.classList.toggle("yellow-luk")
    luk_three.classList.toggle("yellow-luk")
}

function clock()
{
    sec++
    var arrow_min = document.getElementById("arrow-min")
    var arrow_hour = document.getElementById("arrow-hour")
    arrow_min.style.transform = "rotate("+sec*10+"deg)"
    arrow_hour.style.transform = "rotate("+sec*1+"deg)"
}

var sec=0;
setInterval( clock, 1000)