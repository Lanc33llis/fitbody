const shoulders = (intensity) => {
  if (intensity <= 0) {
    return []
  } else if (intensity <= 10) {
    return [
      { exercise: "Arm Circle", rep: 10, cals: .1 }
    ]
  } else if (intensity <= 20) {
    return [
      { exercise: "Arm Circle", rep: 10, cals: .1 },
      { exercise: "Pushup", rep: 10, cals: 3.5 },
    ]
  } else if (intensity <= 30) {
    return [
      { exercise: "Pushup", rep: 10, cals: 3.5 },
      { exercise: "Overhead press", rep: 10, cals: 7 },
    ]
  } else if (intensity <= 40) {
    return [
      { exercise: "Overhead Press", rep: 10, cals: 7 },
      { exercise: "Dumbbell Fly", rep: 10, cals: 10 },
    ]
  } else if (intensity <= 50) {
    return [
      { exercise: "Pushup", rep: 10, cals: 3.5 },
      { exercise: "Overhead Press", rep: 10, cals: 7 },
      { exercise: "Dumbbell Fly", rep: 10, cals: 7 },
    ]
  } else if (intensity <= 60) {
    return [
      { exercise: "Overhead Press", rep: 10, cals: 7 },
      { exercise: "Dumbbell Row", rep: 10, cals: 7 },
      { exercise: "Dumbbell Fly", rep: 10, cals: 7 },
    ]
  } else if (intensity <= 70) {
    return [
      { exercise: "Dumbbell Lateral Raise", rep: 10, cals: 7 },
      { exercise: "Overhead Press", rep: 10, cals: 7 },
      { exercise: "Dumbbell Fly", rep: 10, cals: 7 },
    ]
  } else if (intensity <= 80) {
    return [
      { exercise: "Dumbbell Lateral Raise", rep: 10, cals: 7 },
      { exercise: "Dumbbell Row", rep: 10, cals: 7 },
      { exercise: "Dumbbell Fly", rep: 10, cals: 7 },
      { exercise: "Thruster", rep: 5, cals: 12 },
    ]
  }
}
export function shouldersExercises(caloriesToBurn, intensity) {
  let exercises = shoulders.map((e) => ({...e, sets: 0, totalCals: 0}))
  let i = 0
  while (caloriesToBurn > 0) {
    exercises[i] = {...exercises[i], sets: exercises[i].sets + 1, totalCals: exercises[i].totalCals + exercises[i].cals}
    caloriesToBurn -= exercises[i].cals
    i = (i + 1) % exercises.length
  }
}

export function backExercises(caloriesToBurn, intensity) {

}

export function neckExercises(caloriesToBurn, intensity) {

}

export function chestExercises(caloriesToBurn, intensity) {

}

export function bicepsExercises(caloriesToBurn, intensity) {

}

export function tricepsExercises(caloriesToBurn, intensity) {

}

export function glutesExercises(caloriesToBurn, intensity) {

}

export function absExercises(caloriesToBurn, intensity) {

}

export function quadsExercises(caloriesToBurn, intensity) {

}

export function calvesExercises(caloriesToBurn, intensity) {

}

export function hamstringsExercises(caloriesToBurn, intensity) {

}

export function cardioExercises(caloriesToBurn, intensity) {

}

export function strengthExercises(caloriesToBurn, intensity) {

}

export function flexibilityExercises(caloriesToBurn, intensity) {

}

export function balanceExercises(caloriesToBurn, intensity) {

}

export function mobilityExercises(caloriesToBurn, intensity) {

}