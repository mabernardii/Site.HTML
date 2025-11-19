function validarLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const erroEmail = document.getElementById("erroEmail");
  const erroSenha = document.getElementById("erroSenha");
  const mensagem = document.getElementById("mensagem");

  erroEmail.style.display = "none";
  erroSenha.style.display = "none";
  mensagem.style.display = "none";

  if (email === "" && senha === "") {
    erroEmail.style.display = "block";
    erroSenha.style.display = "block";
    return;
  }
  if (email === "") {
    erroEmail.style.display = "block";
    return;
  }
  if (senha === "") {
    erroSenha.style.display = "block";
    return;
  }

  if (email === "usuario@gmail.com" && senha === "12345") {
    mensagem.style.display = "block";
    mensagem.style.color = "green";
    mensagem.innerText = "Login efetuado com sucesso!";
  } else {
    mensagem.style.display = "block";
    mensagem.style.color = "red";
    mensagem.innerText = "E-mail ou senha inválidos!";
  }
}
