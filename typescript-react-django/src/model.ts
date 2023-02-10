// This file contains the interface for the Task model
// The interface is used to define the type of the data
// that is returned from the API
// The interface is exported so that it can be used in other files

export interface Task {
    id: number;
    task: string;
    isDone: boolean;
}