import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-action";
import {getFilteredContacts, getFilter} from "../../redux/contacts/contacts-selectors";
import {ListOfContacts, ListItem, Button} from './ContactList.styled';

export default function ContactsList () {    
    const contacts = useSelector(getFilteredContacts);
    // const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    // const [contactsToRender, setContactsToRender] = useState(contacts);

    // useEffect(() => {
    //   setContactsToRender(
    //     contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
    //   )
    // }, [contacts, filter]);

    console.log(contacts)

    return(
    <ListOfContacts>
        {contacts.map(({id, name, number}) => {
        return (<ListItem key={id}><span>{name}: {number}</span>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}
        >Delete</Button>
        </ListItem>)})}
    </ListOfContacts>        
    )
};
