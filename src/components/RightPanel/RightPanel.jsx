import React, { PureComponent } from 'react';
import Tabs from '../Tabs';
import NetworkGraph from '../../UI/NetworkGraph';
import Editor from '../../UI/Editor';
import Source from '../../UI/Source';
import AGTreeView from '../../UI/AGTreeView';
import Browse from '../Browse';
import { DataSet } from 'vis-network';

import { debounce } from 'lodash'; //improve performance on changing content in ace-editor
import 'brace/ext/language_tools'; //autocompletion ace-editor

import './RightPanel.scss';

//data to be rendered in Network graph
const nodes = new DataSet([
	{ id: 1, label: 'Node 1' },
	{ id: 2, label: 'Node 2' },
	{ id: 3, label: 'Node 3' },
	{ id: 4, label: 'Node 4' },
	{ id: 5, label: 'Node 5' }
]);

// create an array with edges
const edges = new DataSet([ { from: 1, to: 3 }, { from: 1, to: 2 }, { from: 2, to: 4 }, { from: 2, to: 5 } ]);

const data = {
	nodes: nodes,
	edges: edges
};
const options = {
	autoResize: true,
	height: '100%',
	width: '100%'
};
//code highlighter for erros
let markers = [];
markers.push({ startRow: 1, startCol: 10, endRow: 1, endCol: 90, className: 'replacementMarker', type: 'text' });
const annotations = [
	{
		row: 1, // must be 0 based
		column: 5, // must be 0 based
		text: 'error.message', // text to show in tooltip
		type: 'error'
	}
];

class RightPanel extends PureComponent {
	state = {
		value: '//Default Value',
    fileText: '',
    isCustomKeywordFetched: false
	};

	langTools = window.ace.acequire('ace/ext/language_tools');

	onChange = debounce((content) => {
		// console.log(`new content ${content}`);
    //incase last typed keyword is provider, we need to trigger an API call
    const {isCustomKeywordFetched} = this.state;
		if (content.slice(-9).trim() === 'Provider' && !isCustomKeywordFetched) {
			let staticWordCompleter = {
				getCompletions: function(editor, session, pos, prefix, callback) {
					let wordList = [ 'TableA', 'TableB', 'TableC' ];
					callback(
						null,
						wordList.map(function(word) {
							return {
								caption: word,
								value: word,
								meta: 'static'
							};
						})
					);
				}
			};
      //this.langTools.setCompleters([ staticWordCompleter ]);
      this.langTools.addCompleter(staticWordCompleter)
      this.setState({
        isCustomKeywordFetched: !isCustomKeywordFetched
      });
		}
		this.setState({
			value: content
		});
	}, 200);

	//aceeditor
	onCursorChange = (selection, evt) => {
		//console.log(selection);
	};
	focusText = (content, evt) => {
		//console.log(evt)
	};

	onFileSelection = (event) => {
		let file = event.target.files[0];
		let reader = new FileReader();
		reader.readAsText(file);
		reader.onLoad = (event) => {
			console.log(event.target.result);
			this.setState({
				fileText: event.target.result
			});
		};
	};

	render() {
		const { fileText, value } = this.state;
		// const sourceProps = {
		//   //ref:"ace",
		//   placeholder: "Placeholder Text",
		//   mode: "javascript", //change language
		//   theme: "twilight",
		//   name: "source",
		//   fontSize: "14",
		//   highlightActiveLine: true,
		//   value,
		//   width: "100%",
		//   showGutter: false,
		//   height: "100%",
		//   setOptions: {
		//     enableBasicAutocompletion: true,
		//     enableLiveAutocompletion: false,
		//     enableSnippets: false,
		//     showLineNumbers: true,
		//     tabSize: 2
		//   },
		//   onChange: this.onChange
		// };
		const sourceProps = {
			mode: 'groovy',
			theme: 'twilight',
			name: 'UNIQUE_ID_OF_DIV',
			enableBasicAutocompletion: true,
			enableLiveAutocompletion: true,
			highlightActiveLine: true,
			enableSnippets: true,
			onChange: this.onChange,
			onCursorChange: this.onCursorChange,
			onBlur: this.focusText,
			width: '100%',
			height: '100%',
			value,
			markers,
			annotations
		};

		return (
			<div className="rightPanelCta">
				<div className="tab">
					<Tabs>
						<div header="Editor">
							<Editor {...sourceProps} />
						</div>
            <div header="AG-grid">
              <AGTreeView {...sourceProps} />
            </div>
						<div header="Index.jsx">You are on Index.jsx file</div>
						<div header="Panel.jsx">You are on Panel.jsx file</div>
						<div header="Source">
							<Browse onFileSelection={this.onFileSelection} />
							{!!fileText ? <Source {...sourceProps} /> : null}
							{/* <Source {...sourceProps} /> */}
						</div>
						<div header="Graph">
							<NetworkGraph data={data} options={options} />
						</div>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default RightPanel;
