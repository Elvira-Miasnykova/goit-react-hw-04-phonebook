import { Component } from "react";
import { nanoid } from 'nanoid';
import { Box } from "../Box";
import { LabelStyled, InputStyled, ButtonStyled } from "./Form.styled";

export class Form extends Component { 
    state = {
        name: '',
        number: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: e.currentTarget.name.value,
            number: e.currentTarget.number.value,
            id: nanoid(),
        };
        this.props.onSubmit(newContact);
        this.setState({ name:'', number:'' });

    };

    render() {
        return (
            <Box as="form" onSubmit={this.handleSubmit} bg="muted"  border="normal" borderRadius="normal" borderColor="accent" display="block" p={3} mb={3} >
                <LabelStyled>
                    Name
                    <InputStyled
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                </LabelStyled>
                <LabelStyled>
                    Number
                    <InputStyled
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleChange}
                    />
                </LabelStyled>
                <ButtonStyled type="submit">Add contact</ButtonStyled>
            </Box>
        );
    }
}
