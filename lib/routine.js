import * as Exercises from "./exercises.js"

export default function getRoutine(user, goals, diet, health, disabilities, shoulders = 0,
  back = 0, neck = 0, chest = 0, biceps = 0, triceps = 0, glutes = 0, abs = 0, 
  quads = 0, calves = 0, hamstrings = 0) {
  const { weight, intensity, programLength, easeIn } = user

  // about 20k cals per pound loss
  let caloriesNeededToBurn = (goals.weight - weight) * 20000
  
  let routine = []

  for (let i = 0; i < programLength; i++) {
    let caloriesPerWeek = caloriesNeededToBurn / (programLength - i)
    if (easeIn > 0) {
      caloriesPerWeek *= .75
      easeIn -= 1
    }
    caloriesNeededToBurn -= caloriesPerWeek

    let pts = shoulders + back + neck + chest + biceps 
    + triceps + glutes + abs + quads + calves + hamstrings

    let pt = caloriesNeededToBurn / pts

    workout = [
      Exercises.shouldersExercises(user, pt * shoulders, intensity),
      Exercises.backExercises(user, pt * back, intensity),
      Exercises.neckExercises(user, pt * neck, intensity),
      Exercises.chestExercises(user, pt * chest, intensity),
      Exercises.bicepsExercises(user, pt * biceps, intensity),
      Exercises.tricepsExercises(user, pt * triceps, intensity),
      Exercises.glutesExercises(user, pt * glutes, intensity),
      Exercises.absExercises(user, pt * abs, intensity),
      Exercises.quadsExercises(user, pt * quads, intensity),
      Exercises.calvesExercises(user, pt * calves, intensity),
      Exercises.hamstringsExercises(user, pt * hamstrings, intensity)
    ]

    routine += [{week: i + 1, workout}]
  }

  return routine
}