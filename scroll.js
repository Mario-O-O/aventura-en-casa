const d = document;
function slideGeneral(siguente, atras, slide) {
  d.addEventListener('click', (e) =>{
    if (e.target.matches(siguente) || e.target.matches(`${siguente} *`)) {
      plusDivs(1);
    }
    if (e.target.matches(atras) || e.target.matches(`${atras} *`)) {
      plusDivs(-1);
    }
  });

  let slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    let i;
    let $x = d.querySelectorAll(slide);
    if (n > $x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = $x.length}
    for (i = 0; i < $x.length; i++) {
      $x[i].style.display = "none";
    }
    $x[slideIndex-1].style.display = "block";
  }
}

function slideEzpecifico(transporte, slideTransporte) {
  d.addEventListener('click', (e) =>{

    if (e.target.matches(transporte) || e.target.matches(`${transporte} *`)) {
      d.querySelector(slideTransporte).style.display = "block";
      d.querySelector(".hm_slide_3").style.display = "none";
    }

    if (e.target.matches(".hm_atras2")) {
      d.querySelector(slideTransporte).style.display = "none";
      d.querySelector(".hm_slide_3").style.display = "block";
    }

  });
}

slideEzpecifico(".avion",".ejmplo_avion");
slideEzpecifico(".cicla",".ejmplo_cicla");
slideEzpecifico(".triciclo",".ejmplo_triciclo");

slideGeneral(".hm_siguiente",".hm_atras", ".myProyect");