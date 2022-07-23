import { Schema, models, model } from "mongoose"
import {CidadeSchema} from "./Cidade"
import {EmpregadoSchema} from "./Empregado"
import {ClienteSchema} from "./Cliente"
import type { IHotel } from "../types"
import { v4 as uuid } from "uuid"
import { QuartoSchema } from "./Quarto"

export const HotelSchema: Schema<IHotel> = new Schema({
    _id: {
        type: String,
        default: uuid
    },
    nome: {
        type: String,
        // required: true
    },
    endereco: {
        type: String,
        // required: true
    },
    telefone: {
        type: String,
        // required: true,
        // unique: true
    },
    cidade: {
        type: CidadeSchema,
        // required: true
    },
    quartos: {
        type: [QuartoSchema],
        default: []
    },
    estadias: {
        type: [String],
        default: [],
        ref: 'Estadia'
    },
    reservas: {
        type: [String],
        default: [],
        ref: 'Estadia'
    }
})


const Hotel = models.Hotel || model<IHotel>("Hotel", HotelSchema)

export default Hotel