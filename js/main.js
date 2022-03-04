// Start Setting Box
let settingsBox = document.querySelector(".settings-box");
let gear        = document.querySelector(".settings-box .gear");
function open_settings_box(button) {
    if(button) {
        button.addEventListener('click', (e) => {
            settingsBox.classList.toggle('open');
        });
    }
}
open_settings_box(gear);
// Start Set Main Color Of Website
let listColor = document.querySelector(".settings-box .setting-body .colors .colors-list");
let allColors = document.querySelectorAll(".settings-box .setting-body .colors .colors-list li");
allColors.forEach(item => {
    item.addEventListener('click', (e) => {
        const color = e.target.dataset.color;
        localStorage.setItem('main-color', color);
        document.body.style.setProperty('--main-color',localStorage.getItem('main-color'));
    });
    document.body.style.setProperty('--main-color',localStorage.getItem('main-color'));
});
// Start Send From 
let url      = 'prossed.php';
let btn_sub  = document.querySelector(".send-form");
let msg_form = document.querySelector(".msg-form");
// Start Function If click the Btn Submit Form
function send_form(btn_sub) {
    if (btn_sub) {
        btn_sub.addEventListener('click', (e) => {
            msg_form.style.display = 'block';
            msg_form.textContent = 'Your Massege Is Sended';
        });
    }
}
send_form(btn_sub);