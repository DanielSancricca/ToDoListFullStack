export class ToDoList{
    id:number;
    TaskName:string;
    Completed:boolean;

    constructor(id:number, TaskName:string, Completed:boolean){
        this.id = id;
        this.TaskName = TaskName;
        this.Completed = Completed; 
        
    }
}