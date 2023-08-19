import {links} from "./data.js"
import {getActivePage} from "./methods.js"


/**
 * 
 * @param {HTMLElement} cmdBtnParent le parent du bouton de commande de l'aside
 */
const displayAside = ()=>{


    const cmdButton = document.createElement("button")
    cmdButton.id = "menuBtn"

        
    const button = document.createElement("button")
    const div = document.createElement("div")
    const aside = document.createElement("aside")
    div.className = "aside-content"
    aside.id = "menu"
    links.forEach((link,index)=>{
        const a = document.createElement("a")
        a.className = "aside-link"
        a.setAttribute("direction",link.name)
        a.setAttribute("href",link.link)
        a.innerText = `0${index+1} `+ link.name.toUpperCase()
        a.addEventListener("click",(e)=>{               
            localStorage.setItem("activeOnglet",e.target.getAttribute("direction"))
        })
        div.appendChild(a)
    })

    cmdButton.addEventListener('click',(e)=>{
        aside.style.transform = "translateX(0)"
        button.addEventListener("click",(e)=>{
            aside.style.transform = "translateX(100%)"
        })
    })
    aside.appendChild(button)
    aside.appendChild(div)
    document.body.prepend(aside)
    return cmdButton
    

}

const displayNavLinks = () =>{
    const div = document.createElement("div")
    links.forEach((l,index)=>{
        const link = document.createElement("a")
        link.setAttribute("href",l.link)
        link.setAttribute("direction",l.name)
        link.innerHTML = `<div></div><span>0${index}</span> ${ l.name.toUpperCase()}`
        if(l.name===getActivePage()){
            link.querySelector("div").classList.add("active")
        }
        link.addEventListener("click",(e)=>{
            const childDiv = e.target.querySelector("div")
            if(childDiv.classList.contains("active")) return
            const active = e.target.parentElement.querySelector("div.active")
            active.classList.remove("active")
            childDiv.classList.add("active")
            localStorage.setItem("activeOnglet",e.target.getAttribute("direction"))
        })
        div.appendChild(link)
    })
    return div
}

window.addEventListener("DOMContentLoaded",(e)=>{
    const nav = document.createElement("nav")
    const a = document.createElement("a")
    const asideBtnControl = displayAside()
    const navDiv = displayNavLinks()
    a.setAttribute("href","./index.html")
    nav.id = "nav"
    nav.appendChild(a)
    nav.appendChild(navDiv)
    nav.appendChild(asideBtnControl)
    if(window.matchMedia("(min-width:650px)").matches){
        asideBtnControl.style.display = "none"
    }
    else{
        navDiv.style.display = "none"    
    }
    document.body.appendChild(nav)
})

window.addEventListener("resize",(e)=>{
    const nav = document.querySelector("#nav")
    const div = nav.querySelector("div")
    const btn = nav.querySelector("button")
    const menu = document.querySelector("#menu")
    if(!window.matchMedia("(min-width:650px)").matches) 
    {
        div.style.display = "none"
        btn.style.display ="block"
        menu.style.display ="block"
    }
    else{
        btn.style.display ="none"
        menu.style.display ="none"
        div.style.display = "flex"
    }

})