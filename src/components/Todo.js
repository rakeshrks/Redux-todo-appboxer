import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <div>
      <h4> Add your list here</h4>

      <div className="row g-2">
        <div className="col-auto">
          <input
            className="form-control form-control-md"
            type="text"
            placeholder="Add items"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-success mb-3"
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
          >
            +
          </button>
        </div>
      </div>

      {list.map((elem) => {
        return (
          <div className="row " key={elem.id}>
            <div className="col ">
              <h3 className=" bg-secondary text-white">{elem.data}</h3>
            </div>
            <div className="col">
              <button
                type="submit"
                className="btn btn-secondary mb-3"
                onClick={() => dispatch(deleteTodo(elem.id))}
              >
                -
              </button>
            </div>
          </div>
        );
      })}

      <button
        type="submit"
        className="btn btn-danger mb-3"
        onClick={() => dispatch(removeTodo())}
      >
        Remove All
      </button>
    </div>
  );
};

export default Todo;
