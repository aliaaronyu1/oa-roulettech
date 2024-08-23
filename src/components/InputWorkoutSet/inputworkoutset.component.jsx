const InputWorkoutSet = ({ workoutSet, handleInputChange, handleAddSet, handleRemoveSet }) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Set</th>
                        <th>Weight (lb)</th>
                        <th>Reps</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {workoutSet.map((set, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><input type="number" value={set.lb} onChange={(e) => handleInputChange(index, 'lb', e.target.value)} /></td>
                            <td><input type="number" value={set.reps} onChange={(e) => handleInputChange(index, 'reps', e.target.value)} /></td>
                            <td><button className="btn btn-danger" onClick={() => handleRemoveSet(index)}>X</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={handleAddSet}>Add Set</button>
        </div>

    )
}
export default InputWorkoutSet;