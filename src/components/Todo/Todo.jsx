import React, { useState,useEffect} from "react";
import "./todo.css";
import Logo from "../../assets/logo.png";
import { GoTrash } from "react-icons/go";

const Todo = () => {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  

  const formatTime = () => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'AM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    return `${hours}:${minutes} ${ampm}`;
  };
  

  const getDayOfWeek = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    return days[date.getDay()];
  };
  

  const getDate = () => {
    return date.getDate();
  };
  const [todos, setTodos] = useState([
    "Dinner",
    "Walk with Coby",
    "Buy Groceries",
    "Go to repair shop",
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <div className="image">
        <img src={Logo} alt="Logo" />
        <p>{getDayOfWeek()}</p>
        <h6>{getDate()}</h6>
        <h5>{formatTime()}</h5>
      </div>

      <div className="input-line">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a task"
        />
        <button onClick={addTodo}>+</button>
      </div>

      <div className="todos-list">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            <div className="amd">
            <span className="din">{todo}</span>
            <span>Today at 8:00 PM</span>
            </div>
            <div className="checks">
              <input type="checkbox" name="" id="asd" />
              <GoTrash id="abdi" onClick={() => deleteTodo(index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
