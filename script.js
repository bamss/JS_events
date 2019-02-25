function footerClicker(){
var footer = document.querySelector("footer");
var x = 1;
footer.addEventListener("click", function(){
  
    console.log("clique by Mouloud 😎" +  " " + x); 
    x ++

})
}

footerClicker()

function hambourger(){
    let nav = document.querySelector('#navbarHeader');
    let kebab = document.querySelector('.navbar-toggler-icon');
    kebab.addEventListener("click", function(){
        nav.classList.toggle('collapse');

    })
}
hambourger()

function editCard(){
    let btn = document.querySelector(".btn-outline-secondary");
    let card_text = document.querySelector(".card-text")
    btn.addEventListener("click", function(){
        card_text.style.color = "red"
        console.log(btn);
    })
}
editCard()