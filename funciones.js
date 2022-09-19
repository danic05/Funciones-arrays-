//funcion 1
funcionArreglo1 = () =>{
    const series = ["TVD", "PLL", "Stranger Thinks", "The 100", "Dark"];
    series.pop();
    return series;
}

const seriesvistas= (callbackFunction) =>{
   const sv = callbackFunction();
   console.log(sv);
}

seriesvistas(funcionArreglo1);

//funcion 2

funcionArreglo2 = () =>{
    const Años = [10,2,5,6,12];
    Años.push(15);
    return Años;
}

const añitos = (callbackFunction) =>{
   const years = callbackFunction();
   console.log(years);
}

añitos(funcionArreglo2);

//funcion 3

funcionArreglo3 = () =>{
    const Perros = ["Doberman", "Pinseher", "Chihuahua", "Husky"];
    const Gatos=["Bengali","Asiatico","Chinchilla"];
    const Union=Perros.concat(Gatos);
    return Union;
}

const Max= (callbackFunction) =>{
   const mascotas = callbackFunction();
   console.log(mascotas);
}

Max(funcionArreglo3);




