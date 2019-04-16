import React, { Component } from 'react';
import './App.css';

import ReactTable from "react-table";
import 'react-table/react-table.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SubmissionTable />
      </div>
    );
  }
}


class SubmissionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: 'Loading'
    };
  }

  componentDidMount() {
    fetch('api/v1/submission_list/')
      .then(response => response.json())
      .then(data => this.setState({ data: data, loaded: true }));
  }

  render () {
    const columns = [{
      Header: 'ID',
      accessor: 'id'
    },{
      Header: 'Name',
      accessor: 'name'
    },{
      Header: 'filename',
      accessor: 'input_file'
    },{
      Header: 'Email',
      accessor: 'email'
    },{
      Header: 'Submitted',
      accessor: 'created_at'
    }];

    const { data, loaded, placeholder } = this.state;

    if (loaded) {
      return (
        <div className="SubmissionTable">
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize = {3}
            pageSizeOptions = {[3, 6]}
          />
        </div>
      );
    } else {
      return (
        <div className="SubmissionTable">
          <p>{placeholder}</p>
        </div>
      );
    }
  }
}

export default App;
