"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
console.clear();
let item1 = new todoItem_1.TodoItem(1, "Order Mango", false);
let item2 = new todoItem_1.TodoItem(2, "Order Apple", false);
item1.printDetails();
item2.printDetails();
