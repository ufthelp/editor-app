import React, { Component } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise'; //enterprise trial
import DetailCellRenderer from "./DetailCellRenderer.jsx";


class AGGridMasterDetail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          columnDefs: [
            {
              field: "name",
              cellRenderer: "agGroupCellRenderer"
            },
            { field: "account" },
            { field: "price" }
            
          ],
          detailCellRenderer: "myDetailCellRenderer",
        //   detailCellParams: {
        //     refreshGridCallback : function(){
        //         return "Sorry - no rows! at: " + new Date();
        //     }
        //   },
        //   detailRowHeight: 70,
          groupDefaultExpanded: -1,
          frameworkComponents: { myDetailCellRenderer: DetailCellRenderer  },
          rowData: [{
            name: "Toyota", account: "Celica", price: 35000, value: '30000'
          }, {
            name: "Ford", account: "Mondeo", price: 32000, value: '30000'
          }, {
            name: "Porsche", account: "Boxter", price: 72000, value: '30000'
          }],
          getRowHeight: function(params) {
            if (params.node && params.node.detail) {
              var offset = 80;
             var allDetailRowHeight = params.data.name.length * 10;
              return allDetailRowHeight + offset;
              return 180
            } else {
              return 60;
            }
          },
        };
      }
    
      onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
      };


  methodFromParent = (cell) => {
    alert("Parent Component Method from " + cell + "!");
  }
    
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
                masterDetail={true}
                detailCellRenderer={this.state.detailCellRenderer}
                detailCellParams = {this.state.detailCellParams}
                detailRowHeight={this.state.detailRowHeight}
                groupDefaultExpanded={this.state.groupDefaultExpanded}
                frameworkComponents={this.state.frameworkComponents}
                onGridReady={this.onGridReady}
                rowData={this.state.rowData}
                getRowHeight={this.state.getRowHeight}
                enableCellChangeFlash={true}
              />
            </div>
          </div>
        );
      }
}

export default AGGridMasterDetail;
