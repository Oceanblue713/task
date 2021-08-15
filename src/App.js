import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Shopping',
      day: 'Aug 5th',
      reminder: false
    },
    {
      id: 2,
      text: 'Running',
      day: 'Sep 5th',
      reminder: false
    },
    {
      id: 3,
      text: 'Swimming',
      day: 'Jul 5th',
      reminder: true
    }
  ])

  // Add Task
  const addTask = (task) => {
    console.log(task);
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map( task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
                                 onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
