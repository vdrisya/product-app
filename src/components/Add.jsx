import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {
  const [product, setProduct] = useState({
    Title: '',
    Productprice: '',
    ProductRate: ''
  });
  
  const [errors, setErrors] = useState({});

  const fetchValue = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!product.Title) {
      newErrors.Title = 'Title is required';
    }
    if (!product.Productprice || isNaN(product.Productprice) || product.Productprice <= 0) {
      newErrors.Productprice = 'Price must be a positive number';
    }
    if (!product.ProductRate || isNaN(product.ProductRate) || product.ProductRate < 0 || product.ProductRate > 5) {
      newErrors.ProductRate = 'Rate must be between 0 and 5';
    }
    return newErrors;
  };

  const sendData = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(product);
      setErrors({}); 
      
    }
  };

  return (
    <div>
      <h2 style={{ paddingTop: "50px" }}>New Product</h2>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name='Title'
          onChange={fetchValue}
          error={!!errors.Title}
          helperText={errors.Title}
        /><br />

        <TextField
          id="filled-basic"
          label="Product Price"
          variant="outlined"
          name='Productprice'
          onChange={fetchValue}
          error={!!errors.Productprice}
          helperText={errors.Productprice}
        /><br />

        <TextField
          id="standard-basic"
          label="Product Rate"
          variant="outlined"
          name='ProductRate'
          onChange={fetchValue}
          error={!!errors.ProductRate}
          helperText={errors.ProductRate}
        /><br />

        <Button
          style={{ backgroundColor: "#333333", color: "white" }}
          variant="contained"
          onClick={sendData}
        >
          Add
        </Button>
      </Box>
    </div>
  );
};

export default Add;
