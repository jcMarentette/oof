import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Container, Row, Col, Alert } from 'reactstrap';

const data = [];

const columns = [
  {
    expander: true,
    width: 65,
    Expander: ({ isExpanded, ...rest }) =>
      <div>
        {isExpanded
          ? <span>&#x2299;</span>
          : <span>&#x2295;</span>}
      </div>,
    style: {
      cursor: 'pointer',
      fontSize: 25,
      padding: '0',
      textAlign: 'center',
      userSelect: 'none'
    }
  },
  {
    Header: 'Company',
    accessor: 'company.name'
  },
  {
    Header: 'Intership Type',
    accessor: 'intershipType'
  },
  {
    Header: 'File'
  }
];

export class Offers extends React.Component {
  componentDidMount() {
    //this.props.getSession();
  }

  subComponent(data) {
    return (
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={6}>
            <p><strong>Description :</strong> <br/>
              {data.description}</p>
            <p><strong>Salary : </strong>{data.salary}$</p>
          </Col>
          <Col md={5}>
            <p><strong>Contact :</strong> <br/>
                </p>
          </Col>
        </Row>
      </Container>
    );
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h2> Offer(s)</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ReactTable data={data} columns={columns} SubComponent={row => this.subComponent(row.original)}/>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Offers;
