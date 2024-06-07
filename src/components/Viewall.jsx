import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
   const[data,setdata]=useState(
        [{
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "sunt qui excepturi placeat culpa"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "omnis laborum odio"
        }
        ]
    )
    return (
        <div className="container">
            <div className="row">

                {data.map(
                    (value, index) => (
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table>
                                <tr>
                                    <tc></tc>
                                    <td>UserId</td>
                                    <td>Id</td>
                                    <td>Title</td>
                                </tr>
                                <tr>
                                    <tbody>
                                        <td>{value.userId}</td>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>

                                    </tbody>
                                </tr>
                            </table>

                            
                        </div>
                    )
                )
                }
            </div>
            </div>
            )



    }

            export default Viewall