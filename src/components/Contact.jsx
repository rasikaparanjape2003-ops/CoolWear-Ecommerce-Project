
import React, { useState } from "react"
function Contact() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            name: name,
            surname: surname,
            email: email,
            mobile: mobile
        };

        if (data.name === "" || data.surname === "" || data.email === "" || data.mobile === "") {
            alert("All Fields are Mandatory")
        } else {
            console.log(data);
            setName("");
            setSurname("");
            setEmail("");
            setMobile("");
        }

    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name <span className='text-danger'>*</span></label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Surname <span className='text-danger'>*</span></label>
                                <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email <span className='text-danger'>*</span></label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Mobile <span className='text-danger'>*</span></label>
                                <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.0892!2d74.2449!3d16.6923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1003e8dd18f77%3A0x8145dfbd008c138d!2sRajaram%20Puri%207th%20Lane%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;
