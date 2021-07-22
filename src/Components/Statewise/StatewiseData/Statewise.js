import React, { useEffect, useState } from 'react';
import "./Statewise.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Statewise() {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const response = await fetch('https://api.covid19india.org/data.json');
        const actualData = await response.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }
    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="mainn-heading">
                    <h1 className="dataa_heading mb-5 text-center"><b>INDIA</b> COVID-19 Dashboard</h1>
                </div>
                <div className="table-responsive m-auto">
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Death</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((currEle, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{currEle.state}</td>
                                            <td>{currEle.confirmed}</td>
                                            <td>{currEle.recovered}</td>
                                            <td>{currEle.deaths}</td>
                                            <td>{currEle.active}</td>
                                            <td>{currEle.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise
