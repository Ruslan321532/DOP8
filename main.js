const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');

let i = 0

button.addEventListener ('click',function(e) {
    e.preventDefault()
    if (input.value === '') return
    createElement (input.value)
    input.value = ''
  
    change.addEventListener('click' , (e) => {
        e.preventDefault()
        overlay.forEach((item) => {
            change.innerHTML += ` 
            <div class="overlay">
            <input type="text" class="input_change">          
        </div>
            `
        })

    })
    
}) 

function createElement (value) {
    i++
    const button = document.createElement('button')
    const li = document.createElement('li')
    const change = document.createElement('button')
    button.style.cssText = `
    border-radius: 30px
    `

    li.textContent = value
    button.textContent = "🗑️"
    change.textContent = 'change'
  

    li.className = 'li'
    button.className = 'btn'
    change.className = 'changeBtn'

    result.appendChild (li)
    li.appendChild(button)
    li.append(change)

    button.addEventListener('click',function() {
        i--
        total.textContent = i
        result.removeChild(li)
    })

    li.addEventListener('click',function () {
        li.classList.toggle('li-active')
    })                                            

    total.textContent = i

}


