import Exercise from "../Exercise/exercise.component";

const WorkoutSession = () => {
    return (
        <div>
            <h1>
                Workout #1
            </h1>
            <Exercise/>
            <button>Add Exercise</button>
            <div>
                <button>Finish Workout</button>
            </div>
        </div>
    )
}

export default WorkoutSession;