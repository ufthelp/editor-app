import React, { Component } from 'react';
//ag-grid
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise'; //enterprise trial

import ChildMessageRenderer from "./childMessageRenderer.jsx";
import Icon from '../Icon';

import './AGTreeView.scss';

// https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/images/fire-minus.png
class AGTreeView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			columnDefs: [
        {
          headerName: 'filePath',
          field: "filePath",
          width: 100,
          hide: true,
          suppressToolPanel: true,
          autoHeight: true,
          
       },
				{
          headerName:'Click me',
					field: 'id',
					cellRenderer: 'childMessageRenderer',
					colId: 'params',
          width: 280,
          autoHeight: true,
				}
      ],
    //   getRowHeight: function(params) {
    //     debugger
    //     return 28 * (Math.floor(params.data.latinText.length / 60) + 1);
    //   },
			rowData: [
				{
					id: 1,
          filePath: [ 'Documents' ],
				},
				{
					id: 2,
					filePath: [ 'Documents', 'txt' ]
				},
				{
					id: 3,
					filePath: [ 'Documents', 'txt', 'notes.txt' ],
					dateModified: 'May 21 2017 01:50:00 PM',
					size: 14.7
				},
				{
					id: 4,
					filePath: [ 'Documents', 'pdf' ]
				},
				{
					id: 5,
					filePath: [ 'Documents', 'pdf', 'book.pdf' ],
					dateModified: 'May 20 2017 01:50:00 PM',
					size: 2.1
				},
				{
					id: 6,
					filePath: [ 'Documents', 'pdf', 'cv.pdf' ],
					dateModified: 'May 20 2016 11:50:00 PM',
					size: 2.4
				},
				{
					id: 7,
					filePath: [ 'Documents', 'xls' ]
				},
				{
					id: 8,
					filePath: [ 'Documents', 'xls', 'accounts.xls' ],
					dateModified: 'Aug 12 2016 10:50:00 AM',
					size: 4.3
				},
				{
					id: 9,
					filePath: [ 'Documents', 'stuff' ]
				},
				{
					id: 10,
					filePath: [ 'Documents', 'stuff', 'xyz.txt' ],
					dateModified: 'Jan 17 2016 08:03:00 PM',
					size: 1.1
				},
				{
					id: 11,
					filePath: [ 'Music', 'mp3', 'pop' ],
					dateModified: 'Sep 11 2016 08:03:00 PM',
					size: 14.3
				},
				{
					id: 12,
					filePath: [ 'temp.txt' ],
					dateModified: 'Aug 12 2016 10:50:00 PM',
					size: 101
				},
				{
					id: 13,
					filePath: [ 'Music', 'mp3', 'pop', 'theme.mp3' ],
					dateModified: 'Aug 12 2016 10:50:00 PM',
					size: 101
				},
				{
					id: 14,
					filePath: [ 'Music', 'mp3', 'jazz' ],
					dateModified: 'Aug 12 2016 10:50:00 PM',
					size: 101
				}
			],
			defaultColDef: {
				sortable: true,
				resizable: true,
				filter: true
			},
			components: { fileCellRenderer: getFileCellRenderer() },
			groupDefaultExpanded: -1,
			getDataPath: function(data) {
				return data.filePath;
			},
			getRowNodeId: function(data) {
				return data.id;
			},
			autoGroupColumnDef: {
				headerName: 'Files',
				width: 250,
				cellRendererParams: {
					checkbox: false,
					suppressCount: true,
					innerRenderer: 'fileCellRenderer'
				}
      },
      frameworkComponents: {
        childMessageRenderer: ChildMessageRenderer
      }
		};
	}

	onGridReady = (params) => {
		this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnVisible('', false);
	};

	//creating custom context menu
	getContextMenuItems = (params) => {
		const result = [
			{
				name: 'Create DS',
				action: function() {
					console.log('clicked Create DS');
				}
			},
			{
				name: 'Create DQP Ruleset',
				action: function() {
					console.log('Create DQP Ruleset');
				}
			},
			{
				name: 'Import',
				action: function() {
					console.log('Import');
				}
			},
			'separator',
			{
				name: 'Save & Close Project',
				action: function() {
					console.log('Save & Close Project');
				}
			}
		];
		return result;
	};

	render() {
		return (
			<div style={{ height: 'calc(100% - 25px)' }}>
				<div
					id="myGrid"
					style={{
						height: '100%',
						width: '100%'
					}}
					className="ag-theme-balham"
				>
					<AgGridReact
						columnDefs={this.state.columnDefs}
						rowData={this.state.rowData}
						defaultColDef={this.state.defaultColDef}
						components={this.state.components}
						treeData={true}
						animateRows={true}
						groupDefaultExpanded={this.state.groupDefaultExpanded}
						getDataPath={this.state.getDataPath}
						getRowNodeId={this.state.getRowNodeId}
						autoGroupColumnDef={this.state.autoGroupColumnDef}
						onGridReady={this.onGridReady}
						getContextMenuItems={this.getContextMenuItems}
						frameworkComponents={this.state.frameworkComponents}
					/>
				</div>
			</div>
		);
	}
}

// adding icon in front of tree node
function getFileCellRenderer() {
	function FileCellRenderer() {}
	FileCellRenderer.prototype.init = function(params) {
		var tempDiv = document.createElement('div');
		var value = params.value;
		var icon = getFileIcon(params.value);
		// tempDiv.innerHTML = icon
		//   ? '<span>'+'<img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/images/fire-minus.png" alt=icon" />'+ '<span class="filename"></span>' + value + "</span>"
		//   : value;
		tempDiv.innerHTML =
			'<span> <img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/images/fire-minus.png" alt=icon" /><span class="filename"></span>' +
			value +
			'</span>';

		this.eGui = tempDiv.firstChild;
	};
	FileCellRenderer.prototype.getGui = function() {
		return this.eGui;
	};
	return FileCellRenderer;
}

function getFileIcon(filename) {
	return filename.endsWith('.mp3') || filename.endsWith('.wav')
		? 'far fa-file-audio'
		: filename.endsWith('.xls')
			? 'far fa-file-excel'
			: filename.endsWith('.txt') ? 'far fa-file' : filename.endsWith('.pdf') ? 'far fa-file-pdf' : 'far fa-folder';
}

//context menu image creator
function createFlagImg(flag) {
	return '<img border="0" width="15" height="10" src="https://flags.fmcdn.net/data/flags/mini/' + flag + '.png"/>';
}


export default AGTreeView;
