const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

document.addEventListener("DOMContentLoaded", () => {
    const toggleDarkMode = document.createElement("button");
    toggleDarkMode.innerText = "🌓 تغییر تم";
    toggleDarkMode.classList.add("btn");
    toggleDarkMode.style.position = "fixed";
    toggleDarkMode.style.top = "20px";
    toggleDarkMode.style.left = "20px";
    toggleDarkMode.style.zIndex = "1000";
    toggleDarkMode.style.width = "150px";
    toggleDarkMode.style.transition = "all 0.3s ease";

    document.body.appendChild(toggleDarkMode);

    // بررسی و اعمال دارک مود از لوکال استوریج
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    toggleDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // ذخیره وضعیت دارک مود
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
