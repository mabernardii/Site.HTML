function pesquisarLivro() {
    const livros = [
        "Dom Casmurro",
        "O Pequeno Príncipe",
        "1984",
        "O Alquimista"
    ];

    let busca = document.getElementById("searchInput").value;

    if (livros.includes(busca)) {
        alert("📚 Livro encontrado!");
    } else {
        alert("❌ Livro não encontrado.");
    }
}
