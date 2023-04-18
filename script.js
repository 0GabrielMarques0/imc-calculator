document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";
document.body.style.padding = "0 2%";
document.body.style.backgroundColor = '#221D23';

const header = document.createElement("div");
document.body.appendChild(header);

header.style.backgroundColor = '#5762D5';
header.style.width = "100%";
header.style.height = "100%";
header.style.padding = "2% 2%"
header.style.border = "2px solid #fff";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.flexDirection = "column";

const h1 = document.createElement("h1");
h1.textContent = "IMCalculator";
header.appendChild(h1);
h1.style.fontFamily = "'Chakra Petch', sans-serif";
h1.style.fontSize = "300%";
h1.style.color = "#141301";

const inputName = document.createElement("input");
inputName.placeholder = "Digite seu nome";
inputName.id = "nome";
header.appendChild(inputName);
inputName.style.width = "50%";
inputName.style.margin = ".5% 1%";
inputName.style.padding = "1% 1%";
inputName.style.border = "2px solid #141301";
inputName.style.borderRadius = "5px";
inputName.style.outline = "none";
inputName.style.transition = "0.8s";
inputName.style.fontFamily = "'Chakra Petch', sans-serif";
inputName.addEventListener("mouseenter", function (){
    inputName.style.backgroundColor = "#141301";
    inputName.style.color = "#fff";
    inputName.style.border = "2px solid #fff";
});
inputName.addEventListener("mouseleave", function (){
    inputName.style.backgroundColor = "#fff";
    inputName.style.color = "#141301";
    inputName.style.border = "2px solid #141301";
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
inputPeso.style.border = "2px solid #141301";
inputPeso.style.borderRadius = "5px";
inputPeso.style.outline = "none";
inputPeso.style.transition = "0.8s";
inputPeso.style.fontFamily = "'Chakra Petch', sans-serif";
inputPeso.addEventListener("mouseenter", function (){
    inputPeso.style.backgroundColor = "#141301";
    inputPeso.style.color = "#fff";
    inputPeso.style.border = "2px solid #fff";
});
inputPeso.addEventListener("mouseleave", function (){
    inputPeso.style.backgroundColor = "#fff";
    inputPeso.style.color = "#141301";
    inputPeso.style.border = "2px solid #141301";
});

const inputAltura = document.createElement("input");
inputAltura.placeholder = "Digite sua altura";
inputAltura.id = "altura";
entrada.appendChild(inputAltura);
inputAltura.style.width = "25%";
inputAltura.style.margin = ".5% 1%";
inputAltura.style.padding = "1.5% 1%";
inputAltura.style.border = "2px solid #141301";
inputAltura.style.borderRadius = "5px";
inputAltura.style.outline = "none";
inputAltura.style.transition = "0.8s";
inputAltura.style.fontFamily = "'Chakra Petch', sans-serif";
inputAltura.addEventListener("mouseenter", function (){
    inputAltura.style.backgroundColor = "#141301";
    inputAltura.style.color = "#fff";
    inputAltura.style.border = "2px solid #141301";
});
inputAltura.addEventListener("mouseleave", function (){
    inputAltura.style.backgroundColor = "#fff";
    inputAltura.style.color = "#141301";
    inputAltura.style.border = "2px solid #141301";
});

const inputIdade = document.createElement("input");
inputIdade.placeholder = "Digite sua idade";
inputIdade.id = "idade";
entrada.appendChild(inputIdade);
inputIdade.style.width = "25%";
inputIdade.style.margin = ".5% 1%";
inputIdade.style.padding = "1.5% 1%";
inputIdade.style.border = "2px solid #141301";
inputIdade.style.borderRadius = "5px";
inputIdade.style.outline = "none";
inputIdade.style.transition = "0.8s";
inputIdade.style.fontFamily = "'Chakra Petch', sans-serif";
inputIdade.addEventListener("mouseenter", function (){
    inputIdade.style.backgroundColor = "#141301";
    inputIdade.style.color = "#fff";
    inputIdade.style.border = "2px solid #fff";
});
inputIdade.addEventListener("mouseleave", function (){
    inputIdade.style.backgroundColor = "#fff";
    inputIdade.style.color = "#141301";
    inputIdade.style.border = "2px solid #141301";
});

const calcularbtn = document.createElement("button");
calcularbtn.textContent = "Calcular IMC";
header.appendChild(calcularbtn);
calcularbtn.style.backgroundColor = "#000";
calcularbtn.style.width = "35%";
calcularbtn.style.margin = "2% 1% 1% 1%";
calcularbtn.style.padding = "1% 1%";
calcularbtn.style.border = "1px solid #fff";
calcularbtn.style.borderRadius = "5px";
inputAltura.style.outline = "none";
calcularbtn.style.fontFamily = "'Chakra Petch', sans-serif";
calcularbtn.style.color = "#fff";
calcularbtn.style.transition = ".3s";

calcularbtn.addEventListener("mouseenter", function (){
    calcularbtn.style.backgroundColor = "#141301";
    calcularbtn.style.transform = "scale(1.05)"
});
calcularbtn.addEventListener("mouseleave", function (){
    calcularbtn.style.backgroundColor = "#000";
    calcularbtn.style.transform = "scale(1)"
});

calcularbtn.addEventListener("click", function() {
    const no = document.getElementById("nome").value;
    const p = document.getElementById("peso").value;
    const al = document.getElementById("altura").value;
    const idade = document.getElementById("idade").value;
    const imc = (p/(al*al)).toFixed(1);

    if (!no && !p && !al && !idade) {
        return
    } 

    const saida = document.createElement("div");
    header.appendChild(saida);
    saida.style.display = "flex";
    saida.style.justifyContent = "center";
    saida.style.fontFamily = "'Chakra Petch', sans-serif";
    saida.style.width = "70%";
    saida.style.margin = ".5% 1%";
    saida.style.fontw
    saida.style.padding = "1% 1%";
    saida.style.border = "2px solid #141301";
    saida.style.borderRadius = "4px";
    
    if (imc < 18.5){
        saida.style.backgroundColor = "#0EAD69";
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você está abaixo do peso ideal!`;
    } else if (imc >= 18.5 && imc < 24.9){
        saida.style.backgroundColor = "#98CE00";
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você está no peso ideal!`;
    } else if (imc >= 24.9 && imc < 29.9){
        saida.style.backgroundColor = "#FF9914";
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você está acima do peso ideal!`;
    } else {
        saida.style.backgroundColor = "#ED6A5A";
        saida.textContent = `Olá ${no}! Você tem ${idade} anos e seu IMC é: ${imc}, você está muito acima do peso ideal!`;
    }

    document.getElementById("nome").value = ("");
    document.getElementById("peso").value = ("");
    document.getElementById("altura").value = ("");
    document.getElementById("idade").value = ("");
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
pesobaixo.style.backgroundColor = "#0EAD69";
pesobaixo.style.width = "15%";
pesobaixo.style.margin = "1% .5%";
pesobaixo.style.padding = ".5% .2%";
pesobaixo.style.border = "2px solid #141301";
pesobaixo.style.borderRadius = "5px";
pesobaixo.style.textAlign = "center";

const pesoNormal = document.createElement("div");
legenda.appendChild(pesoNormal);
pesoNormal.textContent = "Peso Normal";
pesoNormal.style.backgroundColor = "#98CE00";
pesoNormal.style.width = "15%";
pesoNormal.style.margin = ".5% .5%";
pesoNormal.style.padding = ".5% .2%";
pesoNormal.style.border = "2px solid #141301";
pesoNormal.style.borderRadius = "5px";
pesoNormal.style.textAlign = "center";

const sobrePeso = document.createElement("div");
legenda.appendChild(sobrePeso);
sobrePeso.textContent = "Sobrepeso";
sobrePeso.style.backgroundColor = "#FF9914";
sobrePeso.style.width = "15%";
sobrePeso.style.margin = ".5% .5%";
sobrePeso.style.padding = ".5% .2%";
sobrePeso.style.border = "2px solid #141301";
sobrePeso.style.borderRadius = "5px";
sobrePeso.style.textAlign = "center";

const obesidade = document.createElement("div");
legenda.appendChild(obesidade);
obesidade.textContent = "Obesidade";
obesidade.style.backgroundColor = "#ED6A5A";
obesidade.style.width = "15%";
obesidade.style.margin = ".5% .5%";
obesidade.style.border = "2px solid #141301";
obesidade.style.padding = ".5% .2%";
obesidade.style.borderRadius = "5px";
obesidade.style.textAlign = "center";