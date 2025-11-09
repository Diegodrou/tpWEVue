export class TODO{
    id: number
    title: string
    done: boolean
    dueDate?: Date

    constructor(id: number, title: string, done = false, dueDate?: Date) {
        this.id = id;
        this.title = title;
        this.done = done;
        this.dueDate = dueDate;
    }

    toggle() {
        
        this.done = !this.done;
    
    }

    isLate(): boolean {
        if (!this.dueDate) return false;
        const now = new Date();
        return !this.done && this.dueDate < now;
    }
    
}

export class TodoList{
    todo_list:TODO[] = [];

    ajouterTache(title = "",done = false,dueDate = undefined){
        
        const id = this.todo_list.length + 1;
        const nouvelleTache = new TODO(id, title, done, dueDate);

        this.todo_list.push(nouvelleTache);
    }

    getTacheRestante(){
        var result:number = 0;
        for(let i = 0;i<this.todo_list.length;i++){
            if(!this.todo_list[i]?.done){
                result++;
            }
        }
        return result;
    }
}