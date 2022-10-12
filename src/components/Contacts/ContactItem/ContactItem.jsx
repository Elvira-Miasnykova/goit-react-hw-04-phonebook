import PropTypes from 'prop-types';
import { ContactItem, ContactDescription, ContactButton } from './ContactItem.styled';

export const ContactsItem = ({name, number, id, onDeleteContact}) => {
    return(
        <ContactItem>
        <ContactDescription>{name}:</ContactDescription>
        <ContactDescription>{number}</ContactDescription>
        <ContactButton type="button" onClick={() => onDeleteContact(id)}>Delete</ContactButton>
    </ContactItem>
    )
};

ContactsItem.prototype = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};