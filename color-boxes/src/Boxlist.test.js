import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Boxlist } from './Boxlist'

function addBox(boxList, backgroundColor="blue", width="100", height="100") {
    const backgroundColorInput = boxList.getByLabelText("Background Color")
    const widthInput = boxList.getByLabelText("Width (pixels)")
    const heightInput = boxList.getByLabelText("Height (pixels)")
    const submitBtn = boxList.queryByText("Add Box")
    fireEvent.change(backgroundColorInput, { target: { value: backgroundColor}})
    fireEvent.change(widthInput, { target: { value: width}})
    fireEvent.change(heightInput, { target: { value: height}})
    fireEvent.click(submitBtn)
}

test('smoke test of Boxlist', () => {
    render(<Boxlist />)
})

it("matches snapshot", function() {
    const {asFragment} = render(<Boxlist />);
    expect(asFragment()).toMatchSnapshot();
});

it("adds a new box", function() {
    const boxList = render(<Boxlist />)
    expect(boxList.queryByText("X")).not.toBeInTheDocument();
    addBox(boxList)

    const deleteButton = boxList.getByText("X");
    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton.previousSibling).toHaveStyle(`
    background-color: blue;
    width: 100px;
    height: 100px;
  `);

    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
})

it("removes a box", function() {
    const boxList = render(<Boxlist />);
    addBox(boxList);

    const deleteButton = boxList.getByText("X");
    fireEvent.click(deleteButton);
    expect(deleteButton).not.toBeInTheDocument();
})
