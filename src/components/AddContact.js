import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

const AddContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(state=> state);
    const dispatch = useDispatch();

    const history = useHistory()
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email)

        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number)

        if(!email || !number || !name ){
            return toast.warning("Please fill in all fields")
        }
        if(checkEmail){
            return toast.error('This email is already Exist!')
        }
        if(checkNumber){
            return toast.error('This Number is already Exist!')
        }

        const data = {
            id: contacts.length,
            name,
            email,
            number,
        };
        console.log(data)
        dispatch({type: 'ADD_CONTACT', payload: data})
        toast.success('Student enter succesfully')

        history.push('/')
    }

    return (
        <div className='container'>
            <div className="row">
                <h1 className="display-3 text-center">
                    Add Student
                </h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group py-1">
                            <input type='text' placeholder='Name' className='form-control' value={name} onChange={e=>setName(e.target.value)} />
                        </div>
                        <div className="form-group py-1">
                            <input type='email' placeholder='Email' className='form-control' value={email} onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div className="form-group py-1">
                            <input type='number' placeholder='Phone Number' className='form-control' value={number} onChange={e=>setNumber(e.target.value)} />
                        </div>
                        <div className="form-group py-1">
                            <input type='submit' value='Add Student' className='btn btn-block btn-dark' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
