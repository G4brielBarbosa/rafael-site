  // Seleciona os elementos pelo ID
  const menuButton = document.getElementById('menu-button');
  const closeNavbar = document.getElementById('close-navbar');
  const verticalNavbar = document.getElementById('vertical-navbar');

  // Adiciona evento de clique para abrir o menu
  menuButton.addEventListener('click', function(event) {
      event.preventDefault(); // Previne o comportamento padrão do link
      verticalNavbar.style.display = 'block'; // Exibe o menu
      verticalNavbar.classList.add('open'); // Adiciona classe 'open'
  });

  // Adiciona evento de clique para fechar o menu
  closeNavbar.addEventListener('click', function() {
      verticalNavbar.classList.remove('open'); // Remove classe 'open'
      verticalNavbar.style.display = 'none'; // Esconde o menu
  });
