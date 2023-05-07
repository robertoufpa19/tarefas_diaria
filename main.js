 import { BotaoConcluir } from "./funcoes/concluirTarefa.js";
 import { BotaoDeleta } from "./funcoes/excluirTarefa.js";
 
        const criarTarefa = (evento)=>{
                evento.preventDefault();
            
                const lista = document.querySelector('[data-list]');
                const input = document.querySelector('[data-form-input]');
                const valorDigitado = input.value;

                if(valorDigitado != null && valorDigitado != ""){
                     
                        const tarefa = document.createElement('li');
                
                        tarefa.classList.add('task');
                        const conteudo = `<p class = "content">${valorDigitado} </p>`;
            
                        tarefa.innerHTML = conteudo; 
            
                        tarefa.appendChild(BotaoConcluir());
                        tarefa.appendChild(BotaoDeleta());
                        lista.appendChild(tarefa); // adiciona tarefa em listagem uma abaixo da outra
                        input.value = "";
                }else{
                        window.alert("Voce precisa Adicionar Uma tarefa!");
                }
    
               
        }
       
    
        const novaTarefa = document.querySelector('[data-form-button]');
        // funcao anonima = '()=>'
        novaTarefa.addEventListener('click', criarTarefa);


         
   
