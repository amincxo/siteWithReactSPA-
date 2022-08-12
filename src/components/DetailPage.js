import React from 'react'
import { useParams } from 'react-router-dom';

 const DetailPage = () => {
    const params = useParams();

  return (
    <h1>Detail Page Product {params.id}</h1>
  )
}
export default DetailPage;