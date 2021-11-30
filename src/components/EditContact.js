import React from "react";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
    const {id} = useParams();

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center">Edit Student {id}</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="form-group py-1">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="form-group py-1">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group py-1">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
              />
            </div>
            <div className="form-group py-1">
              <input
                type="submit"
                value="Update Student"
                className="btn btn-block btn-dark"
              />

              <Link
                to="/"
                className="btn btn-danger m-3"
              >Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
