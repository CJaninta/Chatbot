import { useStyles, UserInput } from './css';

import FaceIcon from '@material-ui/icons/Face';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';

import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

import { Scrollbars } from 'react-custom-scrollbars';

export default function Main() {

    const classes = useStyles();

    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
            borderRadius: 6,
            backgroundColor: 'rgba(255, 102, 39, 0.6)',
            width: 30,
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };

    const CustomScrollbars = props => (
        <Scrollbars
            renderThumbHorizontal={renderThumb}
            renderThumbVertical={renderThumb}
            {...props}
        />
    );

    const text_bot = () => {
        return (
            <div className={classes.text_bot}>
                <div className={classes.main_text_bot}>
                    <FaceIcon style={{ fontSize: 35, color: 'rgba(255, 75, 57, 1)' }} />
                    <Chip
                        className={classes.sec_text_bot}
                        style={{ backgroundColor: 'rgba(255, 176, 57, 1)', }}
                        label={<h2 style={{ fontFamily: 'Kanit' }}>Hello11111 กเดห</h2>}
                    />
                </div>
            </div>
        )
    }

    const text_user = () => {
        return (
            <div className={classes.text_user}>
                <div className={classes.main_text_user}>
                    <Chip
                        style={{ backgroundColor: 'rgba(255, 176, 57, 1)', }}
                        label={<h2 style={{ fontFamily: 'Kanit' }}>Hello11111 กเดห</h2>}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <Box className={classes.paper} boxShadow={3}>
                <div className={classes.head}>
                    <span className={classes.title}>
                        Chat Bot
                        <FaceIcon style={{ fontSize: 45 }} className={classes.title_icon} />
                    </span>
                </div>
                <div className={classes.body}>
                    <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                        {text_bot()}
                        {text_user()}
                        {text_bot()}
                        {text_user()}
                        {text_bot()}
                        {text_user()}
                        {text_bot()}
                        {text_user()}
                        {text_bot()}
                        {text_user()}
                        {text_bot()}
                        {text_user()}
                    </CustomScrollbars>
                </div>
                <div className={classes.footer}>
                    <AccountCircleIcon style={{ fontSize: 35 }} className={classes.text_icon} />
                    <UserInput
                        placeholder="What do you want to talk ?"
                        className={classes.user_text}
                    />
                    <IconButton  color="primary" aria-label="text" >
                        <SendIcon fontSize="large" className={classes.send_button} />
                    </IconButton>
                </div>
            </Box>
        </div>
    )
}

