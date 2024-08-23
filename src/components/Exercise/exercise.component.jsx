import { useState } from "react";
import InputWorkoutSet from "../InputWorkoutSet/inputworkoutset.component";

const Exercise = ({ exerciseName }) => {
    const [workoutSet, setWorkoutSet] = useState([{ lb: 0, reps: 0 }]);

    const handleAddSet = () => {
        setWorkoutSet([...workoutSet, { lb: 0, reps: 0 }])
    }
    const handleInputChange = (index, field, value) => {
        const newWorkoutSet = [...workoutSet]
        newWorkoutSet[index][field] = value
        setWorkoutSet(newWorkoutSet)
    }
    const handleRemoveSet = (index) => {
        const removedWorkoutSet = [...workoutSet];
        removedWorkoutSet.splice(index, 1)
        setWorkoutSet(removedWorkoutSet);
    }
    return (
        <div>
            <h3>{exerciseName}</h3>

            <div>
                <InputWorkoutSet workoutSet={workoutSet} handleInputChange={handleInputChange} handleAddSet={handleAddSet} handleRemoveSet={handleRemoveSet}/>
            </div>
        </div>
    )
}

export default Exercise;