import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const history = useHistory()

  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id) && id
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );

    const checkNumber = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.number === parseInt(number)
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields");
    }
    if (checkEmail) {
      return toast.error("This email is already Exist!");
    }
    if (checkNumber) {
      return toast.error("This Number is already Exist!");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };
    console.log(data);
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student updated succesfully");

    history.push("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <div className="row">
            <h1 className="display-3 text-center">Edit Student {id}</h1>
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group py-1">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group py-1">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group py-1">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="form-group py-1">
                  <input
                    type="submit"
                    value="Update Student"
                    className="btn btn-block btn-dark"
                  />

                  <Link to="/" className="btn btn-danger m-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Student Contact with id {id} is not exist
        </h1>
      )}
    </div>
  );
};

export default EditContact;
