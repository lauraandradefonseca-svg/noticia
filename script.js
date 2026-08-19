document.addEventListener("DOMContentLoaded", function () {
  // Preenche a data de publicação automaticamente com a data atual
  const dataElemento = document.getElementById("data-publicacao");
  const hoje = new Date();
  
  const opcoesData = { year: 'numeric', month: 'long', day: 'numeric' };
  dataElemento.textContent = hoje.toLocaleDateString('pt-BR', opcoesData);
});
