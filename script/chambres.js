import {DATA_CHAMBRES,imageCHRoad} from "./data.js"

const ongletActive = (data,tab)=>{

    tab[0].className = "active"
    tab[3].style.backgroundImage = `url(${imageCHRoad+data.title}.jpg)`  
    tab[1].innerText = data.title.toUpperCase()
    tab[2].innerText = data.libelle 
    tab[4].innerText = data.prix
    tab[5].innerText = data.occupant
        
    
}

window.addEventListener("DOMContentLoaded",(e)=>{
    const ul = document.querySelector("#destination-header")
    const h1 = document.querySelector("#title")
    const p = document.querySelector("#destination-lib")
    const divImage = document.querySelector("#img-container")
    const distance = document.querySelector("#distance")
    const duree = document.querySelector("#duree")
    DATA_CHAMBRES.forEach((data)=>{
        const li = document.createElement("li")
        const div = document.createElement("div")
        li.setAttribute("destination-name",data.title)
        if(data.title==="standard") 
        {
            ongletActive(data, [div,h1,p,divImage,distance,duree])
        }
        li.innerText = data.title.toUpperCase()
        li.addEventListener("click",(e)=>{
            const parent = e.target.parentElement
            const destinationName = e.target.getAttribute("destination-name")
            const div = e.target.querySelector("div")
            if(div.classList.contains("active") )
            {return}
            parent.querySelector("div.active").classList.remove("active")
            div.classList.add("active")
            DATA_CHAMBRES.forEach((d)=>{
                if(d.title === destinationName){
                    ongletActive(d, [div,h1,p,divImage,distance,duree])
                }
        })
        
    })
    li.appendChild(div)
    ul.appendChild(li)
})

})