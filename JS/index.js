const container = document.querySelector(".products")
const sortBtn = document.querySelector(".sort")
const sortBtnDown = document.querySelector(".descending")
const sortBtnName = document.querySelector(".sortName")

const url = `https://nikolaireedlarsen.no/wp-json/wc/store/products/` 

fetch(url, {
	"method": "GET",
	
})

.then(response => response.json())
.then(data => productTemplate(data))
.catch(err =>{
    console.error(err)
})

// ! Standard produkt-template

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

// ! Funksjon for å sortere produktene og vise de på siden

const sortedProductTemplate=(products, sortBy)=>{
    container.innerHTML = ""
    products.sort(sortBy)
    console.log(products)
    let productDiv = ``
    for(product of products){
        for(image of product.images){
            productDiv += `
            <ul class="card">
            <a href="single-product.html?id=${product.id}" class="card-link"><img src="${image.thumbnail}"></a>
            <li>${product.name}</li>
            <p>${product.prices.currency_prefix}${product.prices.price}</p>
            <a href="single-product.html?id=${product.id}" class="btn">View</a>
            </ul> `
        }
    }
    sorted = container.innerHTML += productDiv
}

// ! Sorteringer, kan bli brukt med sortedProductTemplate

const sortByPrice =(a,b)=>{
    var price1 = a.prices.price.toUpperCase()
    var price2 = b.prices.price.toUpperCase()
    if(price1 < price2) return -1;
    if(price1 > price2) return 1;
    else return 0;
}


const sortByPriceDesc =(a,b)=>{
    var price1 = a.prices.price.toUpperCase()
    var price2 = b.prices.price.toUpperCase()
    if(price1 < price2) return 1;
    if(price1 > price2) return -1;
    else return 0;
}


const sortByName =(a,b)=>{
    var price1 = a.name.toUpperCase()
    var price2 = b.name.toUpperCase()
    if(price1 < price2) return -1;
    if(price1 > price2) return 1;
    else return 0;
}

// ! Event som sorterer etter pris (høyest til lavest)

sortBtn.addEventListener("click", ()=>{
    fetch(url, {
        "method": "GET",
    })
    
    .then(response => response.json())
    .then(data => sortedProductTemplate(data, sortByPrice))
    .catch(err =>{
        console.error(err)
    })
})


sortBtnDown.addEventListener("click", ()=>{
    fetch(url, {
        "method": "GET",
    })
    
    .then(response => response.json())
    .then(data => sortedProductTemplate(data, sortByPriceDesc))
    .catch(err =>{
        console.error(err)
    })
})


sortBtnName.addEventListener("click", ()=>{
    fetch(url, {
        "method": "GET",
    })
    
    .then(response => response.json())
    .then(data => sortedProductTemplate(data, sortByName))
    .catch(err =>{
        console.error(err)
    })
})

