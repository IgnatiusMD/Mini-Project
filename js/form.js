const nama = document.getElementById('nama')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const isi = document.getElementById('isi')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e)=>{
    let messages = []
    if(nama.value === '' || nama.value === null){
        messages.push('This Field cannot be empty!')
    }
    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
});