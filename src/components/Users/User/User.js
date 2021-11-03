import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles'
import { Link } from "react-router-dom";
import { getUser } from "../../../api/UserApı"
import { useState, useEffect } from 'react';
import { deleteUser } from '../../../api/UserApı'




//Sildikten sonra sayfanın otomatik güncellemsi eklenecek ???


const User = ({ user, setUsersHandler }) => {
    const classes = useStyles();


    async function deleteUserHandler(id) {
        const response = await deleteUser(id)
        setUsersHandler(response.data)
    }


    return (
        <Card className={classes.root}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <img className={classes.media} src={user.avatar.split("/revision")[0]} title={user.name} />
            </div>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {user.name}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions} >
                <IconButton
                    data-testid="delete"
                    onClick={() => deleteUserHandler(user.id)} aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
                <Link
                    type="button"
                    className="btn btn-md btn-outline-primary"
                    to={`details/${user.id}`}
                >Details</Link>
            </CardActions>
        </Card>
    )
}

export default User
