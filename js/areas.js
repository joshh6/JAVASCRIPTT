let figura = prompt("Escribe un número para seleccionar un poligono:    1. TRIÁNGULO,   2. PARALELOGRAMO,  3. RECTÁNGULO,    4. CUADRADO,    5. ROMBO,   6. COMETA,    7. TRAPECIO,   8. CÍRCULO")

let base
let altura
let radio

switch (figura) {
    //TRIANGULO
    case "1":
        base = prompt("¿Cuanto tienes de base?")
        altura = prompt("¿Cuanto tienes de altura?")
        document.write(`<div style="background-color: #d6d6d6; width: 630px; padding: 1.5%; border-radius: 10px;">
                            <img style="width: 48%; height: 120px; border-radius: 5px;" src="./img/triangulo.jpg">
                            <div style="float: right; margin-right: 2%; width: 40%; height: 110px; background-color: white; padding: 1%; border-radius: 5px; text-align: center;">
                                <h3>El área es:</h3>
                                <div style="height: 40px; text-align: center;">
                                    <p style="border-bottom: 1px solid gray; font-size: 120%; margin: 0% 5%">
                                        ${base*altura/2}
                                    </p>
                                </div>
                            </div>
                        </div>`)
        break;




    //PARALELOGRAMO
    case "2":
        base = prompt("¿Cuanto tienes de base?")
        altura = prompt("¿Cuanto tienes de altura?")
        document.write(`<div style="background-color: #d6d6d6; width: 630px; padding: 1.5%; border-radius: 10px;">
                            <img style="width: 50%; height: 120px; border-radius: 5px;" src="./img/paralelogramo.jpg">
                            <div style="float: right; margin-right: 2%; width: 40%; height: 110px; background-color: white; padding: 1%; border-radius: 5px; text-align: center;">
                                <h3>El área es:</h3>
                                <div style="height: 40px; text-align: center;">
                                    <p style="border-bottom: 1px solid gray; font-size: 120%; margin: 0% 5%">
                                        ${base*altura}
                                    </p>
                                </div>
                            </div>
                        </div>`)
        break;




    //RECTANGULO
    case "3":
        base = prompt("¿Cuanto tienes de base?")
        altura = prompt("¿Cuanto tienes de altura?")
        document.write(`<div style="background-color: #d6d6d6; width: 630px; padding: 1.5%; border-radius: 10px;">
                            <img style="width: 50%; height: 120px; border-radius: 5px;" src="./img/rectangulo.jpg">
                            <div style="float: right; margin-right: 2%; width: 40%; height: 110px; background-color: white; padding: 1%; border-radius: 5px; text-align: center;">
                                <h3>El área es:</h3>
                                <div style="height: 40px; text-align: center;">
                                    <p style="border-bottom: 1px solid gray; font-size: 120%; margin: 0% 5%">
                                        ${base*altura}
                                    </p>
                                </div>
                            </div>
                        </div>`)
        break;




    //CUADRADO
    case "4":
        lado= prompt("¿Cuanto tienes de lado?")
        document.write(`<div style="background-color: #d6d6d6; width: 630px; padding: 1.5%; border-radius: 10px;">
                            <img style="width: 50%; height: 120px; border-radius: 5px;" src="./img/cuadrado.jpg">
                            <div style="float: right; margin-right: 2%; width: 40%; height: 110px; background-color: white; padding: 1%; border-radius: 5px; text-align: center;">
                                <h3>El área es:</h3>
                                <div style="height: 40px; text-align: center;">
                                    <p style="border-bottom: 1px solid gray; font-size: 120%; margin: 0% 5%">
                                        ${Math.pow(lado,2)}
                                    </p>
                                </div>
                            </div>
                        </div>`)
        break;




    //ROMBO
    case "5":
        dMayor = prompt("¿Cuanto tienes de diagonal mayor?")
        dmenor = prompt("¿Cuanto tienes de diagonal menor?")
        document.write(`<div style="background-color: #d6d6d6; width: 630px; padding: 1.5%; border-radius: 10px;">
                            <img style="width: 50%; height: 120px; border-radius: 5px;" src="./img/rombo.jpg">
                            <div style="float: right; margin-right: 2%; width: 40%; height: 110px; background-color: white; padding: 1%; border-radius: 5px; text-align: center;">
                                <h3>El área es:</h3>
                                <div style="height: 40px; text-align: center;">
                                    <p style="border-bottom: 1px solid gray; font-size: 120%; margin: 0% 5%">
                                        ${dmenor*dMayor/2}
                                    </p>
                                </div>
                            </div>
                        </div>`)
        break;




    //COMETA
    case "6":
        dMayor = prompt("¿Cuanto tienes de diagonal mayor?")
        dmenor = prompt("¿Cuanto tienes de diagonal menor?")
        document.write(`<div style="background-color: #d6d6d6; width: 630px; padding: 1.5%; border-radius: 10px;">
                            <img style="width: 50%; height: 120px; border-radius: 5px;" src="./img/cometa.jpg">
                            <div style="float: right; margin-right: 2%; width: 40%; height: 110px; background-color: white; padding: 1%; border-radius: 5px; text-align: center;">
                                <h3>El área es:</h3>
                                <div style="height: 40px; text-align: center;">
                                    <p style="border-bottom: 1px solid gray; font-size: 120%; margin: 0% 5%">
                                        ${dmenor*dMayor/2}
                                    </p>
                                </div>
                            </div>
                        </div>`)
        break;




    //TRAPECIO
    case "7":
        bMayor = prompt("¿Cuanto tienes de diagonal mayor?")
        bmenor = prompt("¿Cuanto tienes de diagonal menor?")
        altura = prompt("¿Cuanto tienes de altura?")
        document.write(`<div style="background-color: #d6d6d6; width: 630px; padding: 1.5%; border-radius: 10px;">
                            <img style="width: 50%; height: 120px; border-radius: 5px;" src="./img/trapecio.jpg">
                            <div style="float: right; margin-right: 2%; width: 40%; height: 110px; background-color: white; padding: 1%; border-radius: 5px; text-align: center;">
                                <h3>El área es:</h3>
                                <div style="height: 40px; text-align: center;">
                                    <p style="border-bottom: 1px solid gray; font-size: 120%; margin: 0% 5%">
                                        ${(bMayor+bmenor)*altura/2}
                                    </p>
                                </div>
                            </div>
                        </div>`)
        break;




    //CIRCULO
    case "8":
        radio = prompt("¿Cuanto tienes de radio?")
        document.write(`<div style="background-color: #d6d6d6; width: 630px; padding: 1.5%; border-radius: 10px;">
                            <img style="width: 50%; height: 120px; border-radius: 5px;" src="./img/circulo.jpg">
                            <div style="float: right; margin-right: 2%; width: 40%; height: 110px; background-color: white; padding: 1%; border-radius: 5px; text-align: center;">
                                <h3>El área es:</h3>
                                <div style="height: 40px; text-align: center;">
                                    <p style="border-bottom: 1px solid gray; font-size: 120%; margin: 0% 5%">
                                        ${Math.PI*Math.pow(radio,2)}
                                    </p>
                                </div>
                            </div>
                        </div>`)
        break;




    default:
        document.write(`<h1 style="color: red; text-align: center; margin: 7% !important">
                            Recarga la pagina para calcular !
                        </h1>`)
}