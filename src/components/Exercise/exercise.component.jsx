import { useState } from "react";
import WorkoutSet from "../WorkoutSet/workoutset.component";

const Exercise = ({exerciseName}) => {
    const [workoutSet, setWorkoutSet] = useState([{setNumber: 1}]);

    const addWorkoutSet = () => {
        setWorkoutSet([...workoutSet, { setNumber: workoutSet.length + 1 }])
    }
    return (
        <div>
            <h3>{exerciseName}</h3>

            <div>
                {workoutSet.map((set) => (
                    <WorkoutSet setNumber={set.setNumber} />
                ))}
                <button onClick={addWorkoutSet}>Add Set</button>

            </div>
        </div>
    )
}

export default Exercise;