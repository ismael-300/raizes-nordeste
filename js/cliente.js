function salvarCliente() {

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const cidade = document.getElementById("cidade").value;

    // Validação simples
    if (
        nome === "" ||
        cpf === "" ||
        telefone === "" ||
        email === "" ||
        cidade === ""
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    // Cria o objeto do cliente
    const cliente = {
        id: Date.now(),
        nome,
        cpf,
        telefone,
        email,
        cidade,
        pontos: 0,
        status: "Ativo"
    };

    // Recupera clientes já cadastrados
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    // Adiciona o novo cliente
    clientes.push(cliente);

    // Salva novamente
    localStorage.setItem("clientes", JSON.stringify(clientes));

    // Exibe a mensagem
    alert("✅ Cliente cadastrado com sucesso!");

    // Limpa o formulário
    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cidade").value = "";

    // Vai para a listagem
    window.location.href = "clientes.html";
}