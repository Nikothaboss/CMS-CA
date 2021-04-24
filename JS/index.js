const container = document.querySelector(".products")
const sortBtn = document.querySelector(".sort")
const sortBtnDown = document.querySelector(".descending")
const sortBtnName = document.querySelector(".sortName")

const url = `https://nikolaireedlarsen.no/wp-json/wc/store/products/` 

// ! Funksjon som fetcher data fra API og deretter kjører en valgt funksjon
const fetchData = (funcToRun, param = "") =>{
    fetch(url, {
        "method": "GET",
        
    })
    .then(response => response.json())
    .then(data => funcToRun(data, param)) 
    .catch(err =>{
        console.error(err)
    }) 
} 



// fetch(url, {
// 	"method": "GET",
	
// })

// .then(response => response.json())
// .then(data => productTemplate(data))
// .catch(err =>{
//     console.error(err)
// })



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

fetchData(productTemplate)

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
    container.innerHTML += productDiv
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

// ! Events

sortBtn.addEventListener("click", ()=>{
    fetchData(sortedProductTemplate, sortByPrice)
})


sortBtnDown.addEventListener("click", ()=>{
    fetchData(sortedProductTemplate, sortByPriceDesc)
})


sortBtnName.addEventListener("click", ()=>{
    fetchData(sortedProductTemplate, sortByName)
})

