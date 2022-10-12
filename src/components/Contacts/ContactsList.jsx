import PropTypes from 'prop-types';
import { Box } from "../Box";
import { ContactsItem } from './ContactItem/ContactItem';

export const ContactsList = ({contacts, onDeleteContact}) => {
    return (
        <Box as="ul">
            {contacts.map(({name, number, id}) => (
                <ContactsItem key={id}
                    id={id} 
                    name={name} 
                    number={number} 
                    onDeleteContact={onDeleteContact}/>
            ))}
        </Box>
    )
};

ContactsList.prototype = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};