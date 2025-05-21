import express, { request, response } from "express";
import { PrismaClient } from "../generated/prisma/client.js";

const route = express.Router();
const prisma = new PrismaClient();

route.post("/Register", async (request,response) => {
    await prisma.usuario.create({
        data: {
            email: request.body.email,
            nome: request.body.nome,
            senha: request.body.senha,
            sexo: request.body.sexo,
            data_nasc: request.body.data_nasc 
        }
    });

    response.status(201).json(request.body);
});

export default route;