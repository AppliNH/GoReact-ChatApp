import React from 'react';

const Message = ({ username, message, isFromCurrent }) => {
    return (
        <div style={{ alignSelf: isFromCurrent ? "flex-end" : "flex-start" }}>
            {!isFromCurrent ? <p style={{ color: "black", fontStyle: "italic" }}>{username}</p> : null}

            <div className={isFromCurrent ? "user-message" : "not-user-message"}>
                <p>{message}</p>

            </div>
        </div>

    );
};

export default Message;