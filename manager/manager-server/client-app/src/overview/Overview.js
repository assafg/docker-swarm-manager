import React, { Component } from 'react';
import autoBind from 'react-autobind';
import {swarmServiceList, swarmServiceInspect, swarmNodeList} from '../api';
import ItemList from './ItemList';
import ServiceData from './ServiceData';

export default class Overview extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      serviceList: []
    };
  }
  componentWillMount() {
    swarmServiceList().then(res => {
      this.setState({serviceList: res.data});
    });
    swarmNodeList().then(res => {
      this.setState({nodesList: res.data});
    });
  }

  inspectService(service) {
    swarmServiceInspect(service.NAME).then((serviceData) => {
      this.setState({serviceData: serviceData.data});
    });
  }

  render() {
    const { serviceData, serviceList, nodesList } = this.state;
    return (
      <div>
        <ItemList
          list={nodesList}
          title="Swarm Nodes"
        />
        <ItemList
          list={serviceList}
          onClick={this.inspectService}
          title="Services"
        />
        {serviceData && serviceData.length > 0 &&
          <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-6">
              <ServiceData serviceData={serviceData}/>
            </div>
            {/*<div className="3col-xs-12 col-md-6 col-lg-6">*/}
              {/*<h3>Service Operations</h3>*/}
            {/*</div>*/}
          </div>
        }
      </div>
    );
  }
}