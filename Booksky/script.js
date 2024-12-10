let popup=document.querySelector(".popup")
let popupbox=document.querySelector(".popupbox")
let popup1=document.getElementById("add-popup")

popup1.addEventListener('click',(e)=>{
   popup.style.display='block'
   popupbox.style.display='block'
})

function cancelbook(){
    popup.style.display='none'
    popupbox.style.display='none'
}

let container=document.querySelector(".container")
let addbook=document.getElementById("add-book")
let title=document.getElementById("book-title")
let author=document.getElementById("book-author")
let description=document.getElementById("book-description")

addbook.addEventListener('click',(e)=>{
    e.preventDefault();  //mostly used for form 
    let div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${title.value}</h1>`+`<h4>${author.value}</h4>`+`<p>${description.value}</p>`+'<button id="deleted" onclick="deletedd(event)">Delete</button>'
    // div.innerHTML=`<h4>${author.value}</h4>`
    // div.innerHTML=`<p>${description.value}</p>`
    container.append(div)
    // title.value=" "
    // author.value=" "
    // description.value=" "
    popup.style.display='none'
    popupbox.style.display='none'
})

let deleted=document.getElementById("deleted")

function deletedd(event){
    event.target.parentElement.remove()
}