var bouton = document.getElementById("btn-search");


bouton.addEventListener("click",function() {
    var input = document.getElementById("add-ean");

    var ean = document.getElementById("add-ean"). value;

    let getProduct = () => {
        return new Promise((resolve, reject) => {
            axios.get(`https://world.openfoodfacts.org/api/v0/product/${ean}.json`).then(datas => {
                let tbody = document.getElementById("cards");
                let product = datas.data.product;
                console.log(product);
                var case_card = `
                

                <div class="card" style="width": 30rem;">
                <style>
                    img{
                        width: 200px;
                        height: 300px;
                        object-fit: contain;
                    }
                    .img-nutriscore{
                        width: 200px;
                        height: 150px
                        object-fit: contain;
                    }
                </style>
                    <br>
                    <img src="${product.image_url}" class="card-img-top" alt="${product.product_name_fr}${product.brands}">

                    

                    <br>

                    <div class="card-body">
                        <h3 class="card-title"><strong>${product.product_name_fr}</strong></h5>
                        <h4>${product.brands}</h6>
                        <p class="card-text">${product.generic_name_fr}</p>
                        <br><br>
                    
                        

                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" id="ean"><strong> Id: </strong><i>${product.id}</i></li>
                        <li class="list-group-item" id="categories"><strong>Catégories: </strong><i>${product.categories_old}</i></li>
                        <li class="list-group-item" id="ingredients"><strong>Ingrédients: </strong><i>${product.ingredients_text_fr}</i></li>
                        <li class="list-group-item" id="conservation"><strong>Conservation: </strong><i>${product.conservation_conditions_fr}</i></li>
                        <li class="list-group-item" id="poids"><strong>Poids/Contenance: </strong><i>${product.quantity}</i></li>
                        <li class="list-group-item" id="additifs"><strong>Additifs: </strong><i>${product.additives_original_tags}</i></li>
                        <li class="list-group-item" id="allergenes"><strong>Allergènes: </strong><i>${product.allergens_imported}</i></li>
                        <li class="list-group-item" id="emballage"><strong>Emballage: </strong><i>${product.packaging}</i></li>
                        
                        
                        
                        
                        
                        <li class="list-group-item"><img src="https://static.openfoodfacts.org/images/attributes/nutriscore-${product.nutriscore_grade}.svg" class="json"></li>
                        <button id="btn-delete" type="button" class="btn btn-primary">Rechercher un autre produit</button>
                    </ul>

                    </div>

                `;

                tbody.innerHTML = case_card;
                var boutonD = document.getElementById("btn-delete");

                boutonD.addEventListener("click", function() {
                    tbody.innerHTML = ``;
                    input.value = "";
                    input.focus();
                });
                resolve(product);
            });

        });
    };
    getProduct();
});




//THEME SOMBRE/CLAIR
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    }




function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
    }


function lightMode() {
var element = document.body;
var content = document.getElementById("DarkModetext");
element.className = "light-mode";
content.innerText = "Dark Mode is OFF";
    }

