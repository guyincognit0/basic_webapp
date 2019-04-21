import React from 'react';
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

import { submissionsSort } from '../store/actions'


class SemanticTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(columnClicked) {
    this.props.submissionsSort({ sortKey: columnClicked });
  }

  render() {
    const { data, column, direction } = this.props;

    return (
      <Table sortable celled>
        <Table.Header>
          <Table.Row>
            {this.props.columns.map(c => (
              <Table.HeaderCell
                sorted={c.accessor == column ? direction : null}
                onClick={() => this.handleClick(c.accessor)}
              >
                {c.name}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(entry => <Table.Row><Cells columns={this.props.columns} data={entry} /></Table.Row>)}
        </Table.Body>
        <Footer columns={this.props.columns}/>
      </Table>
    )
  }
}

function Cells(props) {
  return (
    (props.columns.map(column => <Table.Cell>{props.data[column.accessor]}</Table.Cell>))
  );
}

function Footer(props) {
  // TODO: pagination (see https://react.semantic-ui.com/collections/table/#types-pagination) - must first implement in backend
  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan={props.columns.length}>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
}

function mapStateToProps(state) {
  return {
    data: state.submissions.data,
    column: state.submissions.sortKey,
    direction: state.submissions.direction,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    submissionsSort: sortKey => dispatch(submissionsSort(sortKey))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SemanticTable);
