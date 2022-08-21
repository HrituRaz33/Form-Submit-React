import './App.css';
import { useRef, useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [sex, setSex] = useState("");
  const [idType, setIdType] = useState("");
  const [govtId, setGovtId] = useState("");
  const [enterLabel, setEnterLabel] = useState("");
  const [guardian, setGuardianName] = useState("");
  const [email, setEmail] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [occupation, setOccupation] = useState("");
  const [nationality, setNationality] = useState("");
  const [religion, setReligion] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");


  let ref = useRef("")
  //  Making Array List

  const [list, setList] = useState([]);


  const haldleSubmit = (e) => {
    e.preventDefault()


    // console.log(name, date, mobile, sex, idType, govtId, enterLabel, guardian, email, emergencyContact, address, country, state, city, pincode, occupation, nationality, religion, maritalStatus, bloodGroup);

    const data = { name, date, mobile, sex, idType, govtId, enterLabel, guardian, email, emergencyContact, address, country, state, city, pincode, occupation, nationality, religion, maritalStatus, bloodGroup }
    // console.log(data);

    if (name && mobile && idType && govtId && enterLabel && guardian && email && emergencyContact && address && country && state && city && pincode && occupation && nationality && maritalStatus) {



      setList((ls) => [...ls, data])
    }

  }

  return (
    <div className='container mt-4'>
      <form onSubmit={haldleSubmit}>
        <div>
          <h3 className='font-weight-bold text-decoration-underline'>Personal details</h3>
          <div className='row'>

            <div className="col-lg-5">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row mt-3">
                <label className="col-sm-2 col-form-label">Mobile</label>
                <div className="col-sm-10">
                  <input
                    type="tel"
                    name="number"
                    className="form-control w-75"
                    placeholder="Enter Mobile"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className='d-flex row'>
                <div className="form-group col-lg-8">
                  <div className='row'>
                    <div className='row'>
                      <label for="staticEmail" className="col-sm-2 col-lg-4 col-form-label">Date of Birth or Age</label>
                      <div className="col-sm-10 col-lg-8">
                        <input

                          type="date"
                          className="form-control w-100"
                          placeholder="DD/MM/YYYY or Age in Years"
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row col-lg-4'>
                  <div className="form-group row">
                    <div className='row'>
                      <label for="staticEmail" className="col-sm-2 col-lg-3 col-form-label p-0 m-0">Sex</label>
                      <div className="col-sm-10 col-lg-9 m-0 p-0">

                        <select className="form-control w-100"
                          onChange={(e) => setSex(e.target.value)}
                          name="gender">
                          <option value="none" selected>Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-lg-2 col-form-label">Govt issued ID</label>
                <div className="col-sm-10 col-lg-10">
                  <div className='d-flex'>
                    <div className='d-flex w-100'>
                      <input

                        type="number"
                        pattern="[0-9]"
                        className="form-control w-100"
                        placeholder="Enter govt id"
                        onChange={(e) => setIdType(e.target.value)}
                      />
                    </div>
                    <input

                      type="number"
                      pattern="[0-9]"
                      className="form-control w-100 mx-3"
                      placeholder="Enter Govt ID"
                      onChange={(e) => setGovtId(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact details start */}
        <div>
          <h3 className='bold text-decoration-underline'>Contact Details</h3>
          <div className='row'>
            <div className='col-lg-5'>
              <div className="form-group d-flex p-0">
                <label className="col-form-label w-25">Guardian Details</label>
                <div>
                  <div className='d-flex'>
                    <input

                      type="text"
                      className="form-control mx-2"
                      placeholder="Enter Label"
                      onChange={(e) => setEnterLabel(e.target.value)}
                    />
                    <input

                      type="text"
                      className="form-control"
                      placeholder="Enter Guardian Name"
                      onChange={(e) => setGuardianName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='d-flex'>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input

                      type="email"
                      className="form-control w-100"
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group  d-flex">
                  <label className="col-form-label mx-3">Emergency Contact Number</label>
                  <div>
                    <input

                      type="number"
                      className="form-control w-100"
                      placeholder="Enter Emergency No"
                      onChange={(e) => setEmergencyContact(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact details end */}
        {/* Address Details start */}
        <div>
          <h3 className='mt-5 text-decoration-underline'>Address Details</h3>
          <div>
            <div className='row'>
              <div className='col-lg-5'>
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label">Address</label>
                  <div className="col-sm-10">
                    <input

                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group row mt-4">
                  <label for="staticEmail" className="col-sm-2 col-form-label">Country</label>
                  <div className="col-sm-10">
                    <input

                      type="text"
                      name="name"
                      className="form-control w-75"
                      placeholder="Enter Address"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='d-flex'>
                  <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">State</label>
                    <div className="col-sm-10">
                      <input

                        type="text"
                        className="form-control w-100"
                        placeholder="Enter Address"
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label mx-5">City</label>
                    <div className="col-sm-7">
                      <input

                        type="text"
                        className="form-control w-100 mx-2"
                        placeholder="Enter City"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group row mt-3">
                  <label for="staticEmail" className="col-sm-2 col-form-label w-auto">Pincode</label>
                  <div className="col-sm-10">
                    <input

                      type="number"
                      className="form-control w-100"
                      placeholder="Enter Pincode"
                      onChange={(e) => setPincode(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Address Details end */}
        {/* Other Details start */}
        <div>
          <h3 className='text-decoration-underline'>Other details</h3>
          <div className='row'>
            <div className='col-lg-4'>
              <div>
                <div className="form-group row">
                  <label for="staticEmail" className="col-sm-3 col-form-label">Occupation</label>
                  <div className="col-sm-9">
                    <input

                      type="text"
                      className="form-control"
                      placeholder="Enter Occupation"
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group row mt-3">
                  <label for="staticEmail" className="col-sm-3 col-form-label">Nationality</label>
                  <div className="col-sm-8">
                    <input

                      type="text"
                      className="form-control"
                      placeholder="Enter Religion"
                      onChange={(e) => setNationality(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-4 col-form-label">Religion</label>
                <div className="col-sm-8">
                  <select className="form-control w-100"
                    name="gender"
                  >
                    <option value="none" selected>Religion</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-5 col-form-label">Marital Status</label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Occupation"
                    onChange={(e) => setMaritalStatus(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-5 col-form-label">Blood Group</label>
                <div className="col-sm-6">
                  <select className="form-control w-100"
                    name="gender"
                  >
                    <option value="none" selected>Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="-O">-O</option>
                    <option value="+AB">+AB</option>
                    <option value="-AB">-AB</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Other Details end */}
        <span className='mt-5 d-flex justify-content-end gap-5'>
          <button className='btn btn-success px-5 d-flex  flex-column'> <span>Submit</span> <span className='text-decoration-underline'>( % S )</span> </button>
        </span>
        {/* <button className='btn btn-outline-danger d-flex  flex-column px-5'><span>CANCEL</span> <span className='text-decoration-underline'>( ESC )</span> </button> */}

      </form>
      {/* Total Array List start */}
      <div>
        {
          list.map((a) =>
            <div class="container">
              <h2>Person Details</h2>
              <div className='table-responsive'>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>Date of Birth or Age</th>
                      <th>Govt issued ID</th>
                      <th>Sex</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{a.name}</td>
                      <td>{a.mobile}</td>
                      <td>{a.date}</td>
                      <table class="table">
                        <tr>
                          <td>
                            {a.govtId}<br />
                            {a.idType}
                          </td>
                        </tr>
                      </table>
                      <td>{a.sex}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th>Address</th>
                      <th>Country</th>
                      <th>State</th>
                      <th>Pincode</th>
                      <th>City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{a.address}</td>
                      <td>{a.country}</td>
                      <td>{a.state}</td>
                      <td>{a.pincode}</td>
                      <td>{a.city}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th>Occupation</th>
                      <th>Nationality</th>
                      <th>Religion</th>
                      <th>Marital Status</th>
                      <th>Blood Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{a.occupation}</td>
                      <td>{a.nationality}</td>
                      <td>{a.religion}</td>
                      <td>{a.maritalStatus}</td>
                      <td>{a.bloodGroup}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th>Guardian Details</th>
                      <th>Email</th>
                      <th>Emergency Contact Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <table class="table">
                        <tr>
                          <td>
                            {a.enterLabel}
                            <br />
                            {a.guardian}

                          </td>
                        </tr>
                      </table>
                      <td>{a.email}</td>
                      <td>{a.emergencyContact}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        }
      </div>
      {/* Total Array List End */}
    </div>
  );
}

export default App;