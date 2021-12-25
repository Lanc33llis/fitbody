const gravity = -9.80665
const pi = 3.14159

/**
 * This function uses the work formula for most of its equation meaning it's generally very much ane estimate
 * @param {String} exercise 
 * @param {Number} reps
 * @param {{sex: String, age: Number, weight: Number, height: Number}} lifestyle
 */
export function exerciseToCalories(exercise, reps, lifestyle) {
  let workout = {}
  workout.name = exercise
      
  // kilogram conversion
  let weight = lifestyle.weight * 0.453592
  // inches to meters conversion
  let height = lifestyle.height * 0.0254

  switch (exercise) {
    case "Arm Circles": {
      let armWeight = weight 

      // https://exrx.net/Kinesiology/Segments
      // Paolo de Leva (1996) Adjustments to Zatsiorsky-Seluyanov's Segment Inertia Parameters. 
      // Journal of Biomechanics 29 (9), pp. 1223-1230.
      lifestyle.sex == "Male" ? armWeight *= .057 : armWeight *= .049

      // lets say it's 1 second for an arm rotation
      let force = armWeight * (-gravity)
      // arm span tends to be the height of a human, so roughly half of the height
      let armLength = height / 2

      // lets assume that there is no energy needed to rotate the arm down
      let distance = armLength * pi

      // human bodies are inefficient, need to use ~30% more energy to do action
      let work = (force * distance) * 1.3

      // joules to calories
      workout.calories = (reps * work) / 4184
      break
    }
    case "Overhead Press": {
      let armWeight = weight 
      lifestyle.sex == "Male" ? armWeight *= .057 : armWeight *= .049
      
    }
  }

  return workout
}