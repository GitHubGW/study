const { createStore } = require("redux");

const form = document.querySelector('form');
const todoInput = document.getElementById('todoInput');
const todoSubmit = document.getElementById('todoSubmit');
const ul = document.querySelector('ul');

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";


const todoModifier = (state=[], action) => {
  // console.log(state);
  // console.log(action);

  switch (action.type){
    case ADD_TODO:
      const newToDoObj = {text: action.text, id: Date.now()}
      return [newToDoObj, ...state];
    case DELETE_TODO:
      return state.filter((stateObj)=>{
        return stateObj.id !== parseInt(action.id);
      });
    default:
      return state;
  }
  
}

const todoStore = createStore(todoModifier);

const handleDeleteToDo = (event) => {
  // console.log(event.target.parentNode.id);
  todoStore.dispatch({type: DELETE_TODO, id: event.target.parentNode.id});
  // console.log(todoStore.getState());
}

const handlePaintToDo = () => {
  const toDoArray=todoStore.getState();
  // console.log(toDoArray);
  ul.innerHTML="";
  
  toDoArray.forEach((toDo)=>{
    // console.log(toDo);

    const li = document.createElement('li');
    const button = document.createElement('button');

    li.id=toDo.id;
    li.innerHTML=`<i class="fas fa-chevron-circle-right"></i> ${toDo.text}`;

    button.innerHTML="❌";
    button.addEventListener('click',handleDeleteToDo);

    li.appendChild(button);
    ul.appendChild(li);
  })

}

const handleToDoInput = (event)=>{
  event.preventDefault();
  const todoInputValue = todoInput.value;
  todoInput.value="";
  todoStore.dispatch({type: ADD_TODO, text: todoInputValue})
}

todoStore.subscribe(handlePaintToDo);

todoSubmit.addEventListener('click',handleToDoInput);