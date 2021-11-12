import * as yup from 'yup'

export const schemaClientSave = yup.object({
  body: yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    birthdate: yup.date().required()
  })
})

export const schemaClientFindOne = yup.object({
    params: yup.object({
        id: yup.number().required()
    })
})
