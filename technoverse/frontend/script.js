// script.js
// Initialize AI-powered chatbot/virtual assistant
const chatbot = new Chatbot();
chatbot.init();

// Fetch products from API and generate product listing using AI
fetch('/api/products')
   .then(response => response.json())
   .then(products => {
        const productList = document.getElementById('product-listing');
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Price: ${product.price}</p>
                <button>Add to Cart</button>
            `;
            productList.appendChild(productCard);
        });
    });

// Implement AI-powered search engine
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    fetch(`/api/search?q=${searchTerm}`)
       .then(response => response.json())
       .then(results => {
            const searchResults = document.getElementById('search-results');
            searchResults.innerHTML = '';
            results.forEach(result => {
                const resultCard = document.createElement('div');
                resultCard.innerHTML = `
                    <h2>${result.name}</h2>
                    <p>${result.description}</p>
                    <p>Price: ${result.price}</p>
                `;
                searchResults.appendChild(resultCard);
            });
        });
});