const WorkoutSet = ({setNumber}) => {

    return (
        <div>
            <label>Set #{setNumber}</label>
            <input type='number'/>
            <label>Reps</label>
            <input type='number'/>
        </div>

    )
}
export default WorkoutSet;