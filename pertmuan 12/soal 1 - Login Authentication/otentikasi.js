const username = 'frea'
const password = '1029384756'

function auth() {
    //tangkap nilai yang diinput user
    let userinput = document.getElementById('username').value
    let passwordinput = document.getElementById('password').value
    let form = document.getElementById('form')

    if (username == userinput && password == passwordinput) {
        alert('Login Berhasil')
        form.submit()
    } else {
        alert('Login Gagal')}
}