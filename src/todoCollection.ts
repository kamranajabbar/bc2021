import { TodoItem } from "./todoItem";

type ItemCounts = {
    total: number,
    incomplete: number
}

export class TodoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>();

    public constructor(public username: string, public Items: TodoItem[] = []) {
        Items.forEach(item => this.itemMap.set(item.id, item)); 
    }

    public addTodo(task: string): number {
        // Class
        // let item: TodoItem = new TodoItem(this.nextId, task, false);
        // this.Items.push(item);
        // return this.nextId++;

        // Book
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }

        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }

    public getTodoById(id: number): TodoItem {
        return this.itemMap.get(id);
    }

    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()]
        .filter(item => includeComplete || !item.complete);
    }

    public taskDone(taskId: number, complete: boolean): void {
        let item: TodoItem = this.Items.find((item) => item.id === taskId);
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
        })
    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        
        if (todoItem) {
            todoItem.complete = complete;
        }
    }

    getItemCounts(): ItemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
    }

    public printDetails(): void {
        this.Items.forEach((item: TodoItem) => item.printDetails())
    }
}