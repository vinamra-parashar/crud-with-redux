import React, { useState, useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import useStateWithCallback from 'use-state-with-callback';
import Contact from './Contact';
import { selectAllContact, clearAllContact, deleteAllContact } from "../../actions/ContactAction";
import { notifications } from '../layout/Notifications';

export default function ContactTable() {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const [select, setSelect] = useState(false);
    const selectedContacts = useSelector((state) => state.contacts.selectedContacts);
    const msg = useSelector(state => state.contacts.message);

    useEffect(() => {
        // if (select) {
        //     dispatch(selectAllContact(contacts.map((contact) => contact.id)));
        // } else {
        //     dispatch(clearAllContact());
        //     // notifications(msg);
        // }
        notifications(msg);
    }, [msg]);

    const onDeleteAllContact = () =>{
        dispatch(deleteAllContact())
        setSelect(false);
        notifications(msg);
    }

    const handleSelect = () =>{
        setSelect(!select)
    }

    return (
        <div>

            {select === true || selectedContacts.length > 0 ? (
                <button
                    className="btn btn-danger mb-3"
                    onClick={() => onDeleteAllContact()}
                >
                    Delete All
                </button>
            ) : null}

            <table className="table shadow table-light">
                <thead className="bg-dark text-white">
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input id='select' type="checkbox" className="custom-control-input" value={select} onChange={() => handleSelect()} />
                                <label htmlFor='select' className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.length > 0 ? contacts.map((x, i) => (
                        <Contact data={x} key={i} select={select} />
                    )) : null}
                </tbody>
            </table>
            {contacts.length === 0 && <span className="text-center mt-3">No Records Found !</span>}
        </div>
    )
}
