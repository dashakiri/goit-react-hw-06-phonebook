import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-action";
import { connect } from "react-redux";
import {ListOfContacts, ListItem, Button} from './ContactList.styled';

export function ContactsList ({contacts}) {    
    const dispatch = useDispatch();

    console.log(contacts)
    return(
    <ListOfContacts>
    {contacts.map(({id, name, number}) => {
        return (<ListItem key={id}><span>{name}: {number}</span>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}
        >Delete</Button>
        </ListItem>)
        })}
    </ListOfContacts>        
    )
}

const mapStateToProps = ({contacts}) => {
    return contacts;
};

export default connect(mapStateToProps, null)(ContactsList);