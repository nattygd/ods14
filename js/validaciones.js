/* METODOS VALIDADORES */
/* METODO RUT */
/*Agregar metodo rutValido para validar rut*/
$.validator.addMethod("rutValido", function(value) {
    value = value.replace(/\./g, '');   //Quitamos los puntos
    value = value.replace('-', '');     //Quitamos el guion
    
    var rutSinDV = value.slice(0, -1);  //asignamos el rut a rutSinDV eliminando el digito verificador
    var dvIngresado = value.slice(-1).toUpperCase();    //asignamos el digito verificador ingresado a la variable

    if (!/^[0-9]+$/g.test(rutSinDV)) {  //Verificamos que los valores ingresados sean solo digitos numericos
        return false;
    }

    var rutNumerico = parseInt(rutSinDV, 10);   //Se convierte a valor decimal
    var dvCalculado = calcularDigitoVerificador(rutNumerico);   //Se llama a la funcion calcularDigitoVerificador para verificar que sea el mismo ingresado por el usuario

    return dvIngresado === dvCalculado; //retorna true si el rut ingresado posee el rut verificador que corresponde
}, "El RUT ingresado no es válido.");

// Funcion que calcula el digito verificador de un rut ingresado
function calcularDigitoVerificador(rutNumerico) {
    var suma = 0;
    var multiplo = 2;

    while (rutNumerico > 0) {
        var digito = rutNumerico % 10;
        suma += digito * multiplo;
        rutNumerico = Math.floor(rutNumerico / 10);
        multiplo = multiplo === 7 ? 2 : multiplo + 1;
    }

    var resto = suma % 11;
    var dv = 11 - resto;

    if (dv === 11) {
        return '0';
    } else if (dv === 10) {
        return 'K';
    } else {
        return dv.toString();
    }
}
/* FIN METODO RUT */
/*------------------------------------------------------------------------ */
/* METODO REGION */
$.validator.addMethod("validarRegion", function(value) {
    return value != "";
}, "");
/* FIN METODO REGION */
/*------------------------------------------------------------------------ */

//funcion de jquery que verifica que los valores ingresados por el usuario sean validos
$(document).ready(function() {
    $("#form-login").on('submit', e => {    //  Verificacion del form-login (formulario de ingreso)
        e.preventDefault();
    }).validate({
            rules: {
                username: {
                    required: true,
                    minlength: 5
                },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            username: {
                required: "Ingrese un nombre de usuario.",
                minlength: "Su nombre de usuario es demasiado corto."
        },
            password: {
                required: "Ingrese su contraseña",
                minlength: "La contraseña ingresada no es valida."
        }
        },
        submitHandler: (form) => {
            const data = Object.fromEntries(new FormData(form));
            window.location.href = "home.html";
            console.log('Validado');
            console.log(data);
        }
    });
    $("#form-signup").on('submit', e => {   //  Verificacion del form-signup (formulario de registro)
        e.preventDefault();
    }).validate({
        ignore: ':hidden:not(select)',
        rules: {
            nombre: {
                required: true,
                minlength: 5
            },
            rut: {
                required: true,
                rutValido: true
            },
            email: {
                required: true,
                email: true
            },
            regiones: {
                required: true,
                validarRegion: true
            },
            password: {
                required: true,
                minlength: 8
            },
            password2: {
                required: true,
                minlength: 8,
                equalTo: "#password"
            },
            tyc: {
                required: true
            }
        },
        messages: {
            nombre: {
                required: "Debe ingresar un nombre de usuario",
                minlength: "El nombre debe tener al menos 5 caracteres"
            },
            rut: {
                required: "Debe ingresar un RUT",
                rutValido: "El RUT ingresado no es valido"
            },
            email: {
                required: "El email es requerido",
                email: "Debe ingresar un email válido"
            },
            regiones: {
                required: "Ingrese una región",
                validarRegion: "Ingrese una región"
            },
            password: {
                required: "La contraseña es requerida",
                minlength: "La contraseña debe tener al menos 8 caracteres"
            },
            password2: {
                required: "La contraseña es requerida",
                minlength: "La contraseña debe tener al menos 8 caracteres",
                equalTo: "Las contraseñas deben coincidir"
            },
            tyc: {
                required: ""
            }
        },
        submitHandler: (form) => {
            const data = Object.fromEntries(new FormData(form));
            window.location.href = "home.html";
            console.log('Validado');
            console.log(data);
        }
    });
});