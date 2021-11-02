import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        width: '400px',
        height: '666px',
        marginLeft: '400px'

    },
    media: {
        paddingTop: '50%',

    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',

    }
}));