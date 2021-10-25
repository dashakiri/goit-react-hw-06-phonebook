import { useState } from "react";
import { connect } from "react-redux";
import {ContactForm, Button, Label, Input} from './Form.styled.js'
import { addContact } from "../../redux/contacts/contacts-action.js";

export function Form({onSubmit, contacts}) {
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const handleInputName = (e) => {
    const {name, value} = e.currentTarget;
    switch(name) {
        case 'name':
            return setName(value);
        case 'number':
            return setNumber(value);
        default:
            return;
    }
};

const handleSubmit = (e) => {
    e.preventDefault();

    const existingContact = contacts.find(contact => 
    contact.name.toLowerCase() === name.toLowerCase());
        
    if(existingContact) {
        alert(`${name} is already in the list.`);
        return;
    };

    // onSubmit(name, number);
    reset();
};

const reset = () => {
    setName('');
    setNumber('')
};

return(
    <ContactForm onSubmit={handleSubmit}>
    <Label> 
        Name
    <Input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    value={name}
    onChange={handleInputName}
    required  
    />
    </Label>

    <Label>
        Number
    <Input
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
    required
    value={number}
    onChange={handleInputName}
    />
    </Label>

    <Button type="submit">Add contact</Button>
    </ContactForm>
);
}

const mapStateToProps = ({contacts}) => {
    return {contacts};
};

const mapDispatchToProps = (dispatch) => {
return {
    onSubmit: (name, number) => dispatch(addContact(name, number))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);