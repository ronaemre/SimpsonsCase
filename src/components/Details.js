import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { useState, useEffect } from 'react';
import axios from "axios"
import useStyles from './stylesDetails'




const Details = () => {
    const classes = useStyles();
    const [user, setUsers] = useState([]);


    const getUsers = async () => {
        const id = 5
        const response = await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/simpsons/${id}`)
        setUsers(response.data)
    }

    useEffect(() => {
        getUsers();
    }, [])

    /* const { avatar } = user;
    console.log(avatar) */
    /*                                  //split metodu user obje olduğu için mi çalışmıyor????
        const arr = Object.entries(user) */
    return (

        < Card className={classes.root} >

            <CardMedia className={classes.media} image={user.avatar} title={user.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {user.name}
                    </Typography>

                </div>
                <Typography variant="h5" >
                    {user.job}
                </Typography>
                <Typography variant="body2" color="textSecondary">{user.about}</Typography>
            </CardContent>
        </Card >

    )


}


export default Details;