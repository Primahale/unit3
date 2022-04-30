
let cart = localStorage.getItem("cart");
if(!cart){
    cart= [];
    localStorage.setItem("cart",JSON.stringify(cart));
}
else{
    cart = JSON.parse(cart);
}

let total = cart.reduce(function (acc,curr){
    return acc + curr.price;
},0);

let container = document.getElementById("container");

let table = document.createElement("table");
let thead = document.createElement("thead");
let theadRow = document.createElement("tr");

let th1 = document.createElement("th");
th1.textContent = "img";

let th2 = document.createElement("th");
th2.textContent = "name";


let th3 = document.createElement("th");
th3.textContent = "price";

theadRow.append(th1,th2,th3);
thead.append(theadRow);


let tbody = document.createElement("tbody");
cart.forEach(function(el){
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let prod_img = document.createElement("img");
    prod_img.src = el.strMealThumb;
    td1.append(prod_img);

    let td2 = document.createElement("td");
    td2.textContent = el.strMeal;
    td2.style.fontWeight = "bolder"
    td2.style.fontSize = "20px"


    let td3 = document.createElement("td");
    td3.textContent = el.price;

    let remove = document.createElement("p");
    remove.textContent = "Remove Item"

    remove.addEventListener("click",function(){
        cart.slice(index,1)
    })

    localStorage.setItem("cart",JSON.stringify(cart))
    tr.append(td1,td2,td3);
    tbody.append(tr);
});

table.append(thead,tbody);
container.append(table);

function totalSum(total){
    let totalSum = document.getElementById("total");
    totalSum.textContent = "Total : " + total;
}

totalSum(total);
