const key = 'cbda35fd75218f99af0ca00056f45193'

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json()); 

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector('#input-city').value;
    
    buscarCidade(cidade);

}

function colocarDadosNaTela(dados) {
    console.log(dados);
    document.querySelector("#city").innerHTML = "Tempo em " + dados.name;
    document.querySelector("#temp").innerHTML =  Math.floor(dados.main.temp) + "°C";
    document.querySelector("#temp-texto").innerHTML = dados.weather[0].description;
    document.querySelector("#umidade") .innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector("#img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
} 

// Projeto desenvolvido em vídeo aula
