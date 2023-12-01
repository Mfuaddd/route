import { Link } from "react-router-dom";
import "./index.scss";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getFetch();
  }, []);

  async function getFetch() {
    const data = await fetch("https://northwind.vercel.app/api/products");
    const res = await data.json();
    setData(res);
    setIsLoading(false)
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          {isLoading ? <div className="loading"></div> : data.map((x) => (
            <Link key={x.id} to={`/detail/${x.id}`}>
              <ul className="card">
                <li>{x.name}</li>
                <li>{x.quantityPerUnit}</li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
