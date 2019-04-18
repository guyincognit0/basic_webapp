import React from 'react';
import { Table } from 'semantic-ui-react'


function SemanticTable(props) {
  return (
    <Table celled>
      <Header columns={props.columns} />
      <Rows columns={props.columns} data={props.data} />
      <Footer columns={props.columns}/>
    </Table>
  )
}

function Header(props) {
  return (
    <Table.Header>
      <Table.Row>
        {props.columns.map(column => <Table.HeaderCell>{column.name}</Table.HeaderCell>)}
      </Table.Row>
    </Table.Header>
  );
}

function Rows(props) {
  // TODO: Each cell has the complete data set - should the Cells loop/map be nested here as well?
  return (
    <Table.Body>
      {props.data.map(entry => <Table.Row><Cells columns={props.columns} data={entry} /></Table.Row>)}
    </Table.Body>
  );
}

function Cells(props) {
  // TODO: Why do braces not work but parenthesis do?
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
