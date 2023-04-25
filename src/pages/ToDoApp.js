import React from "react";
import "../styles/ToDoApp.css";

function ToDoApp() {
  const [toDo, setToDo] = React.useState("");
  const [toDos, setToDos] = React.useState("");
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo == "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  return (
    <div className="background">
      <div className="background-cover" />
      <h2>H2 명작인데 외 않봄? ({toDos.length})</h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="TO-DO LISTS"
          maxLength={20}
        />
        <button className="btn">ADD TO DO</button>
      </form>
      <hr />
      <ul>
        {toDos && toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default ToDoApp;
