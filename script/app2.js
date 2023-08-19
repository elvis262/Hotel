import {DATA_RESTAURANT,imageRestaurent} from "./data.js"
import {getActivePage,activeItem} from "./methods.js"

let timer
window.addEventListener("DOMContentLoaded",(e)=>{
    var DATAS 
    var compt = 1
    DATAS = {data:[...DATA_RESTAURANT], img : imageRestaurent}
    const imgContainer = document.querySelector("#img-container")
    const bubles = document.querySelector("#bubles")
    activeItem(0, DATAS.data, DATAS.img)
    for(let i = 0; i < DATAS.data.length;i++){
        if(i===0){
            timer = setInterval(() => {
                ++compt
                if(compt === 4) compt= 1
                imgContainer.style.backgroundImage = `url(${DATAS.img+DATAS.data[i].imgName+"-"+compt}.jpg)`
            }, 5000);
        }
        const div = document.createElement("div")
        div.setAttribute("index",`${i}`) 
        i==0? div.classList.add("active") : ""
        
        div.addEventListener("click",(e)=>{
            clearInterval(timer)
            if(e.target.classList.contains("active")) return 
            activeItem(parseInt(e.target.getAttribute("index")), DATAS.data, DATAS.img)
            timer = setInterval(() => {
                ++compt
                if(compt === 4) compt= 1
                imgContainer.style.backgroundImage = `url(${DATAS.img+DATAS.data[i].imgName+"-"+compt}.jpg)`
            }, 5000);
            e.target.parentElement.querySelector("div.active").classList.remove("active")
            e.target.classList.add("active")

        })
        bubles.appendChild(div)
    }
})