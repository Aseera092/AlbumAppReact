import React from 'react'
import Navbar from './Navbar'

const Addalbum = () => {
    return (
        <div>
<Navbar/>
            
            <div className="container">
                <div className="row g-3">
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label">AlbumName</label>
                        <input type="AlbumName" className="form-control" />
                    </div>
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label">Album code</label>
                        <input type="AlbumName code" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label">Location</label>
                        <input type="Location" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label">Category</label>
                        <select name="" id="" className="form-control">
                            <option value="Happy">Happy</option>
                            <option value="Sad">Sad</option>
                            <option value="Love">Love</option>

                        </select>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Description</label>
                        <input type="Description" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                        <label htmlFor="" className="form-label"> Date</label>
                        <input type="date" name="" id="" className="form-control" />

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-16 col-xxl-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    

    )
}

export default Addalbum