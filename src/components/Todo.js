import { addTodo, deleteTodo, removeTodo } from "../actions/Index";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css";
export const Todo = () => {
  const [inputData, setinputData] = useState("");
  const list = useSelector((state) => state.Todoreducers.list);
  const dispatch = useDispatch();
  console.log(list)
  return (
    <div className="bg-bgpurple w-[100%] h-screen  flex justify-center font-bold text-3xl text-center flex-col">
      <p>Add Your List Here ✌️</p>
      <div className="mt-5   w-96 rounded-full bg-white flex justify-center items-center mx-auto">  
        <input
          className="rounded-full h-16 w-80 font-semibold outline-none text-base text-black"
          text="text"
          placeholder="✍️ additems..."
          value={inputData}
          required
          onChange={(event) => setinputData(event.target.value)}
        />
        <img
          className=" h-7 cursor-pointer"
          src="./images/plus.svg"
          alt="/"
          onClick={() => dispatch(addTodo(inputData), setinputData(""))}
        ></img>
      </div>
      {list.map((elem) => {
        return(
          <div
          className="mt-5  outline-none w-96 h-16  rounded-full bg-white  flex justify-between items-center mx-auto"
          key={elem.id}
        >
          <h1 className="text-2xl  ml-5 text-black">{elem.data}</h1>
          <img
            className=" h-7 cursor-pointer mr-5"
            src="./images/trash.svg"
            alt="/"
            onClick={() => dispatch(deleteTodo(elem.id))}
          ></img>
        </div>

        )
      })}
      <div className="flex justify-center items-center mx-auto">
        <button className="bg-red-700  text-white text-3xl font-bold text-center rounded-full mt-8 h-16 w-56 hover:bg-gray-400 "
        onClick={()=>dispatch(removeTodo())}>
        Remove All
        </button>
      </div>
    </div>
  );
};
