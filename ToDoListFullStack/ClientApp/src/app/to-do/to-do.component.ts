import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDoList } from '../ToDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
  providers:[ToDoService]
})
export class ToDoComponent implements OnInit {

  searchTerm: string = "";
  results: ToDoList[] = [];
  constructor(private toDoDb: ToDoService) { }

  ngOnInit(): void {
  }

  searchToDoList():void{
    this.toDoDb.searchToDoByTaskName(this.searchTerm).subscribe(
      (response)=>{
        this.results = response;
      }
    );
  }

}
