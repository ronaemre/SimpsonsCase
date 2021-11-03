import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import User from './User/User'
import { getUser } from '../../api/UserApı'

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


    const getUsersHandler = async () => {
        const response = await getUser();
        setUsers(response.data)
    }

    const setUsersHandler = (users) => {
        setUsers(users)
    }

    useEffect(() => {
        getUsersHandler();
    }, [])

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            {<Grid container justify="center" spacing={4}>
                {users.map((user) => (
                    <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
                        <User user={user} setUsersHandler={setUsersHandler} />
                    </Grid>
                ))}
            </Grid>}
        </main>
    )

}

export default Users;