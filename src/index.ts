import { TodoItem } from "./todoItem";

console.clear();

let item1: TodoItem = new TodoItem(1, "Order Mango", false);
let item2: TodoItem = new TodoItem(2, "Order Apple", false);

item1.printDetails();
item2.printDetails();
