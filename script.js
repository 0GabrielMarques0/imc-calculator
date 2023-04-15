document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";
document.body.style.padding = "0 2%";
document.body.style.backgroundColor = 'black';


const header = document.createElement("div");
document.body.appendChild(header);

header.style.backgroundColor = 'blue';
header.style.width = "100%";
header.style.height = "100%";
header.style.padding = "2% 2%"
header.style.border = "2px solid white";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.flexDirection = "column";

const h1 = document.createElement("h1");
h1.textContent = "IMCalculator";
header.appendChild(h1);
h1.style.fontFamily = "'Chakra Petch', sans-serif";
h1.style.fontSize = "300%";
h1.style.color = "white";

const inputName = document.createElement("input");
inputName.placeholder = "Digite seu nome";
inputName.id = "nome";
header.appendChild(inputName);
inputName.style.width = "50%";
inputName.style.margin = ".5% 1%";
inputName.style.padding = "1% 1%";
inputName.style.border = "2px solid black";
inputName.style.borderRadius = "5px";
inputName.style.transition = "0.8s";
inputName.style.fontFamily = "'Chakra Petch', sans-serif";
inputName.addEventListener("mouseenter", function (){
    inputName.style.backgroundColor = "black";
    inputName.style.color = "white";
});
inputName.addEventListener("mouseleave", function (){
    inputName.style.backgroundColor = "white";
    inputName.style.color = "black";
});

const entrada = document.createElement("div");
header.appendChild(entrada);
entrada.style.width = "50%";
entrada.style.display = "flex";
entrada.style.justifyContent = "space-between";

const inputPeso = document.createElement("input");
inputPeso.placeholder = "Digite seu peso";
inputPeso.id = "peso";
entrada.appendChild(inputPeso);
inputPeso.style.width = "25%";
inputPeso.style.margin = ".5% 1%";
inputPeso.style.padding = "1.5% 1%";
inputPeso.style.border = "2px solid black";
inputPeso.style.borderRadius = "5px";
inputPeso.style.transition = "0.8s";
inputPeso.style.fontFamily = "'Chakra Petch', sans-serif";
inputPeso.addEventListener("mouseenter", function (){
    inputPeso.style.backgroundColor = "black";
    inputPeso.style.color = "white";
});
inputPeso.addEventListener("mouseleave", function (){
    inputPeso.style.backgroundColor = "white";
    inputPeso.style.color = "black";
});

const inputAltura = document.createElement("input");
inputAltura.placeholder = "Digite sua altura";
inputAltura.id = "altura";
entrada.appendChild(inputAltura);
inputAltura.style.width = "25%";
inputAltura.style.margin = ".5% 1%";
inputAltura.style.padding = "1.5% 1%";
inputAltura.style.border = "2px solid black";
inputAltura.style.borderRadius = "5px";
inputAltura.style.transition = "0.8s";
inputAltura.style.fontFamily = "'Chakra Petch', sans-serif";
inputAltura.addEventListener("mouseenter", function (){
    inputAltura.style.backgroundColor = "black";
    inputAltura.style.color = "white";
});
inputAltura.addEventListener("mouseleave", function (){
    inputAltura.style.backgroundColor = "white";
    inputAltura.style.color = "black";
});

const inputIdade = document.createElement("input");
inputIdade.placeholder = "Digite sua idade";
inputIdade.id = "idade";
entrada.appendChild(inputIdade);
inputIdade.style.width = "25%";
inputIdade.style.margin = ".5% 1%";
inputIdade.style.padding = "1.5% 1%";
inputIdade.style.border = "2px solid black";
inputIdade.style.borderRadius = "5px";
inputIdade.style.transition = "0.8s";
inputIdade.style.fontFamily = "'Chakra Petch', sans-serif";
inputIdade.addEventListener("mouseenter", function (){
    inputIdade.style.backgroundColor = "black";
    inputIdade.style.color = "white";
});
inputIdade.addEventListener("mouseleave", function (){
    inputIdade.style.backgroundColor = "white";
    inputIdade.style.color = "black";
});

const calcularbtn = document.createElement("button");
calcularbtn.textContent = "Calcular IMC";
header.appendChild(calcularbtn);

