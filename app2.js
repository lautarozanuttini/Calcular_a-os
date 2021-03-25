function calcularTodo() {
    var fecha = new Date();
    var año = fecha.getFullYear();
    var dia = fecha.getDate();
    var mes = fecha.getMonth();

    var añoIngresado = parseInt(document.getElementById("añoIngresado").value);
    var diaIngresado = parseInt(document.getElementById("diaIngresado").value);
    var mesIngresado = parseInt(document.getElementById("mesIngresado").value);

    var fechaUsuario = new Date(`${mesIngresado} ${diaIngresado}, ${añoIngresado} 00:00:00`);

    var añoUsuario = fechaUsuario.getFullYear();
    var diaUsuario = fechaUsuario.getDate();
    var mesUsuario = fechaUsuario.getMonth();

    function calcularDias() {
        if (dia < diaUsuario) {
            var resta = diaUsuario - dia;
            res1 = diaUsuario + resta;
            return res1
        } else {
            res2 = dia - diaUsuario
            return res2
        }
    }
    var mesesXDias = (mes + 1) + 12 - (mesUsuario + 1);

    function calcularMes() {
        if (mesesXDias > 12) {
            var resMes1 = (mesesXDias - 12) - 1;
            return resMes1;
        } else {
            var resMes2 = mesesXDias;
            return resMes2;
        }
    }


    var calcularDiasTotales = ((365 * ((año - añoUsuario) - 1)) + (mesesXDias * (365 / 12)) + calcularDias() + (((año - añoUsuario) - 1) / 4));
    var mesesTotales = (calcularDiasTotales / 12);
    var horasTotales = (calcularDiasTotales * 24);
    var añosTotales = (año - añoUsuario) - 1;

    var respuestaFinal = document.getElementById("respuestaFinal");
    respuestaFinal.innerHTML = `Tu edad es: ${añosTotales} años, ${calcularMes()} meses y ${calcularDias()} días.<br>
    Lo que equivale a ${mesesTotales} meses vividos, ${calcularDiasTotales} días vividos y ${horasTotales} horas vividas.`;



    console.log(calcularDias())
    console.log(calcularMes())
    console.log(mesesTotales)
    console.log(calcularDiasTotales)
    console.log(horasTotales)


}
/*console.log((año - añoLauti) - 1)
console.log((mes + 1) + 12 - (mesLauti + 1))
console.log(dia - diaLauti)
console.log(fecha)*/