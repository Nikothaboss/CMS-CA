

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
            <li>${product.name}</li>
            <a href="single-product.html?id=${product.id}"><img src="${image.src}"></a>
            <p>£${product.prices.price}</p>
            <button>View</button>
            </ul> `
        }
        container.innerHTML += productDiv
    }
}