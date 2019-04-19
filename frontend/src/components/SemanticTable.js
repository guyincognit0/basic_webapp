import React from 'react';
import { Table } from 'semantic-ui-react'


class SemanticTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Parent state should only ever change on mount
      data: props.data,
      column: null,
      direction: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(columnClicked) {
    const { data, column, direction } = this.state;

    if (columnClicked !== column) {
      const accessor = this.props.columns.find(cd => cd.name === columnClicked).accessor;
      this.setState({
        data: data.sort((a, b) => a[accessor] < b[accessor] ? 1 : -1),
        column: columnClicked,
        direction: 'ascending',
      });
    } else {
      this.setState({
        data: data.reverse(),
        column: columnClicked,
        direction: direction === 'ascending' ? 'descending' : 'ascending',
      });
    }
  }

  render() {
    const { data, column, direction } = this.state;

    return (
      <Table sortable celled>
        <Table.Header>
          <Table.Row>
            {this.props.columns.map(c => (
              <Table.HeaderCell
                sorted={c.name == column ? direction : null}
                onClick={() => this.handleClick(c.name)}
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

export default SemanticTable;
