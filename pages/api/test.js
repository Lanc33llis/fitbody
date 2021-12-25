import nc from "next-connect"
import getRoutine from "../../lib/routine"

const handler = nc()

handler
  .post((req, res) => {
    const { user, current, shoulders, back, neck, chest, biceps, triceps, glutes,
    abs, quads, calves, hamstrings } = req.body

    let intensity = 100
    if (age >= 80) {
      intensity -= 80
    } else if (age >= 60) {
      intensity -= 60
    } else if (age >= 50) {
      intensity -= 30
    } else if (age >= 40) {
      intensity -= 15
    }

    if (current.overWeight && !current.obese) {
      intensity -= 10
    } else if (current.obese) {
      intensity -= 20
    }

    let easeIn = 0
    if (current.beginner) {
      easeIn = int(programLength / 3)
    } else if (current.intermediate) {
      easeIn = int(programLength / 4)
    }

    user.intensity = intensity
    user.easeIn = easeIn

  })

export default handler