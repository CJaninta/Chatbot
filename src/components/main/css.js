import {
    makeStyles,
    withStyles,
    fade
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        padding: '2em 0em',
    },
    paper: {
        width: '30vw',
        minHeight: '10em',
        borderRadius: '1em',
    },
    head: {
        width: '100%',
        minHeight: '5em',
        backgroundColor: 'rgba(255, 99, 0, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        borderTopLeftRadius: '1em',
        borderTopRightRadius: '1em'
    },
    title: {
        fontSize: 40,
        fontFamily: 'Kanit',
        fontWeight: 'bold',
        color: 'rgb(255, 255, 255)'
    },
    title_icon: {
        position: 'relative',
        top: '10px',
        left: '5px',
        marginLeft: '10px'
    },
    text_icon: {
        position: 'relative',
        marginRight: '10px',
        color: 'rgb(255, 255, 255)',
    },
    body: {
        //width: '100%',
        height: '45em',
        borderLeft: '5px solid rgba(255, 99, 0, 1)',
        borderRight: '5px solid rgba(255, 99, 0, 1)',
        backgroundColor: 'rgb(255, 255, 255)'
    },
    text_bot: {
        width: '100%',
        minHeight: '6em',
        alignItems: 'center',
        display: 'flex',
    },
    main_text_bot: {
        minWidth: '10em',
        minHeight: '4em',
        alignItems: 'center',
        display: 'flex',
        marginLeft: '2em'
    },
    sec_text_bot: {
        marginLeft: 15,
    },
    text_user: {
        width: '100%',
        minHeight: '6em',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    main_text_user: {
        minWidth: '10em',
        minHeight: '4em',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '2em',
    },
    footer: {
        minHeight: '4em',
        borderBottomLeftRadius: '1em',
        borderBottomRightRadius: '1em',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: 'rgba(255, 99, 0, 1)',
    },
    user_text: {
        width: '20em',
        height: '2.5em',
        borderRadius: '1em',
        backgroundColor: 'rgb(255,255,255)'
    },
    send_button: {
        color: 'rgb(255,255,255)'
    }
}));

export const UserInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: '1em',
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 18,
        fontFamily: 'Kanit',
        fontWeight: 'bold',
        color: 'rgba(255, 99, 0, 1)',
        width: '20em',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            boxShadow: `${fade(theme.palette.warning.light, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.warning.light,
        },
    },
}))(InputBase);

