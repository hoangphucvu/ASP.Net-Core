﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.AppServices.Dtos;
using TodoApp.AppServices.Extensions;
using TodoApp.AppServices.Interfaces;
using TodoApp.Domain.Entities;
using TodoApp.Domain.Filters;
using TodoApp.DomainServices.Interfaces;

namespace TodoApp.AppServices
{
    internal class TodoAppService : ITodoAppService
    {
        private readonly ITodoDomainService service;

        public TodoAppService(ITodoDomainService service)
        {
            this.service = service;
        }

        public TodoDto Create(TodoDto todo)
        {
            var result = service.Create(todo.MapTo<Todo>());
            return result.MapTo<TodoDto>();
        }

        public IEnumerable<TodoDto> List(TodoFilterDto filter)
        {
            return service.List(filter.MapTo<TodoFilter>()).EnumerableTo<TodoDto>();
        }

        public TodoDto GetById(int id)
        {
            return service.GetById(id).MapTo<TodoDto>();
        }

        public bool Update(TodoDto todo)
        {
            return service.Update(todo.MapTo<Todo>());
        }

        public bool Delete(int id)
        {
            return service.Delete(id);
        }
    }
}