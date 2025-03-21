
const url='https://dummyjson.com/products'
const container=document.querySelector(".container")


document.addEventListener("DOMContentLoaded", async()=>
{
    try {
        const response=await fetch(url)
        const data=await response.json()
        const products=data.products
        container.innerHTML="";

        products.forEach((products) => {

            const productCard= document.createElement('div')
            productCard.classList.add('product-card')

          productCard.innerHTML=`
            <img src='${products.thumbnail}' alt="${products.title}" class='product-img'></img>
            <h3><strong></strong> ${products.title}</h3>
            <h5><strong>Price:</strong>$${products.price}</h5>
            <h5><strong>Rating:</strong>$${products.rating}</h5>
            <p>${products.description}</p>`


            container.appendChild(productCard)

        });
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});