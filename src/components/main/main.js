import { useState, useEffect } from 'react';
import { useStyles, UserInput } from './css';

import FaceIcon from '@material-ui/icons/Face';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';

import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

import { Scrollbars } from 'react-custom-scrollbars';
import { ApiAiClient } from 'api-ai-javascript';

export default function Main() {

    const accessToken = process.env.REACT_APP_TOKEN;
    const client = new ApiAiClient({ accessToken });

    const classes = useStyles();
    const [chat, setChat] = useState([
        { who: 'bot', text: 'สวัสดีจ้า~~~~' }
    ]);
    const [text, setText] = useState('');

    useEffect(() => {
        ans()
    }, [chat])

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const send_message = (user_text = text) => {
        let message = chat
        message = [...message, { who: 'user', text: user_text }]
        if (user_text !== '') {
            setChat(message)
        }
    }

    const ans = () => {
        let message = chat
        if (text !== '') {
            client.textRequest(text).then(res => {
                const bot_answer = res.result.fulfillment.speech
                message = [...message, { who: 'bot', text: bot_answer }]
                setChat(message)
            })
        }
        setText('');
    }

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

    const text_bot = (message) => {
        return (
            <div className={classes.text_bot}>
                <div className={classes.main_text_bot}>
                    <FaceIcon style={{ fontSize: 35, color: 'rgba(255, 75, 57, 1)' }} />
                    <Chip
                        className={classes.sec_text_bot}
                        style={{ backgroundColor: 'rgba(255, 176, 57, 1)', }}
                        label={<h2 style={{ fontFamily: 'Kanit' }}>{message}</h2>}
                    />
                </div>
            </div>
        )
    }

    const text_user = (message) => {
        return (
            <div className={classes.text_user}>
                <div className={classes.main_text_user}>
                    <Chip
                        style={{ backgroundColor: 'rgba(255, 176, 57, 1)', }}
                        label={<h2 style={{ fontFamily: 'Kanit' }}>{message}</h2>}
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
                        Chatbot
                        <FaceIcon style={{ fontSize: 45 }} className={classes.title_icon} />
                    </span>
                </div>
                <div className={classes.body}>
                    <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                        {chat.map(value => {
                            if (value.who === 'bot') {
                                return text_bot(value.text)
                            }
                            else {
                                return text_user(value.text)
                            }
                        })}
                    </CustomScrollbars>
                </div>
                <div className={classes.footer}>
                    <AccountCircleIcon style={{ fontSize: 35 }} className={classes.text_icon} />
                    <UserInput
                        placeholder="What do you want to talk ?"
                        className={classes.user_text}
                        value={text}
                        onChange={handleChange}
                        onKeyDown={(e) => e.key === 'Enter' ? send_message(e.target.value) : null}
                    />
                    <IconButton color="primary" aria-label="text" onClick={() => send_message()}>
                        <SendIcon fontSize="large" className={classes.send_button} />
                    </IconButton>
                </div>
            </Box>
        </div>
    )
}

