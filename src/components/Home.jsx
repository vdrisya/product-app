// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// export const Home = () => {
//   const [products, setRows] = useState([]);

//   // Fetching data from external API
//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then((res) => {
//         setRows(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching users:", err);
//       });
//   }, []);

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="employee table">
//         <TableHead>
//           <TableRow>
//             <TableCell>ID</TableCell>
//             <TableCell align="right">title</TableCell>
//             <TableCell align="right">price</TableCell>
//             <TableCell align="right">image</TableCell>
//             <TableCell align="right">rating</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {products.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell>{row.id}</TableCell> {/* Added Employee ID */}
//               <TableCell align="right">{row.title}</TableCell>
//               <TableCell align="right">{row.price}</TableCell> {/* Changed LastName to lastName */}
//               <TableCell align="right"><img src={row.image} alt={row.title} width='100'/></TableCell>
//               <TableCell align="right">{row.rating.rate}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Grid, CssBaseline } from '@mui/material';

export const Home = () => {
  const [products, setProducts] = useState([]);

  // Fetching data from external API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <>
      <CssBaseline /> {/* Add CssBaseline to normalize CSS across browsers */}
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating.rate}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
