
import './App.css';
import { useState } from "react";
import { logDOM } from '@testing-library/react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div>
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false, del: false }])} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {toDos.map((obj) => {
            if (obj.status === false && obj.del === false){
              return (
                <div className="todo">
                  <div className="left">
                    <input onChange={(e) => {
                      setToDos(toDos.filter(obj2 => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked
                        }
                        return obj2;
                      }))
                    }}
                      value={obj.status} type="checkbox" name="" id="" />
                    <p>{obj.text}</p>

                  </div>

                  <div className="right">
                    <i onClick={(e) => {
                      setToDos(
                        toDos.filter((item) => {
                          if (item.id === obj.id) {
                            return (item.del = true);
                          }
                          return item;
                        })
                      );
                    }} className="fas fa-times"></i>
                  </div>
                </div>
              )

            }
            return null
              
          })}

        </div>

      </div>
      {/* Completed tasks */}
      <div>

        <div className="subHeading">
          <br />
          <h2 style={{ backgroundColor: "green" }}>Completed </h2>
        </div>
        <div className="todos">
          {toDos.map((obj) => {
            if (obj.status) {
              return (
                <div className="todo">
                  <div className="left">
                    <p>{obj.text}</p>
                  </div>
                  <div className="right">
                    ✅
                  </div>
                </div>
              );
            }
            return null;

          })}
        </div>
      </div>

      {/* Cancelled tasks */}

      <div>

        <div className="subHeading">
          <br />
          <h2 style={{ backgroundColor: "red" }}>Cancelled </h2>
        </div>
        <div className="todos">
          {toDos.map((obj) => {
            if (obj.del) {
              return (
                <div className="todo">
                  <div className="left">
                    <p>{obj.text}</p>
                  </div>
                  <div className="right">
                    🛑
                  </div>
                </div>
              );
            }
            return null;

          })}

        </div>
      </div>

    </div>
  );
}

export default App;
