var email = document.getElementById('input-email')
var senha = document.getElementById('input-senha')




function Validar(){
    if (email.value.length == 0 || senha.value.length == 0) {
        alert('Vefirique os dados e Insira Novamente')
    } 
}