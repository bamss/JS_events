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

function reditCard(){
    let btn = document.querySelector('body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary');
    let card_text = document.querySelector('body > main > div > div > div > div:nth-child(2) > div > div > p');
    
    btn.addEventListener("click", function(){
        console.log(card_text)
        card_text.classList.toggle("text-success");
    })
}
reditCard()

function fuckBoostrap(){
    let nav = document.querySelector('body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div');
    let cdn  =   document.querySelector('head > link')
    // dbclick
    // disabled
    
    nav.addEventListener("dblclick" , function () {
        cdn.disabled= true
      })
    
}
fuckBoostrap()