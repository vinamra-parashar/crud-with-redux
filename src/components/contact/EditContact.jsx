import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { getContact, updateContact } from '../../actions/ContactAction';

export default function EditContact() {

    let history = useHistory();
    let {id} = useParams();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contacts.contact);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if(contact !== null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id));
    }, [contact]);

    const onUpdateContact = (e) =>{
        e.preventDefault();
        const update_contact = Object.assign(contact, {name: name, phone: phone, email: email});
        dispatch(updateContact(update_contact));
        history.push('/');
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Update Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateContact(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your E-mail Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button className="btn btn-danger" type="submit">
                        Update Contact
                    </button>
                </form>
            </div>
        </div>
    )
}
