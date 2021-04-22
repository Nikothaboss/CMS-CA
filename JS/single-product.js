const getQs = document.location.search;
const params = new URLSearchParams(getQs);
const id = params.get("id");

console.log(id)

const url = `https://nikolaireedlarsen.no/wp-json/wc/store/products/${id}`
const container = document.querySelector(".product")

fetch(url, {
	"method": "GET",
	
})

.then(response => response.json())
.then(data => singleProductTemplate(data))
.catch(err =>{
    console.error(err)
})

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
                <h3 class="single-prod-price">${product.prices.currency_prefix}${product.prices.price}</h3>
                <a class="btn" href="#">Add to cart</a>
            </div>
        </div>
        `
    }

    container.innerHTML += productDiv;
}
