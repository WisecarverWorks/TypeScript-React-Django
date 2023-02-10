import React from 'react';

// Css Focus is used to style the input box when it is clicked on
// Css onset is used to style the input box when it is not clicked on
import './styles.css';


// Props is an interface that defines the properties that are passed into the component

// interface Props {
//     task: string;
//     setTask: React.Dispatch<React.SetStateAction<string>>;
// }
// export default function InputField({task, setTask}: Props) {
//   return (
//     <div>
//       < form className='input'>
//         <input className='input__box' type='text' placeholder='Add a task' />
//         </form>
//         <button className='input__submit' type='submit'>Add</button>
//     </div>
//   )
// }


// Here we move the props type in front of the passed in values and define the type of the function as a React 'Functional Component'
// This is the same as the above code

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

// e is the event that is passed in when the input box is clicked on
// e.target.value is the value of the input box

const InputField: React.FC<Props> = ({task, setTask, handleAdd}) => {
  return (
    <div>
      < form className='input' onSubmit={(e) => handleAdd(e)}>
        <input value={task}
            className='input__box'
            onChange={(e) => setTask(e.target.value)} 
            type='text' 
            placeholder='Add a task' />
        <button className="input_submit" type="submit">Add</button>
        </form>
    </div>
  )
}

export default InputField;

