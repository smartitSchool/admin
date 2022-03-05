import { TableCell, TableRow } from '@mui/material';
import React from 'react';

const ServiceRow = ({ service }) => {
    const { id, title, image, price } = service;
    return (
        <TableRow>
            <TableCell>
                {id}
            </TableCell>
            <TableCell>
                <img src={`http://localhost:8081/${image}`} alt="service_image" className='item-thumbnail' />
            </TableCell>
            <TableCell>
                {title}
            </TableCell>
            <TableCell>
                {price}
            </TableCell>
            <TableCell>

            </TableCell>
        </TableRow>
    );
};

export default ServiceRow;