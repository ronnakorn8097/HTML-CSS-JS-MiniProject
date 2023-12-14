
const countEl = document.querySelector(".count");
const input = document.querySelector("input")

input.addEventListener("keyup",()=>{
    // ดักจับ event ข้อความ และทำให้มันเป็นตัวเล็ก
    let word = input.value.toLowerCase()
    // ตัวนับจำนวนสระ
    let vowelCount = 0
    for(let i = 0;i<word.length;i++)
    {
        let letter = word[i]
        // สมมุติ user กรอก love 
        // รอบแรก letter จะมีค่าเป็น l
        // รอบสอง letter จะมีค่าเป็น o
        // รอบสามletter จะมีค่าเป็น v
        // รอบสี่letter จะมีค่าเป็น e

        // check ว่า ที่ user กรอกมา มีสระ ตามเงื่อนไขไหมถ้ามีก็ให้ +1
       if(letter.match(/(["a","e","i","o","u"])/))
       {
        vowelCount +=1
       }
    }
    countEl.innerHTML = vowelCount    
    

})
