let string = ""
let buttons =  document.getElementsByTagName("button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.getElementById('t').value = string
        }
        else if(e.target.innerHTML == 'C'){
            string = ""
            document.getElementById('t').value = string

        }
        else{
            console.log(e.target)
            string= string + e.target.innerHTML
            document.getElementById('t').value = string

        }
    })
})