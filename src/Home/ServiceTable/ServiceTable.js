import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import ServiceRow from '../ServiceRow/ServiceRow';

const ServiceTable = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('http://localhost:8081/api/services/allServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])


    return (
        <div className='table-box'>
            <div className="search-bar">
                <input type="text" name="" id="" placeholder='search' />
            </div>
            <div className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            services.map(service => <ServiceRow
                                service={service}
                            />
                            )
                        }
                    </TableBody>
                </Table>
            </div>
        </div>

    );
};

export default ServiceTable;