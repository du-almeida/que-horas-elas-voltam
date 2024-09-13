import { NextResponse } from "next/server";
import { User } from "src/models/User.js";
import { connect } from "src/utils/db.js";
import { bcrypt} from "bcryptjs"


export const config = {
  api: {
    bodyParser: true,
  },
}

export async function POST(req) {
  try{
    const body = await req.json();
    const {name, email, password} = body;

    await connect

    const emailExists = User.findOne({ email });

    if (emailExists) {
      return NextResponse.json({
        message: "E-mail já cadastrado",
        status: 409,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // return NextResponse.json({
    //   message: "Usuário criado com sucesso!",
    //   status: 201,
    // })

    return new Response(
      JSON.stringify({ message: "Usuário registrado com sucesso", status: 201 }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Erro ao registrar usuário", status: 500 }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  
  // catch (error){
  //   return NextResponse.json({
  //     error: "Erro ao cadastrar usuário!",
  //     status: 500,
  //   })
  }
}


































































































// import modelUsuario from "../../../../models/cadastroUsuarios";
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import connect from "@/utils/db";

// export async function POST(req) {
//   try {
//     const { nome, cpf, aniversario, email, senha } = await req.json();

//     await connect();

//     const emailExists = await modelUsuario.findOne({ email });
//     const cpfExists = await modelUsuario.findOne({ cpf });

//     if (emailExists) {
//       return NextResponse.json({
//         message: "E-mail já cadastrado!",
//         status: 409,
//       });
//     }

//     if (cpfExists) {
//       return NextResponse.json({
//         message: "CPF já cadastrado!",
//         status: 409,
//       });
//     }

//     const hashedsenha = await bcrypt.hash(senha, 5);

//     const newUsuario = new Usuario({
//       nome,
//       cpf,
//       aniversario,
//       email,
//       senha: hashedsenha,
//     });

//     await newUsuario.save();

//     return NextResponse.json({
//       message: "Usuário criado com sucesso!",
//       status: 201,
//     });
//   } catch (error) {
//     return NextResponse.json({
//       error: "Erro ao cadastrar usuário",
//       status: 500,
//     });
//   }
// }