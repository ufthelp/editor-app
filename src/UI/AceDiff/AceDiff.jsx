import React, { Component } from "react";
import AceDiffernce from 'ace-diff';

// optionally, include CSS, or use your own
import 'ace-diff/dist/ace-diff.min.css';
// Or use the dark mode
//import 'ace-diff/dist/ace-diff-dark.min.css';
import './AceDiff.css'

export default class AceDiff extends Component {
  componentDidMount() {
    new AceDiffernce({
     element: ".acediff",
     left: {
       content: "your first file content here"
     },
     right: {
       content: "your second file content here"
     }
   });
 }


 render() {
   return <div className="acediff" />;
 }
}