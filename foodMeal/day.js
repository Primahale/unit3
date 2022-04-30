import navbar from './navbar.js';
// import { getData,appendData } from './script/showData.js';
// console.log(navbar)
import{getData,appendData1} from "./script/showData.js"

let navbar_div = document.getElementById("navbar-container");

navbar_div.innerHTML = navbar();


let url =  "https://www.themealdb.com/api/json/v1/1/random.php";
let res = await getData(url);


// console.log(res)
let parent1 = document.getElementById("data")

appendData1(res,parent1)

