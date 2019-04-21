import React from 'react';
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'

import SemanticTable from './components/SemanticTable';
import LoadingPlaceholder from './components/LoadingPlaceholder';

import { submissionsSet } from './store/actions'


function JobsPage() {
  return (
    <div>
      <SubmissionTable />
    </div>
  );
}

class SubmissionTable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('api/v1/submission_list/')
      .then(response => response.json())
      .then(data => this.props.submissionsSet({ data: data }));
  }

  render () {
    const { data } = this.props;
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
        name: 'Filename',
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

    return (
      <div className="SubmissionTable">
        <Header as='h1'>Jobs</Header>
        {data ? (
          <SemanticTable columns={columns} />
        ) : (
          <LoadingPlaceholder />
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { data: state.submissions.data };
};

function mapDispatchToProps(dispatch) {
  return {
    submissionsSet: data => dispatch(submissionsSet(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionTable);
