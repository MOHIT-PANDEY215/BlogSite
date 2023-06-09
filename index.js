const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } 
    })
}
)

const element= document.querySelectorAll('.hidden')
element.forEach((elem)=> observer.observe(elem))