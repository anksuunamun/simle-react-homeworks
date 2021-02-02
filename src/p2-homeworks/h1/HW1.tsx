import React from 'react';
import Message, {MessagePropsType} from './Message';
import AlternativeMessage from './AlternativeMessage';
import s from './HW1.module.css';


const messageData: MessagePropsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
};
const alternativeMessageData: MessagePropsType = {
    avatar: 'data:image/png;base64,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',
    name: 'Another Name',
    message: 'another text',
    time: '22:10',
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <div className={s.messagesWrapper}>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
                <AlternativeMessage
                    avatar={alternativeMessageData.avatar}
                    name={alternativeMessageData.name}
                    message={alternativeMessageData.message}
                    time={alternativeMessageData.time}
                />
            </div>


        </div>
    );
}

export default HW1;
