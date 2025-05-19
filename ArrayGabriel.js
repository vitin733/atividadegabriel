
function  adicionarFinal(){
    let arrayNomefinal = [];
    arrayNomefinal.push("João");
    console.log(arrayNomefinal);
    arrayNomefinal.push("Carlos");
    console.log(arrayNomefinal);
}
adicionarFinal();

function adicionarInicio(){
    let arrayAddComeco = [];
    arrayAddComeco.unshift(1);
    arrayAddComeco.unshift(2);
    console.log(arrayAddComeco);
}
adicionarInicio();

function removerUltimo(){
    let arrayDeleteteUltimo = [];
    arrayDeleteteUltimo.push("pao");
    arrayDeleteteUltimo.push(1);
    arrayDeleteteUltimo.pop();
    console.log(arrayDeleteteUltimo);
}
removerUltimo();

function removerPrimeiro(){
    let arrayDeletetePrimeiro = [];
    arrayDeletetePrimeiro.push(1);
    arrayDeletetePrimeiro.push("chocolate");
    arrayDeletetePrimeiro.shift();
    console.log(arrayDeletetePrimeiro)
}
removerPrimeiro();

function modificarArray(){
    let modificanoArray = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,10];
    modificanoArray.splice(2 , 2 , 5 , 6)
    console.log(modificanoArray);
}
modificarArray();

function printarMatriz(){
    let arrayMatrizX = [
        
        [ 1 , 2 , 3],
        [ 4 , 5 , 6],
        [7 , 8 , 9]
        
    ];
    for(let i = 0 ;  i < arrayMatrizX.length ;  i++){
        let teste = " "
                                                                                                            // teste     let soma = " "
        for(let j = 0 ; j < arrayMatrizX[i].length ; j++){
            teste += (arrayMatrizX[i][j]) + " "
                                                                                                            // teste      soma += (arrayMatrizX[i] + arrayMatrizX[j]) + ""
        }
        console.log(teste)
                                                                                                            //teste      console.log(soma)
    }
                                                                                                            //  console.log(arrayMatrizX);
}
printarMatriz();

function consultarTemperatura(){
    let previsaoDoTempo = [
        [" dia 1" , "dia 2" ],
        [ "2h" , " 3h" ],
        [ " 37°" , "42°"]
    ]
for( let i = 0 ; i < previsaoDoTempo.length ; i++){
    console.log(previsaoDoTempo[i][0]);

}
}
consultarTemperatura();
