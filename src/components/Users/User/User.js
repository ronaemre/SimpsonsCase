import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles'
import { Link } from "react-router-dom";

//props are coming from PRODUCTS to PRODUCT...


//User=CHILD

const User = ({ user }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={user.avatar.split("/revision")[0]} title={user.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {user.name}
                    </Typography>

                </div>
                {/*      <Typography variant="h5" >
                    {user.job}
                </Typography> */}
                {/*   <Typography variant="body2" color="textSecondary">{user.about}</Typography> */}
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Delete">
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
