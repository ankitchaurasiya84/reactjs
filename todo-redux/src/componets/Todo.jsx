import { React, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice'; // Adjust path as needed



const Todo = () => {
const data = useSelector(state => state.todos);
const dispatch = useDispatch();
  //const [data, setData] = useState([]);
  const [add, setAdd] = useState("");
  const [edit, setEdit] = useState();
  const [indexI, setIndexI] = useState("");
  //OK
  const handleSubmit = (e) => {
    e.preventDefault();
    if (add.trim() !== "") {
     // setData([...data, { id: data.length + 1, note: add }]);
     dispatch(addTodo(add));
      setAdd("");
      console.log(data);
    }
  };
  //OK
  const handleDelete = (id1) => {
    const updateddata = data.filter((item) => item.id !== id1.id);
    setData(updateddata);
  };

  const handleEdit = (item) => {
    setEdit(item.note);
    setIndexI(item.id);
  };
  const editadd = (e) => {
    e.preventDefault();
  const updated=data.map((i)=>{
    return  indexI===i.id?{...i,note:edit}:i
   
  })
      setData(updated);
      setEdit("");
      setIndexI(null);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter to add"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
      {data.map((item) => {
        return (
          <div >
            <li key={item.id}>
              {item.note}
              <button
                key={item.id}
                value={item}
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
              <button key={item.id} value={item} onClick={() => handleEdit(item)}>
                Edit
              </button>
            </li>
          </div>
        );
      })}
      <form onSubmit={editadd}>
        <input
          type="text"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
        />
        <button type="submit">edited</button>
      </form>
    </div>
  );
};

export default Todo;
