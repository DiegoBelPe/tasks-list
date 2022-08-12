import { useState } from "react";
import './App.css';
import logo from './logo.svg';

interface Props {
  title: string;
}

interface Task {
  id: number;
  title: string;
  description : string;
  completed: boolean;
}

export function App({title}: Props) {
  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title : "Learn React title with typescript",
    description : "Learn React",
    completed: false
  }]);
  return (
    <div className="bg-dark" style={{height: '100vh'}}>
      <nav className=" navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/">
            <img src={logo} alt="react-logo" />
            {title}
          </a>
        </div>

      </nav>
      <h1>{title}</h1>
      {tasks.map(task => (
        <div>{task.title}</div>
      ))}
    </div>
  );
}


