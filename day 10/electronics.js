import navbar from './navbar.js';
// import { getData,appendData } from './script/showData.js';
// console.log(navbar)
import{getData,appendData} from "./script/showData.js"

let navbar_div = document.getElementById("navbar-container");

navbar_div.innerHTML = navbar();


let url = "https://fakestoreapi.com/products/category/electronics";
let res = await getData(url);


// console.log(res)
let parent = document.getElementById("data")

appendData(res,parent)

