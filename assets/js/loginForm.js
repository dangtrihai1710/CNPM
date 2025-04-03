document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('loginButton');
    var loginContainer = document.getElementById('loginContainer');
    var registerButton = document.getElementById('registerButton');
    var registerContainer = document.getElementById('registerContainer');

    // Bắt sự kiện click trên nút "Đăng ký"
    registerButton.addEventListener('click', function () {
        // Ẩn Container đăng ký và nút "Đăng ký"
        registerContainer.style.display = 'flex';
        registerButton.style.display = 'none';

        // Hiện Container đăng nhập và nút "Đăng nhập"
        loginContainer.style.display = 'none';
        loginButton.style.display = 'flex';
    });

    // Bắt sự kiện click trên nút "Đăng nhập"
    loginButton.addEventListener('click', function () {
        // Ẩn Container đăng nhập và nút "Đăng nhập"
        loginContainer.style.display = 'flex';
        loginButton.style.display = 'none';

        // Hiện Container đăng ký và nút "Đăng ký"
        registerContainer.style.display = 'none';
        registerButton.style.display = 'flex';
    });
});
