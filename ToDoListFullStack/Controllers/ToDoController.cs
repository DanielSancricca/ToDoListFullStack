using Microsoft.AspNetCore.Mvc;
using ToDoListFullStack.Models;

namespace ToDoListFullStack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoController : ControllerBase
    {
        ToDoContext db = new ToDoContext();

        [HttpGet("GetToDoList")]
        public List<ToDoList> GetToDoList()
        {
            return db.ToDoLists.ToList();
        }

        [HttpGet("SearchByTaskName/{TaskName}")]
        public List<ToDoList>SearchByTaskName(string TaskName)
        {
            List<ToDoList>ToDos = db.ToDoLists.Where(t=>t.TaskName.Contains(TaskName)).ToList();
            return ToDos;
        }

        [HttpGet("GetToDoById/{id}")]
        public ToDoList GetListItem(int id)
        {
            return db.ToDoLists.Where(x => x.Id == id).First();
        }

        [HttpPost("CreateToDo/")]
        public string CreateToDo(ToDoList l)
        {
            db.ToDoLists.Add(l);
            db.SaveChanges();
            return l.TaskName + "has been succesfully added to the database";
        }

        [HttpDelete("DeleteToDo/{id}")]
        public string DeleteToDo(int id)
        {
            ToDoList l = db.ToDoLists.Find(id);
            db.ToDoLists.Remove(l);
            db.SaveChanges();
            return $"The item at id {id} has been deleted successfully";
        }

        [HttpPut("UpdateToDo/{id}")]
        public string UpdateToDo(int id, ToDoList updatedInfo)
        {
            ToDoList l = db.ToDoLists.Find(id);

            l.TaskName = updatedInfo.TaskName;
            l.Completed = updatedInfo.Completed;

            db.ToDoLists.Update(l);
            db.SaveChanges();

            return $"The movie {l.TaskName} has been updated at {l.Id} id";


        }
    }
}
