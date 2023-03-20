function cronometro() {
    // console.log("El evento si se ejecutó.");
    let hora = 0;
    let minuto = 0;
    let segundo = 0;

    while (minuto < 3) {
        if (segundo < 59) {
            segundo++;
        } else {
            segundo = 0;
            minuto++;

            if (minuto === 60) {
                minuto = 0;
                hora++;
            }
        }

        // Pausa de 1s
        let fecha1 = new Date();
        let fecha2 = new Date();

        // Esperar a que pase un segundo
        while (fecha2 - fecha1 < 1000) {
            fecha2 = new Date();
        }

        // Mostrar tiempo transcurrido en la consola
        console.log(hora + ":" + minuto + ":" + segundo);

        // Mostrar tiempo transcurrido en el elemento con id "elemento"
        // document.getElementById("elemento").value =  `${hora}:${minuto}:${segundo}`;
    }
}

cronometro();
window.addEventListener('load', function() {
    console.log("El evento 'load' se disparó correctamente.");
    cronometro();
  });