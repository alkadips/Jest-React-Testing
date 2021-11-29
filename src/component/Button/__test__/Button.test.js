import React from "react";
import ReactDOM from 'react-dom';
import Button from "./../Button";
import{render}from '@testing-library/react';
import renderer from 'react-test-renderer';



it("renders without crashing",()=>{
const div=document.createElement("div");
ReactDOM.render(<Button></Button>,div)
});
it("renders button correctally",()=>{
   const {getByTestId}= render(<Button label="click me please"/>)
   expect(getByTestId('button')).toHaveTextContent("click me please")
});

it("renders button correctally",()=>{
    const {getByTestId}= render(<Button label="save"/>)
    expect(getByTestId('button')).toHaveTextContent("save")
 });
 it("matches snapshot",()=>{
     const tree=renderer.create(<Button label="save"></Button>).toJSON();
     expect(tree).toMatchSnapshot();
 })