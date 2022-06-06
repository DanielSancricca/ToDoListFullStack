import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDoList } from '../ToDo';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css'],
  providers:[ToDoService]
})
export class CreateToDoComponent implements OnInit {

  newToDo:ToDoList;
  constructor(private toDoService: ToDoService) {
    this.newToDo = new ToDoList(0,"",false);
   }

  ngOnInit(): void {
  }

  CreateToDo(){
    this.toDoService.createToDo(this.newToDo).subscribe(
      (results)=>{console.log("Creation worked")}
    )
  }
}
