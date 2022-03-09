import React, { useEffect } from 'react'
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

const Test = () => {

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products'
    }).catch(err => {
      console.log(err.response); //TODO: Create a Dispatch for a failure
    });
    dispatch(response.data)
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <div>Test</div>
  )
}

export default Test