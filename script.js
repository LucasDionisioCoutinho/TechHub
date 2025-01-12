
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const cartButton = document.querySelector('.cart-button');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.getElementById('close-modal');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotal = document.getElementById('cart-total');

// Abre e fecha o menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carrinho de compras
let cartItems = [];
let totalPrice = 0;

// Atualiza o contador ao clicar no botão Adicionar ao Carrinho
document.querySelectorAll('.carrinho').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.parentElement.querySelector('p').textContent; // Nome do produto
        const productPriceText = e.target.parentElement.querySelectorAll('p')[1].textContent; // Preço do produto
        const productPrice = parseFloat(productPriceText.replace('R$', '').replace(',', '.').trim()); // Converte para número

        // Adiciona o produto ao carrinho
        cartItems.push({ name: productName, price: productPrice });
        totalPrice += productPrice;

        // Atualiza o contador no ícone do carrinho
        cartCount.textContent = cartItems.length;
    });
});

// Exibe o carrinho (modal)
cartButton.addEventListener('click', () => {
    // Limpa o conteúdo do modal antes de adicionar novos itens
    cartItemsList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    // Exibe o total
    cartTotal.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;

    // Exibe o modal
    cartModal.style.display = 'flex';
});

// Fecha o modal
closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Fecha o modal se clicar fora da área do modal
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});











