const bancodedados = require('../bancoDeDados/bancodedados')

const encontrarBanda = async (req, res) => {

    const { estiloMusical } = req.params;


    if (estiloMusical <= 0 || estiloMusical > 4) {
        return res.status(401).json({ mensagem: "Por favor digite o estilo musical que procura após bandas/ . As opções são: 1) HeavyMetal, 2) ClassicRock, 3) NuMetal e 4) PowerMetal." })
    }


    if (estiloMusical == 1) {

        return res.status(200).json(bancodedados.estilos.HeavyMetal);

    }

    if (estiloMusical == 2) {

        return res.status(200).json(bancodedados.estilos.ClassicRock)

    }

    if (estiloMusical == 3) {

        return res.status(200).json(bancodedados.estilos.NuMetal);

    }

    if (estiloMusical == 4) {

        return res.status(200).json(bancodedados.estilos.PowerMetal);

    }

}

module.exports = { encontrarBanda }