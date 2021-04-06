import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {requestsAPI} from './RequestsAPI';

const Request: React.FC<any> = (props) => {

    const [success, setSuccess] = useState<boolean>(true);
    const [response, setResponse] = useState<string>('');

    const onRequestSend = () => {
        requestsAPI.authTest(success)
            .then(response => setResponse(response))
    }
    return (
        <div>
            <SuperButton onClick={onRequestSend}>
                Send request
            </SuperButton>
            <SuperCheckbox checked={success}
                           onChangeChecked={setSuccess}/>
            <div>Response:</div>
            <div>{response}</div>
        </div>
    )
}

export default Request;