async function getProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const products = data.products;

    const result = products.map(product => {
        return `
            <div class="product-card">
                <h2 class="product-name">${product.title}</h2>
                <img class="product-image" src="${product.thumbnail}" />
                <p class="product-price">$${product.price}</p>
            </div>
        `;
    }).join('');

    document.querySelector('.products').innerHTML = result;
}


getProducts();