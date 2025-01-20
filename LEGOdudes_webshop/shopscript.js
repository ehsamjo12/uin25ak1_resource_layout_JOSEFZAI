console.log(products)



//Gå gjennom alle producter, generere HTML for hver produkt , skirve dette til index.html


//En variabel som kan holde på HTML-en for produktene
let productHTML = ""

products.map((product, index) => productHTML+=
`
<article class="product-card">
                <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>Dragon Zane</h3>
                <p>Kr. 89,-</p>
                <button>Legg i handlekurv</button>
            </article>
`)

//Finn #productlist, og fyll den med verdiene i variabelen i productHTML

document.getElementById().innerHTML = productHTML
