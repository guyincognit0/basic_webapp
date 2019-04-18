import React from 'react';

import SemanticTable from './components/SemanticTable';


function JobsPage() {
  return (
    <div className="App">
      <SubmissionTable />
    </div>
  );
}

class SubmissionTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch('api/v1/submission_list/')
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  render () {
    const { data } = this.state;
    const columns = [
      {
        name: 'ID',
        accessor: 'id',
      },
      {
        name: 'Name',
        accessor: 'name',
      },
      {
        name: 'filename',
        accessor: 'input_file',
      },
      {
        name: 'Email',
        accessor: 'email',
      },
      {
        name: 'Submitted',
        accessor: 'created_at',
      },
    ];

    // TODO: Better way for children to access 'columns' rather than copying(?) to each?
    return (
      <div className="SubmissionTable">
      {data ? (
        <SemanticTable columns={columns} data={data} />
      ) : (
        <p>loading...</p>
      )}
      </div>
    )
  }
}

export default SubmissionTable;
