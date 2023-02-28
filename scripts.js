const formCadastro = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const span = document.querySelectorAll(".span-required");
const telRegex = /^\(\d{2}\) 9\d{4}-\d{4}$/;4



//---------------------------------------------------------------------------------------------------------------------------
// TELA DE CADASTRO

//função para mostrar as validações após clicar no botão "avançar"
formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();
    validarNome();
    validarTelefone();
})

//função para apresentar o erro no campo
function mostrarErro(index){
    span[index].style.display = "block";
    campos[index].style.border = "2px solid #e63636";
    span[index].style.color = "#e63636";
}

//função para apresentar o erro no campo em outra cor (piscar)
function mostrarErroPisca(index){
    span[index].style.display = "block";    
    campos[index].style.border = "2px solid #f1e4d8";
    span[index].style.color = "white"
}

//função para remover o erro no campo
function removerErro(index){
    campos[index].style.border = "";
    span[index].style.display = "none";
}

//função para validar o campo de nome
function validarNome(){
    if(campos[0].value.length < 3) {        
        mostrarErro(0);         
    }else {        
        removerErro(0);  
    }
}

//função para validar e formatar o campo de número
function validarTelefone(){
    if(telRegex.test(campos[1].value)){
        removerErro(1);          
    }else {
        mostrarErro(1);           
    }

    const telefone = document.getElementById("telefone");
    const telefoneValor = telefone.value;

    let telefoneFormatado = telefoneValor.replace(/\D/g, '');
    telefoneFormatado = telefoneFormatado.replace(/^(\d{2})(\d)/g, '($1) $2');
    telefoneFormatado = telefoneFormatado.replace(/(\d{5})(\d)/, '$1-$2');
    telefone.value = telefoneFormatado;

}

function validarBotao(){     
    
    //Os dois campos vazios
    while (campos[0].value == '' && campos[1].value == '') {
        let segundos = 0;        
        let temporizador = setInterval(function() {
            if (segundos == 1) {
                mostrarErroPisca(0);  
                mostrarErroPisca(1);                 
            }
            else if(segundos == 2) {
                mostrarErro(0); 
                mostrarErro(1);

                clearInterval(temporizador);
            }
            segundos++;
            
            }, 400);

            break
    }

    //Os dois campos não validados
    while (campos[0].value.length < 3 && !telRegex.test(campos[1].value)) {        
        let segundos = 0;        
        let temporizador = setInterval(function() {
            if (segundos == 1) {
                mostrarErroPisca(0);  
                mostrarErroPisca(1);                 
            }
            else if(segundos == 2) {
                mostrarErro(0); 
                mostrarErro(1);

                clearInterval(temporizador);
            }
            segundos++;
            
            }, 400);

            break
    }
    //campo nome vazio e campo telefone não validado
    while (campos[0].value == '' && !telRegex.test(campos[1].value)) {
        let segundos = 0;        
        let temporizador = setInterval(function() {
            if (segundos == 1) {
                mostrarErroPisca(0); 
                mostrarErroPisca(1);                           
            }
            else if(segundos == 2) {
                mostrarErro(0); 
                mostrarErro(1);
                clearInterval(temporizador);
            }
            segundos++;
            
            }, 400);

            break
    }
    //campo nome não validado e campo telefone vazio
    while (campos[0].value.length < 3 && campos[1].value == '') {
        let segundos = 0;        
        let temporizador = setInterval(function() {
            if (segundos == 1) {
                mostrarErroPisca(0); 
                mostrarErroPisca(1);                           
            }
            else if(segundos == 2) {
                mostrarErro(0); 
                mostrarErro(1);
                clearInterval(temporizador);
            }
            segundos++;
            
            }, 400);

            break
    }
    //somente o campo nome não validado
    while (campos[0].value.length < 3) {
        let segundos = 0;        
        let temporizador = setInterval(function() {
            if (segundos == 1) {
                mostrarErroPisca(0);      
            }
            else if(segundos == 2) {
                mostrarErro(0); 
                clearInterval(temporizador);
            }
            segundos++;
            
            }, 400);

            break
    }
    //somente o campo telefone não validado
    while (!telRegex.test(campos[1].value)) {
        let segundos = 0;        
        let temporizador = setInterval(function() {
            if (segundos == 1) {
                mostrarErroPisca(1);      
            }
            else if(segundos == 2) {
                mostrarErro(1); 
                clearInterval(temporizador);
            }
            segundos++;
            
            }, 400);

            break
    }

    if (campos[0].value.length >= 3 && telRegex.test(campos[1].value)) {
        window.open("barbeiro.html" , "_self");
    }

}

//---------------------------------------------------------------------------------------------------------------------------

// ESCOLHA DOS BARBEIROS

const barbeiro = document.getElementsByClassName(".input-radio")

function escolherBarbeiro(valor) {
    if (valor === 'edson') {
        window.open("servicos.html", "_self")
    }
    else if (valor === 'edilson') {
        window.open("servicos.html", "_self")
    }
    else {
        window.open("servicos.html", "_self")
    }

}

//--------------------------------------------------------------------------------------------------------------

// ESCOLHA DO SERVIÇO

const servico = document.getElementsByClassName(".input-radio")

function escolherServico(servico) {
    
    if (servico === '18') {
        window.open("Data.html", "_self")
    }

    else if (servico === '20') {
        window.open("Data.html", "_self")
    }
    
    else if (servico === '25') {
        window.open("Data.html", "_self")
    }

    else if (servico === '24') {
        window.open("Data.html", "_self")
    }

    else if (servico === '28') {
        window.open("Data.html", "_self")
    }

    else if (servico === '12') {
        window.open("Data.html", "_self")
    }

    else if (servico === '10') {
        window.open("Data.html", "_self")
    }

    else if (servico === '8') {
        window.open("Data.html", "_self")
    }

    else if (servico === '15') {
        window.open("Data.html", "_self")
    }

}

//------------------------------------------------------------------------------------------------------------------

// ESCOLHA DA DATA

//validar o campo data
function dataAtual() {
    var dataAtual = new Date().toISOString().slice(0, 10);
    document.getElementById("date-input").setAttribute("min", dataAtual);
}

//validar botão
function validarBotaoConfirmar() {
    const dataInput = document.getElementById("date-input");
    const horarioSelect = document.getElementById("horario");    

    if (dataInput.value === '' || horarioSelect.value === '') {
        alert("verifique os campos e tente novamente.");
    } 
    else {  
        window.open("final.html", "_self");
    }
}

    






















