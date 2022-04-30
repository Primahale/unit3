
let url = " https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";
let container = document.getElementById("menu");

async function getProducts(){
    // try{
    //     let FoodList = await fetchProduct(url);
    //     renderProducts(FoodList);
    // }
    // catch(err){
    //     console.log("err:",err);
    // }
    try{
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data)
        appendData(data)
    }
    catch(err){
        console.log(err);
    }
}
getProducts();

function appendData(data){
    // console.log("data:",data)
    data.meals.forEach(function(el){
        // console.log("el:",el)

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.strMealThumb;

        let name = document.createElement("h3")
        name.innerText = `Name - ${el.strMeal}`
        name.style.marginTop = "10px"

        function getRandomItm(max){
            return Math.floor(Math.random()*max);
        }
        let price = document.createElement("h4");
        price.textContent = `₹`+ getRandomItm(500);
        price.style.marginTop = "10px"

        let button = document.createElement("button");
        button.textContent = "Add To Cart";
        button.style.marginTop = "10px"
        button.onclick = function(event){
            cart(el);
        };
    
        div.append(img,name,price,button);
        container.append(div)


    });
    function cart(el){
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(el);

        localStorage.setItem("cart",JSON.stringify(cart));
        refreshCartCount(cart);
    }
}

let cart = localStorage.getItem("cart");

if(!cart){
    cart = [];
    localStorage.setItem("cart",JSON.stringify(cart));
    refreshCartCount(cart);
}

function refreshCartCount(cart){
    let cartCount = document.getElementById("count");
    cartCount.textContent = cart.length;
}


// function fetchProduct(url){
//     return fetch(url)
//     .then(function(res){
//         return res.json();

//     })
//     .then(function (res){
//         return res;
//     })
//     .catch(function(err){
//         console.log(err);
//     });
// }