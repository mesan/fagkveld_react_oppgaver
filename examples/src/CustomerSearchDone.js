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


const Name = ({name}) => <span>Navn: <b>{name}</b></span>;

const Email = ({email}) => <span>Epost: <b>{email}</b></span>;

const Phone = ({phone}) => <span>Telefon <b>{phone}</b></span>;

const Address = ({address}) => <span>Adresse: <b>{address}</b></span>; 

const Customer = ({
    name,
    email,
    phone,
    address
}) => 
    <div>
        <Name name={name} />
        <Email email={email} />
        <Phone phone={phone} />
        <Address address={address} />
    </div>;


const Customers = ({customers}) => 
    <div>
        {customers.map((customer, index)  => <Customer key={index} {...customer} />)}
    </div>;

const SearchBar = ({customerSearchTerm, handleCustomerSearchTermChanged}) => {
    return (<div>
        <form onSubmit={handleCustomerSearchTermChanged}>
            <input type="text" name="customerSearchTerm" />
            <input type="submit" value="Søk" />
        </form>
    </div>);
};

class CustomerSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            customerSearchTerm: ''
        };
    }

    onCustomerSearchTermChanged(event) {
        console.log(event.target.customerSearchTerm.value);
        event.preventDefault();
        this.setState({
            customerSearchTerm: event.target.customerSearchTerm.value
        });

    }

    render() {
        return (
            <div>
                <h1>Kundesøk</h1>
                <SearchBar customerSearchTerm={this.state.customerSearchTerm} handleCustomerSearchTermChanged={this.onCustomerSearchTermChanged.bind(this)} />
                <Customers customers={customers.filter(c => c.name.includes(this.state.customerSearchTerm))} />
            </div>
        );
    }
};

export default CustomerSearch;
