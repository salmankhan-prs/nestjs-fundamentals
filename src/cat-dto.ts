import * as joi from "joi"

export class catDto {
    name: string
    age: number
}

export const createCatSchema = joi.object({
    name: joi.string().required(),
    age: joi.number().required(),

})
