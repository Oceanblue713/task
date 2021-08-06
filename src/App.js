import Header from "./components/Header";
import Tasks from "./components/Tasks";
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