calcularbtn.style.backgroundColor = "black";
calcularbtn.style.width = "35%";
calcularbtn.style.margin = "2% 1% 0 1%";
calcularbtn.style.padding = "1% 1%";
calcularbtn.style.border = "1px solid white";
calcularbtn.style.borderRadius = "5px";
calcularbtn.style.fontFamily = "'Chakra Petch', sans-serif";
calcularbtn.style.color = "white";
calcularbtn.style.transition = "1s";

calcularbtn.addEventListener("mouseenter", function (){
    calcularbtn.style.backgroundColor = "#333333";
});
calcularbtn.addEventListener("mouseleave", function (){
    calcularbtn.style.backgroundColor = "black";
});

calcularbtn.addEventListener("click", function() {
    const no = document.getElementById("nome").value;
    const p = document.getElementById("peso").value;
    const al = document.getElementById("altura").value;
    const idade = document.getElementById("idade").value;
    const imc = (p/(al*al)).toFixed(1);

    const saida = document.createElement("div");
    header.appendChild(saida);
    saida.style.display = "flex";
    saida.style.justifyContent = "center";
    saida.style.fontFamily = "'Chakra Petch', sans-serif";
    saida.style.width = "70%";
    saida.style.margin = ".5% 1%";
    saida.style.padding = "1% 1%";
    saida.style.border = "2px solid black";
    saida.style.borderRadius = "4px";
    
    if (imc < 18.5){
        saida.style.backgroundColor = "green";
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você está abaixo do peso ideal!`;
    } else if (imc >= 18.5 && imc < 24.9){
        saida.style.backgroundColor = "greenyellow";
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você está no peso ideal!`;
    } else if (imc >= 24.9 && imc < 29.9){
        saida.style.backgroundColor = "orange";
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você está acima do peso ideal!`;
    } else {
        saida.style.backgroundColor = "orangered";
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você está muito acima do peso ideal!`;
    }
})

const legenda = document.createElement("footer");
header.appendChild(legenda);
legenda.style.width = "100%";
legenda.style.display = "flex";
legenda.style.justifyContent = "space-around";
legenda.style.alignItems = "center";
legenda.style.fontFamily = "'Chakra Petch', sans-serif";

const pesobaixo = document.createElement("div");
legenda.appendChild(pesobaixo);
pesobaixo.textContent = "Abaixo do peso";
pesobaixo.style.backgroundColor = "green";
pesobaixo.style.width = "15%";
pesobaixo.style.margin = "1% .5%";
pesobaixo.style.padding = ".5% .2%";
pesobaixo.style.border = "2px solid black";
pesobaixo.style.borderRadius = "5px";
pesobaixo.style.textAlign = "center";

const pesoNormal = document.createElement("div");
legenda.appendChild(pesoNormal);
pesoNormal.textContent = "Peso Normal";
pesoNormal.style.backgroundColor = "greenyellow";
pesoNormal.style.width = "15%";
pesoNormal.style.margin = ".5% .5%";
pesoNormal.style.padding = ".5% .2%";
pesoNormal.style.border = "2px solid black";
pesoNormal.style.borderRadius = "5px";
pesoNormal.style.textAlign = "center";

const sobrePeso = document.createElement("div");
legenda.appendChild(sobrePeso);
sobrePeso.textContent = "Sobrepeso";
sobrePeso.style.backgroundColor = "orange";
sobrePeso.style.width = "15%";
sobrePeso.style.margin = ".5% .5%";
sobrePeso.style.padding = ".5% .2%";
sobrePeso.style.border = "2px solid black";
sobrePeso.style.borderRadius = "5px";
sobrePeso.style.textAlign = "center";

const obesidade = document.createElement("div");
legenda.appendChild(obesidade);
obesidade.textContent = "Obesidade";
obesidade.style.backgroundColor = "orangered";
obesidade.style.width = "15%";
obesidade.style.margin = ".5% .5%";
obesidade.style.border = "2px solid black";
obesidade.style.padding = ".5% .2%";
obesidade.style.borderRadius = "5px";
obesidade.style.textAlign = "center";