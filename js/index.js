window.addEventListener('load', cargarPagina)

function cargarPagina() {
    const textMayus = document.querySelectorAll('input[type="text"]');
    textMayus.forEach(function(input) {
        input.addEventListener('blur', function() {
            salCampoTexto(input);
        })
    });
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    password2.addEventListener('blur', function() {
        salPassword2(password, password2);
    });
    const validar = document.getElementById('enviar')
    validar.addEventListener('click', function() {
        validaFormulario(textMayus, password, password2)
    });
}

    function salCampoTexto(input) {
        input.value = input.value.toUpperCase();
    }

    function salPassword2(password, password2) {
        if(password.value !== password2.value || password.value.length < 8 || password2.value.length < 8) {
            console.log("Las contraseñas deben coincidir y tener al menos 8 digitos")
        }
    }

    function validaFormulario(textMayus, password, password2) {
        salPassword2(password, password2);
        console.log(textMayus.value);
    }