const cart = {};
function addProductToCart(productId) {
  return function () {
    if (cart[productId]) {
      cart[productId] += 1;
    } else {
      cart[productId] = 1;
    }
    updateCart();
  };
}
function updateCart() {
  const cartItemsDiv = document.querySelector('.cart-items');
  cartItemsDiv.innerHTML = '';
  for (const [productId, quantity] of Object.entries(cart)) {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `Product ID: ${productId} - Quantity: ${quantity}`;
        cartItemsDiv.appendChild(cartItemDiv);
      }
    }
    document.querySelectorAll('.product').forEach((product) => {
      const productId = product.getAttribute('data-id');
      const button = product.querySelector('button');
      button.addEventListener('click', addProductToCart(productId));
    });
  