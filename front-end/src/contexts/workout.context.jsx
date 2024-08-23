import { createContext, useState } from "react"

export const WorkoutContext = createContext ({
    workout: false,
    setWorkout: () => null
})


export const WorkoutProvider = ({children}) => {
    const [ workout, setWorkout ] = useState(false);
    const value = { workout, setWorkout };

    return <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
}