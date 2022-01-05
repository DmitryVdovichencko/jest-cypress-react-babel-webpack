import React from "react"
import {render, fireEvent, screen } from "@testing-library/react"
import Calculator from "../calculator"

test('renders', ()=>{
	render(<Calculator />)
  const clearButton = screen.getByText('AC')

  fireEvent.click(screen.getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})