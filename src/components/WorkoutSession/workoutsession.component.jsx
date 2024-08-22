import { useState } from "react";
import Exercise from "../Exercise/exercise.component";

const WorkoutSession = () => {
    const [exercises, setExercises] = useState([]);
    const [isConfigureExercise, setIsConfigureExercise] = useState(false);
    const [newExerciseConfig, setNewExerciseConfig] = useState({ name: '' })

    const handleAddExercise = () => {
        setIsConfigureExercise(true);
    }
    const handleConfigChange = (e) => {
        setNewExerciseConfig({
            ...newExerciseConfig,
            name: e.target.value
        })
    }
    const handleExerciseConfig = (e) => {
        e.preventDefault();
        setExercises([...exercises, newExerciseConfig])
        setIsConfigureExercise(false);
        setNewExerciseConfig({ name: '' })
    }
    return (
        <div>
            <h1>
                Workout #1
            </h1>
            {/* <Exercise exerciseName='Push Ups'/> */}
            <div>
                {exercises.map((exercise) => (
                    <Exercise exerciseName={exercise.name} />
                ))}
            </div>
            <button onClick={handleAddExercise}>Add Exercise</button>
            {isConfigureExercise && (
                <form onSubmit={handleExerciseConfig}>
                    <input type='text' onChange={handleConfigChange} />
                    <button type="submit">Add</button>
                </form>
            )}

            <div>
                <button>Finish Workout</button>
            </div>
        </div>
    )
}

export default WorkoutSession;