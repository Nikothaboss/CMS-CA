const container = document.querySelector(".products")

const url = `https://nikolaireedlarsen.no/wp-json/wc/store/products/` 

fetch(url, {
	"method": "GET",
	
})

.then(response => response.json())
.then(data => productTemplate(data))
.catch(err =>{
    console.error(err)
})

const productTemplate =(products)=>{
    container.innerHTML = "";
    for(product of products){
        console.log(product)
        let productDiv = ``
        for(image of product.images){
            productDiv += `
            <ul class="card">
            <a href="single-product.html?id=${product.id}" class="card-link"><img src="${image.thumbnail}"></a>
            <li>${product.name}</li>
            <p>${product.prices.currency_prefix}${product.prices.price}</p>
            <a href="single-product.html?id=${product.id}" class="btn">View</a>
            </ul> `
        }
        container.innerHTML += productDiv
    }
}