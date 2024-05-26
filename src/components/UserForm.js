import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
            />
            <TextField
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                type="number"
                required
            />
            <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                required
            />
            <Button type="submit" variant="contained">Submit</Button>
        </Box>
    );
};

export default UserForm;
