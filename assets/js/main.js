const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const contacto = document.querySelector("#pies");

contacto.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}

menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

var expanded = false;
function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if(!expanded){
      checkboxes.style.display = "block";
      expanded = true;
    }
    else{
      checkboxes.style.display = "none";
      expanded = false;
    }
}
(function ($) {
  $(document).ready(function () {
    $(document).on("change", ".ingredientes input", function () {
      var numberOfChecked = $(".ingredientes input:checkbox:checked").length;
      if (numberOfChecked >= 3) {
        $(".ingredientes input:not(:checked)").prop("disabled", true);
      } else {
        $(".ingredientes input:not(:checked)").removeAttr("disabled", true);

      }
    });
  });
})(jQuery);

function getValue() {

  var checkboxes = 
      document.getElementsByName('Columna1');// ingredientes
      var checkboxess = 
      document.getElementsByName('Columna2');// extras
    
      

  var ingredientes = "";
  var extras = "";
var canti=0;
var cante=0;
var x=1;
var y=1;
  for (var i = 0; i < checkboxes.length; i++) { // for para cantidad de ingredientes
      if (checkboxes[i].checked) {
      canti++;
      }

    }

//console.log(checkboxes.length);
for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
      //console.log(i);
      if(x==canti)
      {
        ingredientes += checkboxes[i].value;
      }else
      {
        ingredientes += checkboxes[i].value + " " + ", ";
      }
      x++;
      }

    } 
  
  
  
    for (var j = 0; j < checkboxess.length; j++) {
      if (checkboxess[j].checked == true){
    //extras += checkboxess[j].value + " " +  " , ";
    cante++;
    }
  }
for (var j = 0; j < checkboxess.length; j++) {
      if (checkboxess[j].checked == true){
    
    if(y==cante)
      {
        extras += checkboxess[j].value;
      }else
      {
        extras += checkboxess[j].value + " " +  " , ";
      }
      y++;
    }
  }

  let nombreyapellido = document.getElementById('nombreyapellido').value;
  let cantidadp = document.getElementById('cantidadp').value;
  let toppingid = document.getElementById('toppingid').value;
  let consulta = document.getElementById('mensaje').value;
  let whatsapp= 56998315624;
  var response = grecaptcha.getResponse();

nombreyapellido=nombreyapellido.trim(); // elimina espacio en blanco
//console.log(nombreyapellido);
if(nombreyapellido == "" || nombreyapellido.length < 1 || nombreyapellido == null)
  {
    swal("¡Error!", "Rellene el campo de Nombre y Apellido", "warning");
    return false; 

  }else if(cantidadp == "Seleccione la cantidad de personas")
  {
    swal("¡Error!", "Rellene el campo Cantidad de personas", "warning");
    return false;   
  }
  else if(canti==0)
  {
    swal("¡Error!", "Rellene los campo de ingredientes", "warning");
    return false;
  }
  else if(response.length == 0)
  {
    swal("¡Error!", "Validar el CAPTCHA. Por favor, chequea antes de continuar", "warning");
    return false;
  }
