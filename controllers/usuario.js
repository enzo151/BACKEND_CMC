 const Usuarios = require('../models/usuario');
 exports.getAll = async (req, res) => {
    const usuarios = await Usuarios.findAll();
    res.json(usuarios);
};

exports.getById = async (req, res) => {
    //no router id é o que vem depois do usuario/
    const idDoParam = req.params.id;
    const usuarioEcontrado = await Usuario.findOne({ idUsuarios: idDoParam });
    res.json(usuarioEcontrado)
};

exports.createrUsuario = async (req, res) => {
    const usuarioCadastrado = await Usuario.findOnde({ cpf: req.body.cpf });
    //verificacao duplicidade de usuario cadastrado
    if (usuarioCadastrado) {
        return res.send('Já existe um usuario cadastrado neste CPF.')
    }

    const usuarioCriado = await Usuario.create(req.body)
    console.log('usuarioCriado', usuarioCriado)
    return res.send('oi')
    //res.json(usuarios)
};