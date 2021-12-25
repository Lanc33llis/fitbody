import "./exercises.js"

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
      shouldersExercises(pt * shoulders, intensity),
      backExercises(pt * back, intensity),
      neckExercises(pt * neck, intensity),
      chestExercises(pt * chest, intensity),
      bicepsExercises(pt * biceps, intensity),
      tricepsExercises(pt * triceps, intensity),
      glutesExercises(pt * glutes, intensity),
      absExercises(pt * abs, intensity),
      quadsExercises(pt * quads, intensity),
      calvesExercises(pt * calves, intensity),
      hamstringsExercises(pt * hamstrings, intensity)
    ]

    routine += [{week: i + 1, workout}]
  }

  return routine
}