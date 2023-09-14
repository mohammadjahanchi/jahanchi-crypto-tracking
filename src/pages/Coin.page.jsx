import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { detailsUrl } from "../constants/api";
import axios from "axios";
import Spinner from "../componnents/ui/Spinner.Component";
import CoinDetailsComponent from "../constans/CoinDetails.Component";
const CoinPage = () => {
  const paramObject = useParams();

  const url = detailsUrl(paramObject.id);

  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((response) => {
        setLoading(false);
        setCoin(response.data);
      })
      .catch((error) => {
        setError("An error occured");
      });
  }, []);

  return (
    <div className="container">
      {loading ? <Spinner /> : error !== "" ? <h1>{error}</h1> : <CoinDetailsComponent coin={coin} />}
    </div>
  );
};

export default CoinPage;
