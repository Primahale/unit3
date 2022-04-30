import navbar from './navbar.js';
// import { getData,appendData } from './script/showData.js';
// console.log(navbar)
import{getData,appendData} from "./script/showData.js"

let navbar_div = document.getElementById("navbar-container");

navbar_div.innerHTML = navbar();


let url = "https://www.themealdb.com/api/json/v1/1/categories.php";;
let res = await getData(url);


// console.log(res)
let parent = document.getElementById("data")

appendData(res,parent)

