const nama = document.getElementById('nama')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const isi = document.getElementById('isi')
const form = document.getElementById('form')

function validate(){
    if(nama.value==""){
        alert("Name Field Cannot be empty")
        return false;
    }
    if(email.value==""){
        alert("Email Field Cannot be empty")
        return false;
    }
    if(phone.value==""){
        alert("Phone Field Cannot be empty")
        return false;
    }
    if(isi.value==""){
        alert("Message Field Cannot be empty")
        return false;
    }
}