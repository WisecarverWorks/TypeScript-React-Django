import React, { useState, useEffect} from 'react';
import { useRef } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Task } from './model/model';
import { Draggable } from 'react-beautiful-dnd';


const SingleTask: React.FC<{
    index: number;
    task: Task;
    tasks: Array<Task>;
    // React.SetStateAction is a generic type that takes in a type and returns a type
    setTasks: React.Dispatch<React.SetStateAction<Array<Task>>>;
  }> = ({index, task, tasks, setTasks}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.task);
    // useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
    // The returned object will persist for the full lifetime of the component.
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      inputRef.current?.focus();
      
    }, [edit]);
    // handleEdit is a function that takes in an event and an id
    // The event is the event that is passed in when the form is submitted
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTasks(
            tasks.map((task) => (task.id === id ? {...task, task: editTask} : task))
        );
        setEdit(false);
    };
    // handleDelete is a function that takes in an id
    // The id is the id of the task that is to be deleted
    const handleDelete = (id: number) => {
        setTasks(tasks.filter((task: Task) => task.id !== id));
    };
    // handleDone is a function that takes in an id
    // The id is the id of the task that is to be marked as done
    const handleDone = (id: number) => {
        setTasks(
            tasks.map((task) => (task.id === id ? {...task, isDone: !task.isDone} : task))
        );
    };

    // Draggable is a component that is used to make a component draggable
    // draggableId is the id of the draggable component
    // index is the index of the draggable component
    // provided is an object that contains the props that need to be passed into the draggable component
    // snapshot is an object that contains information about the state of the draggable component
    // provided.draggableProps is the props that need to be passed into the draggable component
    // AiFillEdit is an icon from react-icons. It is used to represent the edit icon

    return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => handleEdit(e, task.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`tasks__single ${snapshot.isDragging ? "drag" : ""}`}
        >
          {edit ? (
            <input
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
              className="tasks__single--text"
              ref={inputRef}
            />
          ) : task.isDone ? (
            <s className="tasks__single--text">{task.task}</s>
          ) : (
            <span className="tasks__single--text">{task.task}</span>
          )}
          <div>
            <span
              className="icon"
              onClick={() => {
                if (!edit && !task.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(task.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(task.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTask;

