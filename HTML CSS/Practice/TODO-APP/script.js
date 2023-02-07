const add_todo = () => {
  console.log("added");

  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;

  let todos = [];
  const localTodo = localStorage.getItem("todos");

  if (localTodo != null) {
    // todos = JSON.parse(localTodo);
    todos = JSON.parse(localTodo);
  }

  let todoObject = {
    title: title,
    desc: desc,
    id: Math.trunc(Math.random() * 1000),
  };
  todos.push(todoObject);
  localStorage.setItem("todos", JSON.stringify(todos));
  show_todo();
};

const show_todo = () => {
  const todoString = localStorage.getItem("todos");

  let content = "";
  if (todoString === null) {
    //no todo
    content += "<h1 class='text-center' >No todo to show!</h1>";
  } else {
    let todos = JSON.parse(todoString);
    for (let todo of todos.reverse()) {
      content += `
        <div class="card mt-3" >
          <div class="card-body">
            <h3>${todo.title}</h3>
            <p>${todo.desc}</p>
          </div>
        </div> `;
    }
  }
  document.getElementById("main-content").innerHTML = content;
};

show_todo();
