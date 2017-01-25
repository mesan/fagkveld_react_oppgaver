import React from 'react';

const customers = [
  {
    name: "Ola Nordman", 
    email: "ola@nordman.no", 
    phone: "11223344", 
    address: "Apalveien 111, Andeby"
  },
  {
    name: "Kari Nordman", 
    email: "kari@nordman.no", 
    phone: "22334455", 
    address: "Apalveien 111, Andeby"
  },
  {
    name: "Anne Johansen", 
    email: "anne@johansen.no", 
    phone: "33225522", 
    address: "Apalveien 65, Andeby"
  },
  {
    name: "Kari Olsen", 
    email: "kari@olsen.no", 
    phone: "66223344", 
    address: "Apalveien 22, Andeby"
  }
];


const Name = ({}) => <span></span>;

const Email = ({}) => <span></span>;

const Phone = ({}) => <span></span>;

const Address = ({}) => <span></span>; 

const Customer = ({}) => 
    <div>
    </div>;


const Customers = ({customers}) => 
    <div>
    </div>;

const SearchBar = ({}) => {
    return (
        <div>
        </div>
    );
};

class CustomerSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Kundesøk</h1>
            </div>
        );
    }
};

export default CustomerSearch;
