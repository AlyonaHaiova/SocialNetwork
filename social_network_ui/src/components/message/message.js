import React from 'react';

export const Message = ({message, isSender}) => {

    const formatDate = (d) => {
        let date  = new Date(d);
        const offset = date.getTimezoneOffset()
        date = new Date(date.getTime() - (offset*60*1000))
        let f_date= date.toISOString().split('T')[0];
        let f_time = date.toISOString().split('T')[1].split('.')[0];
        return `${f_time}   ${f_date}`;
    }

    return (
      <div className={`message ${isSender ? "ms-right" : "ms-left"}`}>
          <div className={"ms-header"}>
              <span>{message.sender.nickname}</span>
              <span>{formatDate(message.time)}</span>
          </div>
          <p className={"text"}>{message.text}</p>
      </div>
    );
}
