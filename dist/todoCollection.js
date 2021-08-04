"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todoItem_1 = require("./todoItem");
class TodoCollection {
    constructor(username, Items = []) {
        this.username = username;
        this.Items = Items;
        this.nextId = 1;
        this.itemMap = new Map();
        Items.forEach(item => this.itemMap.set(item.id, item));
    }
    addTodo(task) {
        // Class
        // let item: TodoItem = new TodoItem(this.nextId, task, false);
        // this.Items.push(item);
        // return this.nextId++;
        // Book
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }
    taskDone(taskId, complete) {
        let item = this.Items.find((item) => item.id === taskId);
        item.complete = true;
        let todoItem = this.getTodoById(taskId);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }
    printDetails() {
        this.Items.forEach((item) => item.printDetails());
    }
}
exports.TodoCollection = TodoCollection;
