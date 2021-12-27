import * as yup from "yup"

const muscleSchema = (name) => {
  return {
    [name]: yup
              .number()
              .typeError("Must be a whole number between 1 and 10")
              .integer("Must be a whole number between 1 and 10")
              .positive("Must be a whole number between 1 and 10")
  }
}

const foodSchema = (name) => {
  return {
    [name]: yup
              .number("Must be a whole number")
              .typeError("Must be a whole number")
              .integer("Must be a whole number")
              .positive("Must be greater than 0")
              .required("Must enter a whole number")
  }
}

const healthSchema = (name) => {
  return {
    [name]: yup.bool()
  }
}

const schema = yup.object().shape({
  sex: yup.string().required(),
  age: yup.number().positive().integer().required(),
  weight: yup.number().required(),
  email: yup.string().email(),
  goalWeight: yup.number().positive().integer().required(),
  ...muscleSchema("shoulders"),
  ...muscleSchema("back"),
  ...muscleSchema("neck"),
  ...muscleSchema("chest"),
  ...muscleSchema("biceps"),
  ...muscleSchema("triceps"),
  ...muscleSchema("glutes"),
  ...muscleSchema("abs"),
  ...muscleSchema("quads"),
  ...muscleSchema("calves"),
  ...muscleSchema("hamstrings"),
  ...foodSchema("calories"),
  ...foodSchema("protein"),
  ...foodSchema("carbs"),
  ...foodSchema("fats"),
  ...foodSchema("sodium"),
  ...foodSchema("fiber"),
  ...foodSchema("sugar"),
  ...healthSchema("underweight"),
  ...healthSchema("overweight"),
  ...healthSchema("obese"),
  ...healthSchema("diabetes"),
  ...healthSchema("heart"),
  ...healthSchema("stroke"),
  ...healthSchema("kidney"),
})

export default schema