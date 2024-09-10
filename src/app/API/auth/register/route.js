import modelUsuario from "../../../../models/cadastroUsuarios";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";

export async function POST(req) {
  try {
    const { nome, cpf, aniversario, email, senha } = await req.json();

    await connect();

    const emailExists = await modelUsuario.findOne({ email });
    const cpfExists = await modelUsuario.findOne({ cpf });

    if (emailExists) {
      return NextResponse.json({
        message: "E-mail já cadastrado!",
        status: 409,
      });
    }

    if (cpfExists) {
      return NextResponse.json({
        message: "CPF já cadastrado!",
        status: 409,
      });
    }

    const hashedsenha = await bcrypt.hash(senha, 5);

    const newUsuario = new Usuario({
      nome,
      cpf,
      aniversario,
      email,
      senha: hashedsenha,
    });

    await newUsuario.save();

    return NextResponse.json({
      message: "Usuário criado com sucesso!",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Erro ao cadastrar usuário",
      status: 500,
    });
  }
}