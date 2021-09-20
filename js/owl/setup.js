$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


function myFunction(ident){
    var elemento = document.getElementsByClassName("filme-principal")[0];
    var x = document.getElementById(ident).src;                               // Guarda em x a imagem do filme clicado
    elemento.style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),  url('"+x+"') no-repeat";  //Atribui ao cartaz principal a imagem guardada anteriormente. Optei por usar a mesma imagem.
    
    var z = document.getElementById(ident);     // Guarda a class(identificação) do filme clicado
    var c = z.parentNode;                       // Recupera o pai da class clicada
    var y = c.childNodes;                       // Recupera os filhos da class pai


    document.getElementById("tituloCartaz").textContent = y[3].textContent;   // Atribui o titulo do filme clicado ao filme em cartaz | Este item esta oculto pelo css .item p
    document.getElementById("descCartaz").textContent = y[5].textContent;     // Atribui a descrição do filme clicado ao filme em cartaz  | Este item esta oculto pelo css .item p


  }
