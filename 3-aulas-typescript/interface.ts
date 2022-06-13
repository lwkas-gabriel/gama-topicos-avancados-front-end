interface Usuario {
    nome: string;
    email: string;
    adress?: string;
}

function getUser(): Usuario {
    return {
        nome: "vitor",
        email: "vitor@vitor.com"
    }
}

function setUser(usuario: Usuario) {

}