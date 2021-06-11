const usuarioInput = document.getElementById("usuario-input");
const usuarioSugerencia = document.getElementById("usuario-sugerencia");

const rutInput = document.getElementById("rut-input");
const rutSugerencia = document.getElementById("rut-sugerencia");

const passwordInput = document.getElementById("password-input");
const passwordSugerencia = document.getElementById("password-sugerencia");

const emailInput = document.getElementById("email-input");
const emailSugerencia = document.getElementById("email-sugerencia");

const BtnEnviar = document.getElementById("btn-enviar");

const formEstado = {

  validarUsuario: false,
  validarRut: false,
  validarPassword: false,
  validarEmail: false,
  habilitarBtnEnviar: function() {
    if(this.validarUsuario && this.validarRut && this.validarPassword && this.validarEmail){
      BtnEnviar.disabled = false;
       } 
       else {
         BtnEnviar.disabled = true;
       }
      }
  };

formEstado.habilitarBtnEnviar();




function validacionInput(_formInput){

  let confirmacion;

  switch (_formInput) {

    case "nombreusuario":
      const regexUsuario= /^[a-z]{4,30}$/;
      confirmacion= regexUsuario.test(usuarioInput.value);

      if(confirmacion === false) {

        usuarioInput.style.borderColor = "red";
        usuarioSugerencia.style.color = "red";
        usuarioSugerencia.innerText = "El nombre usuario debe ser entre 4 y 30 caracteres de largo porfavor solo use minusculas";
        
      } else {

        usuarioInput.style.borderColor = "";
        usuarioSugerencia.innerText = "";
          }

          formEstado.validarUsuario= confirmacion;
          formEstado.habilitarBtnEnviar();
    break;
   
   case "rut" :

   //30.686.957-4
   
   function pruebaRut () {
    rutInput.value = rutInput.value.replace("‐","-");
    if(!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutInput.value))
    return false;
    var tmp 	= rutInput.value.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		return (dv(rut) == digv );
    }
     dv = function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	    }
    
   confirmacion= pruebaRut(rutInput.value);       

   if(confirmacion === false) {
      rutInput.style.borderColor = "red";
      rutSugerencia.style.color = "red";
      rutSugerencia.innerText = "El rut invalido";

      } else {

        rutInput.style.borderColor = "";
        rutSugerencia.innerText = "";
          }

          formEstado.validarRut= confirmacion;
          formEstado.habilitarBtnEnviar();
          break;

      case "password":
        if (passwordInput.value.length>=8 && passwordInput.value.length<=256) {
          const contieneMinuscula= /[a-z]/;
          const contieneMayuscula= /[A-Z]/;
          const contieneNumero=  /\d/;
          const contieneSimbolo= /\W/;
          
          confirmacion= contieneMinuscula.test(passwordInput.value) && contieneMayuscula.test(passwordInput.value) && contieneNumero.test(passwordInput.value) && contieneSimbolo.test(passwordInput.value);

                if (confirmacion === false) {
                  passwordInput.style.borderColor = "red";
                  passwordSugerencia.style.color= "red"
                  passwordSugerencia.innerText = "Su clave debe tener mayusculas, minusculas contener simbolos y numeros";

                } else {
                  passwordInput.style.borderColor = "";
                  passwordSugerencia.innerText= "";

                }

        } else {
        passwordInput.style.borderColor = "red";
        passwordSugerencia.style.color = "red";  
        passwordSugerencia.innerText = "Su clave debe ser de al menos 8 caracteres";
        }

      formEstado.validarPassword= confirmacion;
      formEstado.habilitarBtnEnviar();
      break;
            
      case "email" :
      
        emailInput.value = emailInput.value.toLowerCase()
        const cuentaNS = emailInput.value.split("@")[0];
        if (cuentaNS.length>=2 && cuentaNS.length <= 40) {
        
          const regexEmail = /(^[0-9a-z]+[-._+&])*[0-9a-z]+@([-0-9a-z]+[.])+[a-z]{2,4}$/i;
          
          confirmacion= regexEmail.test(emailInput.value);

          if (confirmacion === false) {

          emailInput.style.borderColor = "red";
          emailSugerencia.style.color= "red"
          emailSugerencia.innerText = "Su cuenta de Correo no es aceptada por nuestro sistema"
            
          } else {

            emailInput.style.borderColor = "";
            emailSugerencia.innerText= "";
            
          }
          
        } else {

          emailInput.style.borderColor = "red";
          emailSugerencia.style.color= "red"
          emailSugerencia.innerText = "Su cuenta de Correo no es aceptada por nuestro sistema"
          
        }

        formEstado.validarEmail= confirmacion;
        formEstado.habilitarBtnEnviar();
        break;


    default:
      break;
  }

}



usuarioInput.addEventListener("input", ()=> {

  validacionInput("nombreusuario");

});

rutInput.addEventListener("input", ()=> {

  validacionInput("rut");

});

passwordInput.addEventListener("input", ()=> {

  validacionInput("password");

});

emailInput.addEventListener("input", ()=> {

  validacionInput("email");

});


                                                                                                                                                                                                                                                         
                                                                                                                                                                 



