/**
* 
* @returns {String} le nom de la page active
*/
export const getActivePage = ()=>{
   var pathName = window.location.pathname
   if(pathName === "") return "home"
   console.log(pathName.split("/")[1].split(".")[0])
   const result = pathName.split("/")[1].split(".")[0]
   return result==="index"? "home": result
   
}


export const activeItem = (specIndex,DATA,imageRoad)=>{
    const imgContainer = document.querySelector("#img-container")
    const role = document?.querySelector("#role")
    const name = document.querySelector("#name")
    const descrip = document.querySelector("#description")
    let varName = ""
    
    DATA.forEach((data,index)=>{
        if(index===specIndex){
            
            varName = data.name.replace(" ", "-")
            role ? role.innerText = data.role : ""
            name.innerText = data.name
            descrip.innerText = data.description
            imgContainer.style.backgroundImage = `url(${imageRoad+data.imgName+"-1"}.jpg)`
                 
        }
    })
}


