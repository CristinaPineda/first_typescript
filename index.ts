// interface IUsuario {
//     id: string;
//     email: string;
// }

// interface IAdmin extends IUsuario {
//     cargo: 'gerente' | 'coordenador' | 'supervisor';
// }

// function redirecione(usuario: IUsuario | IAdmin) {
//     if ('cargo' in usuario) {
//         // redirecione para a area de administração
//     }
//         // redirecione para a area de usuario
// }

interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        // redirecione para a area de administração
    }
        // redirecione para a area de usuario
}