import express, { request, response } from "express";
import { PrismaClient } from "../generated/prisma/client.js";

const route = express.Router();
const prisma = new PrismaClient();

route.get("/viewGames", async (req,res) => {
    try {
        const jogos = await prisma.jogo.findMany({
            include: {
                genero: true, 
                status: true  
            }
        });

        
        return res.status(200).json({
            errorStatus: false,
            mensagemStatus: 'JOGOS LISTADOS COM SUCESSO',
            data: jogos
        });
    } catch (error) {
        return res.status(400).json({
            errorStatus: true,
            mensagemStatus: 'HOUVE UM ERRO AO LISTAR OS JOGOS',
            errorObject: error.message
        });
    }

});

route.get("/Detalhes/:id_jogo", async (req, res) => {
    try {
        const { id_jogo } = req.params;

        const jogo = await prisma.jogo.findUnique({
            where: { id_jogo: Number(id_jogo) },
            include: {genero: true, status: true}
        });

        return res.status(200).json({
            errorStatus: false,
            mensagemStatus: 'JOGO LISTADO COM SUCESSO',
            data: jogo
        }); 
    } catch (error) {
        return res.status(400).json({
            errorStatus: true,
            mensagemStatus: 'HOUVE UM ERRO AO LISTAR O JOGO',
            errorObject: error.message
        });
    }
});

route.put("/Detalhes/:id_jogo", async (req, res) => {
    const { id_jogo } = req.params;
    const { id_genero, id_status, nome, desenvolvedora, publisher, descricao } = req.body;

    try {
        await prisma.jogo.update({
            where: { id_jogo: Number(id_jogo) },
            data: {
                id_genero,
                id_status,
                nome,
                desenvolvedora,
                publisher,
                descricao,
            }
        });

        return res.status(201).json({
            errorStatus: false,
            mensagemStatus: 'JOGO ATUALIZADO COM SUCESSO'
        });
    } catch (error) {
        return res.status(400).json({
            errorStatus: true,
            mensagemStatus: 'HOUVE UM ERRO AO ATUALIZAR O JOGO',
            errorObject: error.message
        });
    }
});

route.post("/newGame", async (req, res) => {
    try {
        console.log("Dados recebidos:", req.body); 

        await prisma.jogo.create({
            data: {
                id_genero: req.body.genero,
                id_status: req.body.status,
                nome: req.body.nome,
                desenvolvedora: req.body.desenvolvedora,
                publisher: req.body.publisher,
                descricao: req.body.descricao
            }
        });

        return res.status(201).json({
            errorStatus: false,
            mensagemStatus: 'JOGO CADASTRADO COM SUCESSO'
        });

    } catch (error) {
        console.error("Erro ao cadastrar jogo:", error);
        return res.status(401).json({
            errorStatus: true,
            mensagemStatus: 'HOUVE UM ERRO AO CADASTRAR O JOGO',
            errorObject: error.message
        });
    }
});

export default route;