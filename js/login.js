javascript
function login() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Usuário padrão do protótipo
    if (email === "admin@teste.com" && senha === "123456") {

        localStorage.setItem("usuarioLogado", "true");
        localStorage.setItem("usuario", "Administrador");

        window.location.href = "dashboard.html";

    } else {

        alert("Email ou senha inválidos.");

    }

}

