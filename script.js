const content  = document.querySelectorAll('.content')
const list  = document.querySelectorAll('nav ul li')

list.forEach((item, idx) =>{
    item.addEventListener("click", ()=>{
        hideAllContent()
        hideAllItem()
        item.classList.add("active")
        content[idx].classList.add("show")
    })
})


function hideAllContent(){
    content.forEach(content  => {
        content.classList.remove("show")
    })
}
function hideAllItem(){
    list.forEach(content  => {
        content.classList.remove("active")
    })
}
