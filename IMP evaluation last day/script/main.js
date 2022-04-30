
async function makeAPICall(url){
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log(err)
    }
}
function appendpictures(data, parents) {
    data.forEach((elem) => {
  
  
      let card = document.createElement("div");
      card.setAttribute("class", "card");
  
      let img = document.createElement("img");
      img.src = elem.urls.small;
      img.setAttribute("class", "img");
  
      let p = document.createElement("p");
      p.innerHTML = elem.user.name;
      p.setAttribute("class", "p");
  
      card.append(img, p);
  
      card.onclick = () => {
        localStorage.setItem("elem", JSON.stringify(elem));
        window.location.href = "card.html";
      };
  
      parents.append(card);
    });
  }
  export { makeAPICall, appendpictures };