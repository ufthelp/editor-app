import React, { Component } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise'; //enterprise trial



import DetailCellRender from "./DetailCellRender.jsx";

export default class AGGridExpandable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          field: "RuleId",
          width: 100
        },
        {
          field: "Logic",
          width: 90,
          cellRenderer: "DetailCellRender"
        }
       
      ],
      rowData: [
        {
          RuleId: "Rule1",
          Logic: 'IF(ACD_DCT_VBN_CCC)'
        },
        {
          RuleId: "Rule2",
          Logic: 'AND(ACD_DCT_VBN_CCC)'
        }
      ],
      frameworkComponents: { DetailCellRender: DetailCellRender },
      defaultColDef: {
        editable: true,
        resizable: true
      }
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  };


  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: "100%"
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            frameworkComponents={this.state.frameworkComponents}
            defaultColDef={this.state.defaultColDef}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
    );
  }
}