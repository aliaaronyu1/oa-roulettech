import { useContext } from "react";
import { Fragment } from "react";

import WorkoutSession from "../../components/WorkoutSession/workoutsession.component";
import { WorkoutContext } from "../../contexts/workout.context";

const Home = () => {
    const { workout, setWorkout } = useContext(WorkoutContext);

    const startWorkout = () => {
        setWorkout(true)
    }

    return (
        <Fragment>
            {
                workout ? (<WorkoutSession/>) : 
                <button onClick={startWorkout}>Start Workout</button>
            }
        </Fragment>
    )
}

export default Home;