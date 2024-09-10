import mongoose from "mongoose";
import { type } from "os";

const { Schema } = mongoose;

const usuarioSchema = new Schema(
  {
    nome: { type: String, required: true },
    cpf: {type: Number, required: true, unique: true },
    aniversario: {type: Date, required: true},
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
  },
  { timestamps: true }
);

const modelUsuario = mongoose.models.Usuario || mongoose.model("Usuario", usuarioSchema);

export default modelUsuario;