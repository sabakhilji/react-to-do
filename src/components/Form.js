import { useState } from "react"; 

function Form(props) {
    const [name, setName] = useState("");
    function handleChange(e) {
        setName(e.target.value);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
      }
    
    return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label htmlFor="new-todo-input" className='w-full mb-4 p-3 leading-lg font-light text-center'>
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className=" w-full p-8 border-2 border-black border-solid" 
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
