import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

import './App.css';
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/submit">Submit</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/submit" component={Submit} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Jobs() {
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
        <Table celled>
          <Header columns={columns} />
          <Rows columns={columns} data={data} />
          <Footer columns={columns}/>
        </Table>
      ) : (
        <p>loading...</p>
      )}
      </div>
    )
  }
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

function Submit() {
  return (
    <div>
      <h2>Submit</h2>
    </div>
  );
}

export default App;
