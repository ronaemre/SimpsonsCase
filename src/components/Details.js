import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { useState, useEffect } from 'react';
import axios from "axios"
import useStyles from './stylesDetails'

const Details = ({ match }) => {
    const classes = useStyles();
    const [user, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/simpsons/${match.params.id}`)
        setUsers(response.data)
    }

    useEffect(() => {
        getUsers();
        /*  console.log(match) */
    }, [])

    return (
        /*  < Card className={classes.root} data-testid="container"  >
             <CardMedia className={classes.media} image={user.avatar} title={user.name} />
             <CardContent>
                 <div className={classes.cardContent} data-testid="name">
                     <Typography variant="h5" gutterBottom>
                         {user.name}
                     </Typography>
                 </div>
                 <div data-testid="job">
                     <Typography variant="h5"  >
                         {user.job}
                     </Typography>
                 </div>
                 <Typography variant="body2" color="textSecondary">{user.about}</Typography>
             </CardContent>
         </Card > */

        <div className={classes.root} data-testid="container" >
            <div className={classes.image}>
                <img src={user.avatar} />
            </div>
            <div data-testid="name">
                <Typography variant="h5" gutterBottom>
                    {user.name}
                </Typography>
            </div>
            <div data-testid="job">
                <Typography variant="h8"  >
                    Job:{user.job}
                </Typography>
            </div>
            <div>
                <Typography variant="body2" color="textSecondary" >{user.about}</Typography>
            </div>

        </div>
    )


}

export default Details;