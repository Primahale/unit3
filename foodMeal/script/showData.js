
async function getData(url)
{
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}


function appendData(data,parent){
    data.categories.forEach((el)=>{
        let div = document.createElement("div");

        let p = document.createElement("p")
        p.innerHTML = el.strCategory;

       
        let img = document.createElement("img")
        img.src = el.strCategoryThumb;

        div.append(img,p);

        parent.append(div)
    });

}


function appendData1(data,parent1){
    data.meals.forEach((el)=>{
        let div = document.createElement("div");

        let p = document.createElement("p")
        p.innerHTML = el.strMeal;
       

        let para = document.createElement("p");
        para.innerHTML = el.strInstructions;
       
        let img = document.createElement("img")
        img.src = el.strMealThumb;

        div.append(img,p,para);

        parent1.append(div)
    });

}


function appendData2(data,parent1){
    data.meals.forEach((el)=>{
        let div = document.createElement("div");

        let p = document.createElement("p")
        p.innerHTML = el.strMeal;
       

        let para = document.createElement("p");
        para.innerHTML = el.strCategory;
       
        let img = document.createElement("img")
        img.src = el.strMealThumb;

        div.append(img,p,para);

        parent1.append(div)
    });

}
 
// const search = async() => {
//     let userInput = document.getElementById("logo").value
//     console.log(userInput);
// }


export {getData,appendData,appendData1,appendData2}


