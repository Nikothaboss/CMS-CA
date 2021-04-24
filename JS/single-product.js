const getQs = document.location.search;
const params = new URLSearchParams(getQs);
const id = params.get("id");


console.log(id)

const url = `https://nikolaireedlarsen.no/wp-json/wc/store/products/${id}`
const container = document.querySelector(".product")
const loading = document.querySelector(".loading")

fetch(url, {
	"method": "GET",
	
})

.then(response => response.json())
.then(data => singleProductTemplate(data))
.catch(err =>{
    console.error(err)
})
.finally(()=> loading.classList.remove("spinner-border"));

const singleProductTemplate =(product)=>{
    console.log(product)
    document.title = product.name;
    container.innerHTML = "";
    let productDiv = ``;
    for(image of product.images){
        console.log(image);
        productDiv += `
        <div class="single-product">
        
                <img src="${image.src}">
            
            <div class="product-info-box">
                <h2>${product.name}</h2>
                <div class="info-text">
                    ${product.short_description}
                    ${product.description}
                </div>
                <p class="in-stock">${product.is_in_stock ? "Product in stock": "Sold Out"}
                <h3 class="single-prod-price">${product.prices.currency_prefix}${product.prices.price}</h3>
                <a id="btn" href="#">Add to cart</a>
            </div>
        </div>
        `
    }

    container.innerHTML += productDiv;
}
