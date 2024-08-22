import { useState } from "react";
import Exercise from "../Exercise/exercise.component";
import Creatable from 'react-select/creatable';

const WorkoutSession = () => {
    const defaultExercises = [
        {value: 'benchpress', label: 'Bench Press'},
        {value: 'squat', label: 'Squat'},
        {value: 'deadlift', label: 'Deadlift'},
        {value: 'pushups', label: 'Push Ups'},
        {value: 'pullups', label: 'Pull Ups'}
    ]

    //exercises for current session
    const [exercises, setExercises] = useState([]);
    const [isConfigureExercise, setIsConfigureExercise] = useState(false);
    const [newExerciseConfig, setNewExerciseConfig] = useState({ name: '' })

    const handleAddExercise = () => {
        setIsConfigureExercise(true);
    }
    const handleConfigChange = (e) => {
        setNewExerciseConfig({
            ...newExerciseConfig,
            name: e.label
        })
    }
    const handleExerciseConfig = (e) => {
        const newExercise = newExerciseConfig.name

        const nameExists = exercises.some(exer => exer.name === newExercise);
        if (!nameExists && newExercise !=='') {
            setExercises([...exercises, newExerciseConfig])
        }
        setIsConfigureExercise(false);
        setNewExerciseConfig({ name: '' })
    }
    return (
        <div>
            <h1>
                Workout #1
            </h1>
            <div>
                {exercises.map((exercise) => (
                    <Exercise exerciseName={exercise.name} />
                ))}
            </div>
            <button onClick={handleAddExercise}>Add Exercise</button>
            {isConfigureExercise && (
                <form onSubmit={handleExerciseConfig}>
                    <Creatable options={defaultExercises} onChange={handleConfigChange}/>
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
//should add all exercise and workout data after workout finishes. If user created a new exercise while working out, it should also be added after workout is finished