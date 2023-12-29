 // 0 - 100 % convert 0 - 1 
 // 30% => 0.3
 
 const scrollBtn = document.querySelector(".top");
 const rootEl = document.documentElement
 document.addEventListener("scroll",showBtn)
 scrollBtn.addEventListener("click",scrollToTopFunc)

function showBtn (){
    // คำนวณหาความสูงทั้งหมด
   const scrollTotal =  rootEl.scrollHeight - rootEl.clientHeight
//    console.log(scrollTotal) => 1082
// console.log(rootEl.scrollTop) // 1 - 1082
    // console.log(rootEl.scrollTop/scrollTotal) // 0-1
    if(rootEl.scrollTop/scrollTotal > 0.3)
    {
        scrollBtn.classList.add("show-btn")
    }
    else scrollBtn.classList.remove("show-btn")
}

function scrollToTopFunc(){
    rootEl.scrollTo({
        top : 0,
        behavior:"smooth"
    })
}