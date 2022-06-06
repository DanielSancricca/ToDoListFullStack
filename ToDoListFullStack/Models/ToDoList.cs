using System;
using System.Collections.Generic;

namespace ToDoListFullStack.Models
{
    public partial class ToDoList
    {
        public int Id { get; set; }
        public string? TaskName { get; set; }
        public bool? Completed { get; set; }
    }
}
