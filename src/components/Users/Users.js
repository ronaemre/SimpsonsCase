import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import axios from "axios"
import User from './User/User'


const useStyles = makeStyles((theme) => ({
    toolbar: theme.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    }
}));



const Users = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([]);


    const getUsers = async () => {
        const response = await axios.get("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
        setUsers(response.data)
    }

    useEffect(() => {
        getUsers();
    }, [])



    return (
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            {<Grid container justify="center" spacing={4}>
                {users.map((user) => (
                    <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
                        <User user={user} />

                    </Grid>
                ))}
            </Grid>}
        </main>
    )

}

export default Users;