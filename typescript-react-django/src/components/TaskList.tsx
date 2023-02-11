import React from 'react';
import { Task } from './model/model';
import SingleTask from './SingleTask';
import { Droppable } from 'react-beautiful-dnd';

// Interface is a way to define the properties that are passed into a component
// Props is the name of the interface
interface props {
    tasks: Array<Task>;
    setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>;
    setCompletedTasks: React.Dispatch<React.SetStateAction<Array<Task>>>;
    CompletedTasks: Array<Task>;
}

// React.FC is a type that defines the component as a functional component
// This is the same as React.FunctionalComponent
// The props interface is passed in as a type, this is the same as passing in the props as a parameter, but it is more concise
// Droppable is a react-beautiful-dnd component that allows for drag and drop functionality
const TaskList: React.FC<props> = ({
    tasks, 
    setTasks, 
    CompletedTasks, 
    setCompletedTasks, 
    }) => {
    // innerRef is a reference to the div that is being rendered
    // snapshot is an object that contains information about the state of the component
    // snapshot.isDraggingOver is a boolean that is true if the component is being dragged over
    // tasks?.map is a map function that maps over the tasks array
    // The index is the index of the task in the array
    // The task is the task that is being mapped over
    // The key is the id of the task
    // The setTasks is a function that is used to set the tasks array
    return (
    <div className="container">
        <Droppable droppableId="TaskList">
        {(provided, snapshot) => (
            <div
                className={`tasks ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
            >
            <span className="tasks__heading">Active Tasks</span>
            {tasks?.map((task, index) => (
                <SingleTask
                index={index}
                tasks={tasks}
                task={task}
                key={task.id}
                setTasks={setTasks}
                />
            ))}
            {provided.placeholder}
            </div>
        )}
        </Droppable>
        <Droppable droppableId="TasksRemove">
        {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`tasks  ${
                    snapshot.isDraggingOver ? "dragcomplete" : "remove"
                }`}
                >
                <span className="tasks__heading">Completed Tasks</span>
                {CompletedTasks?.map((task, index) => (
                <SingleTask
                    index={index}
                    tasks={CompletedTasks}
                    task={task}
                    key={task.id}
                    setTasks={setCompletedTasks}
                />
                ))}
                {provided.placeholder}
            </div>
        )}
        </Droppable>
    </div>
    );
};
        
export default TaskList;