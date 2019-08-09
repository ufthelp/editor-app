import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import { Network } from "vis-network";
import './NetworkGraph.scss';

class NetworkGraph extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        options: PropTypes.object.isRequired
    } 
    network = {};
    appRef = createRef();
  
    componentDidMount() {
      const {data, options} = this.props;
      this.network = new Network(this.appRef.current, data, options);
    }
  
    render() {
      return <div ref={this.appRef} />;
    }
  }
  

export default NetworkGraph;
