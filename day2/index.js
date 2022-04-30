

function storeImages(){

    let img = document.getElementById("url").value;


    let image = localStorage.getItem("image");
    console.loh("image",image)

    if(image == null)
    {

    image = []

    }

    else{
        image = JSON.parse(localStorage.getItem("image"))
    }

    image.push(img)

    localStorage.setItem("image",JSON.stringify(image))
}