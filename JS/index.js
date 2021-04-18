

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
        let productDiv = `
        <ul>
            <li>${product.name}</li>
        </ul>
        `
        container.innerHTML += productDiv
    }
}