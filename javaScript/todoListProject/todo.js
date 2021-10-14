let input = prompt("what would you like to do?");
const todos = ['Collect Chicken Eggs', 'Clwan Litter Box'];

while (input !== "quit" && input !== "q") {
    if (input === "list") {
        let i = 1;
        for (todo of todos) {
            console.log(`${i++}. ` + todo);
        }
    }
    if (input === "new") {
        let todo = prompt("Please enter a new todo");
        todos.push(todo);
    }
    if (input === "delete") {
        todo = prompt("Please enter the todo that you want to delete");
        const index = todos.indexOf(todo);
        if (index > - 1) {
            todos.splice(index, 1);
        }
    }
    input = prompt("What would you like to do?");
}
console.log("Quited App");