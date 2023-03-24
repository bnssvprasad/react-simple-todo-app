
import { useState } from "react";

const TaskManager = () => {
    const [currentTask,setCurrentTask] = useState('');
    const [allTasks,setAllTasks] = useState([]);
    const [editingIndex,setEditingIndex] = useState(undefined);
    const handleDelete = (indexvalue) =>     {
    const newAllTask = allTasks.filter((allTasks,index) => index !== indexvalue );
    setAllTasks(newAllTask);
    }
    const handleEdit = (index) => {
setEditingIndex(index);
setCurrentTask(allTasks[index]);
    }
    const handleSubmit = () => {
        if (currentTask.length > 0) {
        if (editingIndex !== undefined){
            const cloneTask = [...allTasks];
            cloneTask[editingIndex] = currentTask;
            setAllTasks(cloneTask);
            setCurrentTask('')
            setEditingIndex(undefined);


        }else {
            const newAllTask = [...allTasks,currentTask];
            setAllTasks(newAllTask);
            setCurrentTask('')
        }
    }
    }
    const handleOnChange = (event) => {
        if (event.target.value.length < 50){
            setCurrentTask(event.target.value);

        }
    }

    
       return (
        <div style= {{width:"700px"}}>
        <h1>TASK MANAGER</h1>
        <div className="mb-3">
  <input
   type="text"  
   placeholder="Enter task" 
    className="form-control"
    value={currentTask}
    onChange = {handleOnChange}
    ></input> 
</div>
<button 
type="button"
 className="btn btn-primary mb-3"
onClick={handleSubmit}
>submit</button>
<table style={{color: "white"}} className="table  ">
  <thead>
    <tr>
    <th>SI</th>
    <th>TASK</th>
    <th>ACTION</th>
    </tr>
  </thead>
  <tbody>
    {
        allTasks.map((task,index) => {
            return(
                <tr key={index}>
                <th>{index + 1}</th>
                <td>{task}</td>
                <td>
                    <button
                     className="btn btn-secondary " 
                     onClick={() =>{
                        handleEdit(index)
                     }}
                     >Edit</button>
                    <button
                     className="btn btn-danger"
                     onClick= {  () => {

                      handleDelete(index) }}
                     >Delete</button>
                </td>
              </tr>
            )
     })
    }
    </tbody>
</table>
  </div>
    )
}
export default TaskManager;