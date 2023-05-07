

  export const BotaoConcluir = ()=>{
    const botaoConcluir = document.createElement('button');
          botaoConcluir.classList.add('check-button');
          botaoConcluir.innerText = 'Concluir';
          botaoConcluir.addEventListener('click', ConcluirTarefa);

          return botaoConcluir;
}

const ConcluirTarefa = (evento)=>{
   const  botaoConcluir= evento.target; // desbre qual elemento foi clicado
   const  tarefaCompleta =  botaoConcluir.parentElement; // busca quem e o pai do elemento('li") 

     tarefaCompleta.classList.toggle('done'); // toggle retorna verdadeiro ou falso  e coloca o efeito de rabisco

} 


