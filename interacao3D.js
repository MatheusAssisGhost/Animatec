// let saudacao = window.prompt('Olá, tudo bem? Qual seu nome?')

// window.alert(`Olá ${saudacao}, bem-vindo à Animatec!`)


// var outroElemento = document.querySelector(".main_title"); 
// outroElemento.textContent = (`Olá, ${saudacao}! Bem-vindo a Animatec`);
// Element.appendChild(text)

class MobileNavBar {
    constructor(MobileMenu) {
        this.Menu_burguer_div = document.querySelector(MobileMenu);
        this.menu_burguer = document.querySelector (menu_burguer);
        this.div_nav = document.querySelectorAll(div_nav);
        this.activeClass = "active";
    }

    addClickEvent(){
        this.MobileMenu.addEventListener("click")
    }
}

