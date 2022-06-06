import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ToDoList } from './ToDo';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  urlRoot: string;

  constructor(private http: HttpClient, @Inject('Base_URL') baseURL:string) { 
    this.urlRoot = baseURL;
  }
  getToDoById(id:number){
    return this.http.get<ToDoList>(this.urlRoot + "ToDoLists/GetToDoById/" + id);
  }
  searchToDoByTaskName(TaskName: string):Observable<ToDoList[]>{
    return this.http.get<ToDoList[]>(this.urlRoot + "ToDoLists/SearchByTaskName/" + TaskName);
  }
  createToDo(t:ToDoList){
    return this.http.post<String>(this.urlRoot + "ToDoLists/CreateToDo/",t);
  }
  deleteToDo(id:number){
    return this.http.delete<String>(this.urlRoot + "ToDoLists/DeleteToDo/" + id);
  }
  updateToDo(id:number, body:ToDoList){
    return this.http.put<String>(this.urlRoot + "ToDoLists/UpdateToDo/" + id, body);
  }
}
