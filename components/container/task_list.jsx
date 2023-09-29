import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import { TaskForm } from '../pure/forms/taskForm';



const TaskListComponent = () => {

    const defaultTask1 = new Task("Primera tarea", "asfafsa", true, LEVELS.NORMAL)
    const defaultTask2 = new Task("Segunda tarea", "ssssss", false, LEVELS.URGENT)
    const defaultTask3 = new Task("Tercera tarea", "at", false, LEVELS.BLOQUING)

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("estado de tareas modificado")
        setLoading(false);
        return () => {
            console.log("asdasdas")
        };
    }, [tasks]);




    function completeTask(task) {
        console.log("tarea completada", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        setTasks(tempTask)
    }


    function deleteTask(task) {
        console.log("texto borrado", task)
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    function addTask(task) {
        console.log("tarea añadida", task)
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }



    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Pending</th>
                    </tr>

                </thead>
                <tbody>

                    {tasks.map((task, index,) => {
                        return (
                            <TaskComponent
                                key={index}
                                task={task}
                                complete={completeTask}
                                remove={deleteTask}>

                            </TaskComponent>

                        )
                    })}
                </tbody>
            </table>
        )
    }

    let tasksTable = <Table></Table>

    if (tasks.length > 0) {
        tasksTable = <Table></Table>
    } else {
        tasksTable = (
            <div>
                <h3>There are no task to show</h3>
                <h4> Please create one</h4>
            </div>

        )
    }


    return (
        <div>
            <div>
                <h1>Tareas:</h1>
            </div>
            <div>
                {tasksTable}
            </div>

            <div>
                <TaskForm add={addTask} length={tasks.length}></TaskForm>
            </div>
        </div>
    );
};



export default TaskListComponent;
