let formCliente = document.getElementById("cliente")
let formBarbeiro = document.getElementById("barbeiro")
let formServico = document.getElementById("servico")
let formData = document.getElementById("data")
let formFinal = document.getElementById("final")


//---------------------------------------------------------------------------------------------------------------------------
// TELA DE CADASTRO
const formCadastro = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const span = document.querySelectorAll(".span-required");
const telRegex = /^\(\d{2}\) 9\d{4}-\d{4}$/;4

//função para mostrar as validações após clicar no botão "avançar"
formCadastro.addEventListener("button", (event) => {
    event.preventDefault();
    alert("oii")
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
    if (campos[0].value == '' && campos[1].value == '') {
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
    }

    //Os dois campos não validados
    else if (campos[0].value.length < 3 && !telRegex.test(campos[1].value)) {        
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
    }
    //campo nome vazio e campo telefone não validado
    else if (campos[0].value == '' && !telRegex.test(campos[1].value)) {
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
    }
    //campo nome não validado e campo telefone vazio
    else if (campos[0].value.length < 3 && campos[1].value == '') {
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
    }
    //somente o campo nome não validado
    else if (campos[0].value.length < 3) {
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
    }
    //somente o campo telefone não validado
    else if (!telRegex.test(campos[1].value)) {
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
    }

    else if (campos[0].value.length >= 3 && telRegex.test(campos[1].value)) {
        formCliente.style.display = "none"
        formBarbeiro.style.display = "block"
        setTimeout(() => {
            formBarbeiro.classList.add("show");
        })
        
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

}

//---------------------------------------------------------------------------------------------------------------------------

// ESCOLHA DOS BARBEIROS

function escolherBarbeiro() { 
    let barbeiroInputs = document.querySelectorAll("input[name='opcao']");
    let barbeiroValue;
    let imagens = document.getElementsByClassName("imagem-barbeiro");
    let botao = document.getElementById("botao-barbeiro");

    for (let i = 0; i < barbeiroInputs.length; i++) {
        if (barbeiroInputs[i].checked) {
            barbeiroValue = barbeiroInputs[i].value;
            break;
        } 
    }

    for (let i = 0; i < imagens.length; i++) {
        if (barbeiroValue === "Edson Araújo") {
            imagens[0].style.border = "5px solid #ffbd59";
            imagens[1].style.border = "";
            imagens[2].style.border = "";            
            botao.style.display = "inline-block"  
            botao.classList.add("show");
        }
        else if (barbeiroValue === "Edilson Araújo") {
            imagens[1].style.border = "5px solid #ffbd59";
            imagens[0].style.border = "";
            imagens[2].style.border = "";
            botao.style.display = "inline-block"  
                botao.classList.add("show");
        }
        else if (barbeiroValue === "Bruno Luiz") {
            imagens[2].style.border = "5px solid #ffbd59";
            imagens[1].style.border = "";
            imagens[0].style.border = "";
            botao.style.display = "inline-block"  
            botao.classList.add("show");
        }        
    }
}

function avancarServico() {
    let barbeiroInputs = document.querySelectorAll("input[name='opcao']");
    let selecionado = false;
    

    for (let i = 0; i < barbeiroInputs.length; i++) {
        if (barbeiroInputs[i].checked) {
            selecionado = true;
            
            break;
        }
    }

    if (selecionado) {
        formBarbeiro.style.display = "none";
        formServico.style.display = "block";
        setTimeout(() => {
            formServico.classList.add("show");
        }, 100);
                    
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    } else {
        alert("selecione um dos profissionais antes de avançar.")
    }
}
function voltarCliente() {
    formBarbeiro.style.display = "none";
    formCliente.style.display = "block";    
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}
    


//--------------------------------------------------------------------------------------------------------------

// ESCOLHA DO SERVIÇO

const servico = document.getElementsByClassName(".input-radio")

function escolherServico(servico) {
    let servicoInputs = document.querySelectorAll("input[name='servico']");
    let servicoValue; 
    let botao = document.getElementById("botao-servico");
    let borda = document.getElementsByTagName("td");    
    for (let i = 0; i < servicoInputs.length; i++) {
        if (servicoInputs[i].checked) {
            servicoValue = servicoInputs[i].value;
            break;
        }
    }

    if (servico === '18') {  
        for (let i = 0; i < borda.length; i++) {
            if (i === 0 || i === 1) {
                borda[0].style.border = "2px solid #ffbd59"; 
                borda[1].style.border = "2px solid #ffbd59"; 
                botao.style.display = "inline-block"  
                botao.classList.add("show");
            } else {
                borda[i].style.border = "";
            }
            
        }    
    }
       
    else if (servico === '20') {
        for (let i = 0; i < borda.length; i++) {
            if (i === 2 || i === 3) {
                borda[2].style.border = "2px solid #ffbd59"; 
                borda[3].style.border = "2px solid #ffbd59";
                botao.style.display = "inline-block"  
                botao.classList.add("show");                 
            } else {
                borda[i].style.border = "";
            }
            
        }    
    }
    
    else if (servico === '25') {
        for (let i = 0; i < borda.length; i++) {
            if (i === 4 || i === 5) {
                borda[4].style.border = "2px solid #ffbd59"; 
                borda[5].style.border = "2px solid #ffbd59";
                botao.style.display = "inline-block"  
                botao.classList.add("show");                 
            } else {
                borda[i].style.border = "";
            }
            
        }    
    }

    else if (servico === '24') {
        for (let i = 0; i < borda.length; i++) {
            if (i === 6 || i === 7) {
                borda[6].style.border = "2px solid #ffbd59"; 
                borda[7].style.border = "2px solid #ffbd59";
                botao.style.display = "inline-block"  
                botao.classList.add("show");                 
            } else {
                borda[i].style.border = "";
            }
            
        }    
    }

    else if (servico === '28') {
        for (let i = 0; i < borda.length; i++) {
            if (i === 8 || i === 9) {
                borda[8].style.border = "2px solid #ffbd59"; 
                borda[9].style.border = "2px solid #ffbd59";
                botao.style.display = "inline-block"  
                botao.classList.add("show");                 
            } else {
                borda[i].style.border = "";
            }
            
        }    
    }

    else if (servico === '12') {
        for (let i = 0; i < borda.length; i++) {
            if (i === 10 || i === 11) {
                borda[10].style.border = "2px solid #ffbd59"; 
                borda[11].style.border = "2px solid #ffbd59"; 
                botao.style.display = "inline-block"  
                botao.classList.add("show");                
            } else {
                borda[i].style.border = "";
            }
            
        }    
    }

    else if (servico === '10') {
        for (let i = 0; i < borda.length; i++) {
            if (i === 12 || i === 13) {
                borda[12].style.border = "2px solid #ffbd59"; 
                borda[13].style.border = "2px solid #ffbd59"; 
                botao.style.display = "inline-block"  
                botao.classList.add("show");                
            } else {
                borda[i].style.border = "";
            }
            
        }    
    }

    else if (servico === '15') {
        for (let i = 0; i < borda.length; i++) {
            if (i === 14 || i === 15) {
                borda[14].style.border = "2px solid #ffbd59"; 
                borda[15].style.border = "2px solid #ffbd59";
                botao.style.display = "inline-block"  
                botao.classList.add("show");                 
            } else {
                borda[i].style.border = "";
            }
            
        }    
    }

    else if (servico === '8') {
        for (let i = 0; i < borda.length; i++) {
            if (i === 16 || i === 17) {
                borda[16].style.border = "2px solid #ffbd59"; 
                borda[17].style.border = "2px solid #ffbd59";                 
                botao.style.display = "inline-block"  
                botao.classList.add("show");
            } else {
                borda[i].style.border = "";
            }
            
        }    
    }

}

function avancarData() {    
    formServico.style.display = "none";
    formData.style.display = "block";
    setTimeout(() => {
        formData.classList.add("show");
    }, 100);
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

function voltarBarbeiro() {
    formBarbeiro.style.display = "block";
    formServico.style.display = "none";
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

//------------------------------------------------------------------------------------------------------------------

// ESCOLHA DA DATA
//validar o campo data

function dataMinMax() {
    let data = new Date();

    let dataMenosTresHoras = new Date(data);
    dataMenosTresHoras.setHours(data.getHours() - 3);    
    let dataAtualFormatada = dataMenosTresHoras.toISOString().slice(0, 10);    

    let dataMax = data;
    dataMax.setDate(dataMax.getDate() + 60);
    let dataMaxima = dataMax.toISOString().slice(0, 10);

    document.getElementById("date-input").setAttribute("min", dataAtualFormatada);
    document.getElementById("date-input").setAttribute("max", dataMaxima);

}
//validar dia de funcionamento
function diaDeFuncionamento() {
    let inputDia = document.getElementById("date-input");
    let selectHorario = document.getElementById("horario")
    let spanSelect = document.getElementById("span-select")
    let botao = document.getElementById("botao-confirmar")
    let diaSelecionado = new Date(inputDia.value);
    let diaDaSemana = diaSelecionado.getDay();

    if (diaDaSemana === 1 || diaDaSemana === 6){
        alert("Não trabalhamos as terças-feiras nem aos domingos.");
        selectHorario.style.display = "none";
        botao.style.display = "none"
        $(spanSelect).fadeIn(1000); 
    }
    else {
        spanSelect.style.display = "none";
        $(selectHorario).fadeTo(500, 1);
        $(botao).fadeIn(1000);
    }
}


//validar campo horario
function horarioDisponivel() {
    let resumo = document.getElementById("resumo")
    let inputDia = document.getElementById("date-input");
    let opcoes = document.getElementsByClassName("opcao");
    let select = document.getElementById("horario");
    let indiceSelecionado = select.selectedIndex;
    let opcaoSelecionada = select.options[indiceSelecionado];
    var hora = opcaoSelecionada.value.split(":")[0];
    var minuto = opcaoSelecionada.value.split(":")[1];
    let data = new Date();    
    let horaAtual = data.getHours();    
    let dataMenosTresHoras = new Date();
    dataMenosTresHoras.setHours(data.getHours() - 3);    
    let dataAtualFormatada = dataMenosTresHoras.toISOString().slice(0, 10); 

    if (inputDia.value === dataAtualFormatada) {
        for(let i = 0; i < opcoes.length; i++) {
            let opcao = opcoes[i];
           if (opcao.value <= horaAtual) {
                opcao.style.display = "none";  
                resumo.style.display = "none" ;             
            }
        }
    }
    else {
        for (let i = 0; i < opcoes.length; i++) {
            let opcao = opcoes[i];
            opcao.style.display = "";
            resumo.style.display = "none";
        }
    }
}


function mudancaHorario() {
    let botao = document.getElementById("botao-confirmar")   
    let resumo = document.getElementById("resumo") 
    $(botao).fadeTo(1000, 1);
    resumo.style.display = "none";

}

function validarFormulario() {   
    let hora = document.getElementById("horario").value
    let data = document.getElementById("date-input").value 
    let dataObj = new Date(data);      
    dataObj.setDate(dataObj.getDate() + 1);
    let dataFormatada = dataObj.toLocaleDateString('pt-BR');
    let barbeiroInputs = document.querySelectorAll("input[name='opcao']");
    let barbeiroValue;
    let servicoInputs = document.querySelectorAll("input[name='servico']");
    let servicoValue;        
    let botaoAvancar = document.getElementById("botao-confirmar")
    let botaoAgendar = document.getElementById("botao-formulario")
    let resumo = document.getElementById("resumo")
    let dataInput = document.getElementById("date-input");
    let horarioSelect = document.getElementById("horario");

    if (dataInput.value === '' || horarioSelect.value === '0') {
        alert("verifique os campos e tente novamente.");
        
    } else {
        for (let i = 0; i < barbeiroInputs.length; i++) {
            if (barbeiroInputs[i].checked) {
                barbeiroValue = barbeiroInputs[i].value;
                break;
            }
        }

        for (let i = 0; i < servicoInputs.length; i++) {
            if (servicoInputs[i].checked) {
                servicoValue = servicoInputs[i].value;
                break;
            }
        }

        resumo.innerHTML = "<h2>Resumo:</h2>" +         
        "<p>Barbeiro: " + barbeiroValue + "</p>" +
        "<p>Serviço: " + servicoValue + "</p>" +
        "<p>Data: " + dataFormatada + "</p>" +
        "<p>Hora: " + hora + "h</p>" +
        "<button id='botao-agendar' type='button' onclick='enviarFormulario()'>" + "Confirmar" + "</button>";
        $(resumo).fadeTo(1000,1)       
        botaoAvancar.style.display = "none" 
           
    }
}

function voltarServico() {
    formServico.style.display = "block";
    formData.style.display = "none";
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

function enviarFormulario() {    
    //formCadastro.submit();  
    formData.style.display = "none";
    formFinal.style.display = "block";
    setTimeout(function() {
        formFinal.classList.add("show");
    }, 100)
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}







    






















