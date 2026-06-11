javascript
// Verifica se existe usuário logado
if (localStorage.getItem("usuarioLogado") !== "true") {

    window.location.href = "index.html";

}

// Função para sair do sistema
function logout() {

    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("usuario");

    window.location.href = "index.html";

}

