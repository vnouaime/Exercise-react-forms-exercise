import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Todolist } from './Todolist'

function addTodo(todoList, todo="Testing Testing") {
    const todoInput = todoList.getByLabelText("Todo")
    const submitBtn = todoList.queryByText("Add Todo")

    fireEvent.change(todoInput, { target: { value: todoInput}})
    fireEvent.click(submitBtn)
}

test('smoke test of Todolist', () => {
    render(<Todolist />)
})

it("matches snapshot", function() {
    const {asFragment} = render(<Todolist />);
    expect(asFragment()).toMatchSnapshot();
});

it("adds a new todo", function() {
    const todoList = render(<Todolist />)
    expect(todoList.queryByText("X")).not.toBeInTheDocument();
    addTodo(todoList)

    const deleteButton = todoList.getByText("X");
    expect(deleteButton).toBeInTheDocument();
    expect(todoList.queryByText("Testing Testing"))

    expect(todoList.getAllByDisplayValue("")).toHaveLength(1);
})

it("removes a todo", function() {
    const todoList = render(<Todolist />);
    addTodo(todoList);

    const deleteButton = todoList.getByText("X");
    fireEvent.click(deleteButton);
    expect(deleteButton).not.toBeInTheDocument();
})
