function adicionarAoCarrinho(nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Atualiza contadores
  document.getElementById('cart-count').textContent = carrinho.length;
  const cartDetails = document.getElementById('cart-count-details');
  if (cartDetails) {
    cartDetails.textContent = carrinho.length;
  }
}
// Carrega o contador do carrinho ao abrir a página
function carregarContadorCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const contador = document.getElementById('cart-count');
  if (contador) {
    contador.textContent = carrinho.length;
  }

  const contadorDetalhes = document.getElementById('cart-count-details');
  if (contadorDetalhes) {
    contadorDetalhes.textContent = carrinho.length;
  }
}

// Chamada ao carregar a página
carregarContadorCarrinho();

  document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        // Verifica se o botão de toggler está visível (menu colapsável ativo)
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click(); // Simula clique no botão para fechar
        }
      });
    });
  });