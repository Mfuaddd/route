import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const {id} = useParams()
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getFetch();
      }, []);
    
      async function getFetch() {
        const data = await fetch(`https://northwind.vercel.app/api/products/${id}`);
        const res = await data.json();
        setData(res);
        setIsLoading(false)
      }
    console.log(data);
  return (
    <>
    <div className='container'>
       {isLoading ? <div className="loading"></div> : 
        <ul className='card'>
            <li>{data.name}</li>
            <li>{data.quantityPerUnit}</li>
        </ul>}
    </div>
    
    </>
  )
}

export default Detail