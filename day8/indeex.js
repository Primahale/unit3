

async function main(){


    try{
        let movie = document.getElementById("query").ariaValueMax

        let res = await fetch(`https://www.omdbapi.com/?apikey=d806bd&s=${movie}`);
    
        let data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
   

}