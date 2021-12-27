import styles from "../styles/Test.module.css"
import { Formik } from "formik"
import schema from "../lib/test-schema"
import { useEffect, useState } from "react"

const Test = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const changeSlide = (slideIndex, formId) => {
    if (slideIndex >= 0 && slideIndex < 4) {
      document.getElementById(formId).style.transform = `translate(-${slideIndex * 25}%)`
      setSlideIndex(slideIndex)
    }
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <div>
          <button type="button" onClick={() => {changeSlide(slideIndex - 1, styles.form)}}>Prev</button>
          <button type="button" onClick={() => {changeSlide(slideIndex + 1, styles.form)}}>Next</button>
        </div>
      </div>
      <Formik
        initialValues={{
          sex: "",
          age: "",
          weight: "",
          height: "",
          email: "",
          goalWeight: "",
          shoulders: "",
          back: "",
          neck: "",
          chest: "",
          biceps: "",
          triceps: "",
          glutes: "",
          glutes: "",
          abs: "",
          quads: "",
          calves: "",
          hamstrings: "",
          calories: "",
          proteins: "",
          carbs: "",
          fats: "",
          sodiums: "",
          fibers: "",
          sugars: "",
          underweight: "",
          overweight: "",
          obese: "",
          diabetes: "",
          heart: "",
          stroke: "",
          kidney: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false)
          console.log(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form action="POST" onSubmit={handleSubmit} id={styles.form}>
            <div className={styles["slide-1"]}>
              <h1>Ready to get fit?</h1>
              <h2>
                Let&apos;s get some basic information about you and your email so we can send you the results
              </h2>
              {errors.sex && touched.sex && errors.sex}
              <input name="sex" 
                placeholder="Sex"
                value={values.sex}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.age && touched.age && errors.age}
              <input name="age" 
                placeholder="Age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.weight && touched.weight && errors.weight}
              <input name="weight" 
                placeholder="Weight"
                value={values.weight}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.height && touched.height && errors.height}
              <input name="height" 
                placeholder="Height"
                value={values.height}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && errors.email}
              <input name="email" 
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={styles["slide-2"]}>
              <h2>
                What are your goals?
              </h2>
              {errors.goalWeight && touched.goalWeight && errors.goalWeight}
              <input name="goalWeight" 
                placeholder="Goal Weight"
                value={values.goalWeight}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.shoulders && touched.shoulders && errors.shoulders}
              <input name="shoulders" 
                placeholder="Shoulders"
                value={values.shoulders}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.back && touched.back && errors.back}
              <input name="back" 
                placeholder="Back"
                value={values.back}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.neck && touched.neck && errors.neck}
              <input name="neck" 
                placeholder="Neck"
                value={values.neck}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.chest && touched.chest && errors.chest}
              <input name="chest" 
                placeholder="Chest"
                value={values.chest}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.biceps && touched.biceps && errors.biceps}
              <input name="biceps" 
                placeholder="Biceps"
                value={values.biceps}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.triceps && touched.triceps && errors.triceps}
              <input name="triceps" 
                placeholder="Triceps"
                value={values.triceps}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.glutes && touched.glutes && errors.glutes}
              <input name="glutes" 
                placeholder="Glutes"
                value={values.glutes}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.abs && touched.abs && errors.abs}
              <input name="abs" 
                placeholder="Abs"
                value={values.abs}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.quads && touched.quads && errors.quads}
              <input name="quads" 
                placeholder="Quads"
                value={values.quads}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.calves && touched.calves && errors.calves}
              <input name="calves" 
                placeholder="Calves"
                value={values.calves}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.hamstrings && touched.hamstrings && errors.hamstrings}
              <input name="hamstrings" 
                placeholder="Hamstrings"
                value={values.hamstrings}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={styles["slide-3"]}>
              <h2>
                Let&apos;s get some more information about your diet
              </h2>
              {errors.calories && touched.calories && errors.calories}
              <input name="calories" 
                placeholder="Calories"
                value={values.calories}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.proteins && touched.proteins && errors.proteins}
              <input name="proteins" 
                placeholder="Protein"
                value={values.proteins}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.carbs && touched.carbs && errors.carbs}
              <input name="carbs" 
                placeholder="Carbs"
                value={values.carbs}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fats && touched.fats && errors.fats}
              <input name="fats" 
                placeholder="Fat"
                value={values.fats}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.sodiums && touched.sodiums && errors.sodiums}
              <input name="sodiums" 
                placeholder="Sodium"
                value={values.sodiums}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.sugars && touched.sugars && errors.sugars}
              <input name="sugars" 
                placeholder="Sugar"
                value={values.sugars}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fibers && touched.fibers && errors.fibers}
              <input name="fibers" 
                placeholder="Fiber"
                value={values.fibers}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={styles["slide-4"]}>
              <h2>
                Let&apos;s get some more information about your health
              </h2>
              {errors.underweight && touched.underweight && errors.underweight}
              <input name="underweight" 
                placeholder="Underweight"
                value={values.underweight}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.overweight && touched.overweight && errors.overweight}
              <input name="overweight" 
                placeholder="Overweight"
                value={values.overweight}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.obese && touched.obese && errors.obese}
              <input name="obese" 
                placeholder="Obese"
                value={values.obese}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.diabetes && touched.diabetes && errors.diabetes}
              <input name="diabetes" 
                placeholder="Diabetes"
                value={values.diabetes}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.heart && touched.heart && errors.heart}
              <input name="heart" 
                placeholder="Heart"
                value={values.heart}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.stroke && touched.stroke && errors.stroke}
              <input name="stroke" 
                placeholder="Stroke"
                value={values.stroke}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.kidney && touched.kidney && errors.kidney}
              <input name="kidney" 
                placeholder="Kidney"
                value={values.kidney}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Test