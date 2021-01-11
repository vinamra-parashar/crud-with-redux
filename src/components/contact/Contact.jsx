import React from 'react'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
// actions
import { deleteContact } from '../../actions/ContactAction';
import { useDispatch, useSelector } from 'react-redux';
// components
import { notifications } from '../layout/Notifications';

export default function Contact({ data , select}) {

    const { id, name, phone, email } = data;
    const dispatch = useDispatch();
    const msg = useSelector(state => state.contacts.message);

    const onDeleteContact = (id) =>{
        dispatch(deleteContact(id));
        notifications(msg);
    }

    return (
        <tr>
            <th>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" id={id} checked={select} readOnly className="custom-control-input" />
                    <label htmlFor={id} className="custom-control-label"></label>
                </div>
            </th>
            <td> <Avatar className="mr-2" name={name} size="45" round={true} /> {name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="">
                <Link to={`/contacts/edit/${id}`}><span className="material-icons pointer mr-2">edit</span></Link>
                <span className="material-icons pointer" onClick={() => onDeleteContact(id)}>delete</span>
            </td>
        </tr>
    )
}