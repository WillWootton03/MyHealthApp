import { useEffect, useState } from "react";

function Message() {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        fetch('/api/message')
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch(() => setMessage('Failed to load message'));
    }, []);

    return(
        <div>
            <h2>Backend Response</h2>
            <p>{message}</p>
        </div>
    );
}

export default Message;
