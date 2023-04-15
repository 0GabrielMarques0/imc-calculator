document.body.style.display = "flex";
document.body.style.justifyContent = "center";

const header = document.createElement("div");
document.body.appendChild(header);
header.style.backgroundColor = 'blue';
header.style.width = "100%";
header.style.height = "50%";
header.style.padding = "2% 2%"
header.style.border = "3px solid black";
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

const inputPeso = document.createElement("input");
inputPeso.placeholder = "Digite seu peso";
inputPeso.id = "peso";
header.appendChild(inputPeso);

const inputAltura = document.createElement("input");
inputAltura.placeholder = "Digite sua altura";
inputAltura.id = "altura";
header.appendChild(inputAltura);

const inputIdade = document.createElement("input");
inputIdade.placeholder = "Digite sua idade";
inputIdade.id = "idade";
header.appendChild(inputIdade);

inputName.style.width = "50%";
inputName.style.margin = ".5% 1%";
inputName.style.padding = "1% 1%";
inputName.style.border = "2px solid black"
inputName.style.borderRadius = "5px"
inputName.style.transition = "0.8s"
inputName.style.fontFamily = "'Chakra Petch', sans-serif";
inputName.addEventListener("mouseenter", function (){
    inputName.style.backgroundColor = "black"
    inputName.style.color = "white"
})
inputName.addEventListener("mouseleave", function (){
    inputName.style.backgroundColor = "white"
    inputName.style.color = "black"
})

inputPeso.style.width = "50%";
inputPeso.style.margin = ".5% 1%";
inputPeso.style.padding = "1% 1%";
inputPeso.style.border = "2px solid black"
inputPeso.style.borderRadius = "5px"
inputPeso.style.transition = "0.8s"
inputPeso.style.fontFamily = "'Chakra Petch', sans-serif";
inputPeso.addEventListener("mouseenter", function (){
    inputPeso.style.backgroundColor = "black"
    inputPeso.style.color = "white"
})
inputPeso.addEventListener("mouseleave", function (){
    inputPeso.style.backgroundColor = "white"
    inputPeso.style.color = "black"
})

inputAltura.style.width = "50%";
inputAltura.style.margin = ".5% 1%";
inputAltura.style.padding = "1% 1%";
inputAltura.style.border = "2px solid black"
inputAltura.style.borderRadius = "5px"
inputAltura.style.transition = "0.8s"
inputAltura.style.fontFamily = "'Chakra Petch', sans-serif";
inputAltura.addEventListener("mouseenter", function (){
    inputAltura.style.backgroundColor = "black"
    inputAltura.style.color = "white"
})
inputAltura.addEventListener("mouseleave", function (){
    inputAltura.style.backgroundColor = "white"
    inputAltura.style.color = "black"
})

inputIdade.style.width = "50%";
inputIdade.style.margin = ".5% 1%";
inputIdade.style.padding = "1% 1%";
inputIdade.style.border = "2px solid black"
inputIdade.style.borderRadius = "5px"
inputIdade.style.transition = "0.8s"
inputIdade.style.fontFamily = "'Chakra Petch', sans-serif";
inputIdade.addEventListener("mouseenter", function (){
    inputIdade.style.backgroundColor = "black"
    inputIdade.style.color = "white"
})
inputIdade.addEventListener("mouseleave", function (){
    inputIdade.style.backgroundColor = "white"
    inputIdade.style.color = "black"
})

const calcularbtn = document.createElement("button");
calcularbtn.textContent = "Calcular IMC";
header.appendChild(calcularbtn);

calcularbtn.style.backgroundColor = "black";
calcularbtn.style.width = "35%";
calcularbtn.style.margin = "3% 1% 0 1%";
calcularbtn.style.padding = "1% 1%";
calcularbtn.style.border = "1px solid white";
calcularbtn.style.borderRadius = "5px";
calcularbtn.style.fontFamily = "'Chakra Petch', sans-serif";
calcularbtn.style.color = "white";
calcularbtn.style.transition = "1s"



calcularbtn.addEventListener("mouseenter", function (){
    calcularbtn.style.backgroundColor = "#333333"
})
calcularbtn.addEventListener("mouseleave", function (){
    calcularbtn.style.backgroundColor = "black"
})

calcularbtn.addEventListener("click", function() {
    const no = document.getElementById("nome").value;
    const p = document.getElementById("peso").value;
    const al = document.getElementById("altura").value;
    const idade = document.getElementById("idade").value;
    const imc = (p/(al*al)).toFixed(2);

    const saida = document.createElement("div");
    header.appendChild(saida)
    saida.style.display = "flex"
    saida.style.justifyContent = "center"
    saida.style.fontFamily = "'Chakra Petch', sans-serif";
    saida.style.width = "70%";
    saida.style.margin = ".5% 1%";
    saida.style.padding = "1% 1%";
    saida.style.backgroundColor = "white";
    saida.style.border = "2px solid black"
    saida.style.borderRadius = "4px"
    
    saida.textContent = `Olá ${no}, ${idade} anos, seu IMC: ${imc}`
    
})