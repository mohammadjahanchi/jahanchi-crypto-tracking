import React, { useState } from "react";
import SPinner from "../componnents/ui/Spinner.Component";
import axios from "axios";
import { baseUrl } from "../constants/api";

const HomePage = () => {
    const [date, setData] = useState([]);
    const [loading, setLoading] = useState([]);
    const [error, setEro] = useState([]);

    useEffect(() => { 
        setLoading(true);
        axios(baseUrl);
            .then((response)=>{
                setLoading(false);
                console.log(response.data);
            })
            .catch((error)=>{
                setError("An error occured");
            });
    } ,[]);  



    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>crypto tracking</h1>
                    <h4>A place to manage all of your trade informations action</h4>
                    <h4>Do not forget to always using asset and risk management!!!</h4>
                </div>
            </div>

        </div>
    )


};
export default HomePage;

