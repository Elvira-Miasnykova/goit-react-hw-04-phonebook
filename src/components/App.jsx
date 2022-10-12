import { Component } from "react";
import { Form } from './Form/Form';
import { ContactsList } from './Contacts/ContactsList';
import { Title, Header } from './Title.styled';
import { Filter } from './Filter/Filter';
import { Box } from './Box';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

   addContact = (newContact) => {
    const foundContact = this.state.contacts.find(contact => contact.name === newContact.name);
    
    (foundContact) 
    ? window.alert( `${newContact.name} is alredy in contacts`)
    : this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
  }))
  };

  handleDelete = (contactId) => {
    this.setState(prevState => (
      { contacts: prevState.contacts.filter(contact => contactId !== contact.id) }
    ))
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    })
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    return (
      this.state.contacts.filter(contact => 
        contact.name.toLocaleLowerCase().includes(normalizedFilter))
    )
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    
  }


  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box bg="muted" p={3} border="normal" borderColor="lightGray" borderRadius="normal" width="25%"  boxShadow="0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16)" textAlign="center" margin="0 auto">
        <Header>Phonebook</Header>
        <Form onSubmit={this.addContact}/>
        <Title>Contacts</Title>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactsList contacts={visibleContacts} onDeleteContact={this.handleDelete} />
      </Box>
    )
  }
    

};