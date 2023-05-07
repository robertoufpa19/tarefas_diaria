         
    

            
   export const BotaoDeleta = ()=>{
        const botaoDeleta = document.createElement('button'); 
        botaoDeleta.innerText = 'Excluir';
        botaoDeleta.addEventListener('click', ExcluirTarefa);
      
        return botaoDeleta;

}

const ExcluirTarefa = (evento)=>{
        const botaoDeleta = evento.target;
        const excluirTarefa = botaoDeleta.parentElement;
              excluirTarefa.remove(); // excluir tarefa

}