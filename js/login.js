const userEmail = document.getElementById('user-email');
const userPass = document.getElementById('user-pass');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click',function () {
    if (userEmail.value==='tanvir@gorib.com' && userPass.value==='12345') {
        window.location.href = 'main.html'
    }
    else{
        confirm('invalid username and password');
    }

})