else{
  if(toppingid=="" && consulta == "" && cante==0) // topping == consulta == cantidad extra == 0
  {
    if(canti ==1)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, El ingrediente a eleccion es:%20${ingredientes}.`,'_blank');
    }else if(canti ==2)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los dos ingredientes a eleccion son:%20${ingredientes}.`,'_blank');
    }else
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los tres ingredientes a eleccion son:%20${ingredientes}.`,'_blank');
    }
    
    
  }else if(toppingid=="" && cante==0) //topping == cantidad extra == 0
  {
    if(canti ==1)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, El ingrediente a eleccion es:%20${ingredientes}, 
  Mi consulta es:%20${consulta}.`,'_blank');  
    }else if(canti ==2)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los dos ingredientes a eleccion son:%20${ingredientes}, 
  Mi consulta es:%20${consulta}.`,'_blank');
    }else
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los tres ingredientes a eleccion son:%20${ingredientes}, 
  Mi consulta es:%20${consulta}.`,'_blank');
    }
    
  }else if(consulta == "" && cante==0)//consulta == cantidad extra == 0
  {
    if(canti ==1)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, El ingrediente a eleccion es:%20${ingredientes}
  Topping:%20${toppingid}.`,'_blank');  
    }else if(canti ==2)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los dos ingredientes a eleccion son:%20${ingredientes}
  Topping:%20${toppingid}.`,'_blank');
    }else
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los tres ingredientes a eleccion son:%20${ingredientes}
  Topping:%20${toppingid}.`,'_blank');  
    }
    
  }
  else if(toppingid=="" && consulta == "") // topping vacio
  {
    if(canti ==1)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, El ingrediente a eleccion es:%20${ingredientes}
  los ingredientes extras son:%20${extras}.`,'_blank'); 
    }else if(canti ==2)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los dos ingredientes a eleccion son:%20${ingredientes}
  los ingredientes extras son:%20${extras}.`,'_blank');
    }else
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los tres ingredientes a eleccion son:%20${ingredientes}
  los ingredientes extras son:%20${extras}.`,'_blank');
    }
    
    
  }else if(consulta == "") // consulta vacia
  {
    if(canti ==1)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, El ingrediente a eleccion es:%20${ingredientes}
  los ingredientes extras son:%20${extras}%20Topping:%20${toppingid}.`,'_blank'); 
    }else if(canti ==2)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los dos ingredientes a eleccion son:%20${ingredientes}
  los ingredientes extras son:%20${extras}%20Topping:%20${toppingid}.`,'_blank');
    }else
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los tres ingredientes a eleccion son:%20${ingredientes}
  los ingredientes extras son:%20${extras}%20Topping:%20${toppingid}.`,'_blank');
    }
    
  }else if(toppingid=="") // topping vacio y consulta vacia
  {
    if(canti ==1)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, El ingrediente a eleccion es:%20${ingredientes}
  los ingredientes extras son:%20${extras}, Mi consulta es:%20${consulta}.`,'_blank');  
    }else if(canti ==2)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los dos ingredientes a eleccion son:%20${ingredientes}
  los ingredientes extras son:%20${extras}, Mi consulta es:%20${consulta}.`,'_blank');
    }else
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los tres ingredientes a eleccion son:%20${ingredientes}
  los ingredientes extras son:%20${extras}, Mi consulta es:%20${consulta}.`,'_blank');
    }
    
  }
  else if(cante==0)
  {
    if(canti ==1)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, El ingrediente a eleccion es:%20${ingredientes}
  Topping:%20${toppingid}, Mi consulta es:%20${consulta}`,'_blank');  
    }else if(canti ==2)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los dos ingredientes a eleccion son:%20${ingredientes}
  Topping:%20${toppingid}, Mi consulta es:%20${consulta}`,'_blank');
    }else
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los tres ingredientes a eleccion son:%20${ingredientes}
  Topping:%20${toppingid}, Mi consulta es:%20${consulta}`,'_blank');
    }
    
  }
  else
  {
  if(canti ==1)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, El ingrediente a eleccion es:%20${ingredientes}
  los ingredientes extras son:%20${extras}%20Topping:%20${toppingid}, Mi consulta es:%20${consulta}`,'_blank');
  }else if(canti ==2)
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los dos ingredientes a eleccion son:%20${ingredientes}
  los ingredientes extras son:%20${extras}%20Topping:%20${toppingid}, Mi consulta es:%20${consulta}`,'_blank');
  }
    else
    {
      var win= window.open(`https://wa.me/${whatsapp}?text=Hola%20mi%20nombre%20es%20*${nombreyapellido}*,%20quisiera%20una%20torta%20para%20${cantidadp} personas, Los tres ingredientes a eleccion son:%20${ingredientes}
  los ingredientes extras son:%20${extras}%20Topping:%20${toppingid}, Mi consulta es:%20${consulta}`,'_blank');
  }
    }
  

    }

  }
function soloLetras(e) {
      key = e.keyCode || e.which;
      tecla = String.fromCharCode(key).toLowerCase();
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";  
      if(letras.indexOf(tecla) == -1 )
          return false;
  }

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
function Ver()
 {
   swal("¿Qué son los Toppers?","Es una figura creada en base a papelería para perzonalizar la torta, los cuales se pueden adquirir por un precio adicional. Cake toppers hay de muchos tipos, materiales y texturas.");
 }

