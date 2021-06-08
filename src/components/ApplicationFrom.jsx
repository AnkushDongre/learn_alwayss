import React, { Component } from 'react';

export default class ApplicationFrom extends Component {
    render() {
        return (
            <section id="application-form" className="container">
            <div style={{backgroundColor: "lightgray"}}>
        <h1 className="text-center">Application Form</h1>
        <p>Please fill the form carefully as the details will be reflected in your certification.</p>
</div>
        <hr className="p-1 bg-danger" />

        <form>
            <h5>Name</h5>
            <div className="row py-2">
                <div className="col">
                    <input type="text" className="form-control" name="fname" placeholder="First name" aria-label="First name" aria-required="true" required />
                    <label htmlFor="fname">First Name</label>
                </div>
                <div className="col">
                    <input type="text" className="form-control" name="mname" placeholder="Middle name" aria-label="Middle name" aria-required="true" required />
                    <label htmlFor="mname">Middle Name</label>
                </div>
                <div className="col">
                    <input type="text" className="form-control" name="lname" placeholder="Last name" aria-label="Last name" aria-required="true" required />
                    <label htmlFor="lname">Last Name</label>
                </div>
            </div>
            <h5>DOB and Gender</h5>
            <div className="row py-2">
                <div className="col">
                    <input type="date" className="form-control" name="date" id="txtdate" autoComplete="off" aria-label="date of birth" aria-required="true" required />
                </div>
                <div className="col">
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue="not selected">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                    <option value="other">Other</option>

                </select>
                </div>
            </div>
            <h5 className="pt-4">Contact</h5>
            <div className="row py-2">
                <div className="col">
                    <input type="tel" className="form-control" name="contact" placeholder="+91 00000 00000" aria-label="Contact number" aria-required="true" required />
                    <label htmlFor="contact">Whatsapp number</label>
                </div>
                <div className="col">
                    <input type="tel" className="form-control" name="altcontact" placeholder="+91 00000 00000" aria-label="Alternet Contact" aria-required="true" required />
                    <label htmlFor="contact">Alternet number</label>
                </div>
                <div className="col">
                    <input type="email" className="form-control" name="email" placeholder="example@example.com" aria-label="email" aria-required="true" required />
                    <label htmlFor="email">Mail ID</label>
                </div>
            </div>
            <h5 className="pt-4">Address</h5>
            <div className="row py-2">
            <div className="col">
                    <input type="text" className="form-control" name="address1" placeholder="Address line one" aria-label="Address line one" aria-required="true" required />
                    <label htmlFor="address1">House No. or Streat</label>
                </div>
                <div className="col">
                    <input type="text" className="form-control" name="address2" placeholder="Address line two" aria-label="Address line two" aria-required="true" required />
                    <label htmlFor="address2">Area, Village, City</label>
                </div>
            </div>
            <h5 className="pt-4">College Details</h5>
            <div className="row py-2">
                <div className="col">
                    <input type="tel" className="form-control" name="college-name" placeholder="College name" aria-label="College name" aria-required="true" required />
                </div>
                <div className="col">
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue="not selected">Select Specialization</option>
                    <option value="BE">B.E</option>
                    <option value="ME">M.E</option>
                    <option value="Bsc">B.Sc</option>
                    <option value="Msc">M.Sc</option>
                    <option value="other">Other</option>
                </select>
                </div>
                
                </div>
         
            <fieldset className="row mb-3"  aria-required="true" required >
                <legend className="col-form-label col-sm-2 pt-0">First Time Visit?</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="yes"
                             />
                        <label className="form-check-label" htmlFor="gridRadios1">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="no" />
                        <label className="form-check-label" htmlFor="gridRadios2">
                            No
                        </label>
                    </div>
                </div>
            </fieldset>
            

            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea className="form-control" name="comment" id="comment" rows="6" />
            </div>
            <div className="text-center p-3">
                <button type="submit" className="btn btn-primary btn-outline-success text-light">Submit</button>
            </div>
            
        </form>
    </section>
        )
    }
}
