// import { TodoItem } from "./todoItem";

// console.clear();

// let item1: TodoItem = new TodoItem(1, "Order Mango", false);
// let item2: TodoItem = new TodoItem(2, "Order Apple", false);

// item1.printDetails();
// item2.printDetails();

// itemCollection //
import { ItemCollection } from "./itemCollection";

console.clear();

let col1:ItemCollection = new ItemCollection();

col1.addTodo("Puchase Mango");
col1.addTodo("Eat Biryani");
col1.addTodo("Tikka");

col1.taskDone(2);
col1.taskDone(1);
col1.taskDone(3);

col1.printDetails();
