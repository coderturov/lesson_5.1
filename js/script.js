let column = document.getElementsByClassName("column"),
    adv = document.querySelector(".adv"),
    menuitem = document.getElementsByClassName("menu-item"),
    menu = document.querySelector(".menu"),
    div = document.createElement("li"),
    body = document.getElementsByTagName("body");
    
    
   
   
    

//смена местами второго и третьего пункта
menu.insertBefore(menuitem[2], menuitem[1]);

//удаление рекламы со страницы
column[1].removeChild(adv);

//добавление пятого пункта
div.classList.add("menu-item");
div.textContent = "Пятый пункт";
menu.appendChild(div);

//замена фона
document.body.style.backgroundImage = "url(./img/apple_true.jpg)";

//как вы относитесь к технике Apple

let i = 0;
while (i < 1) {
    let apple = prompt("Как вы относитесь к технике Apple");
    let rec = document.getElementById("prompt");
    if (apple != null && apple != '') {
    rec.textContent = apple;
    i++;   
    } else {
        console.log("error");
    }
}


