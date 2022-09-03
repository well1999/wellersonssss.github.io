function logar ( ) {

    var  login  =  documento . getElementById ( 'login' ) . valor ;
    var  senha  =  documento . getElementById ( 'senha' ) . valor ;

    if ( login  ==  "jsq-01001"  &&  senha  ==  "admin123" ) {
        alerta ( 'Sucesso' ) ;
        localização . href  =  "home.html" ;
    } else {
        alert ( 'Usuario ou senhas incorretas' ) ;
    }

}

function Login() {
    var done=0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsByName('senha')[0].value;
    seha=senha.toLowerCase();
    if (usuario=="admin" && senha=="admin") {
      window.location="/p/admin.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
  }
