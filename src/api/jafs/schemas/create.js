import Joi from 'joi'

const schema = Joi.object({
  original_id: Joi.number().required(),
  name: Joi.string().required(),
  profession: Joi.string().required(),
  summary: Joi.object().unknown().required(),
  comparisons: Joi.array()
    .items(
      Joi.object({
        base_jaf_original_id: Joi.number().optional(),
        compared_jaf_original_id: Joi.number().optional(),
        name: Joi.string().required(),
        profession: Joi.string().required(),
        comparison: Joi.object().unknown().required()
      })
    )
    .optional()
})

export default schema
