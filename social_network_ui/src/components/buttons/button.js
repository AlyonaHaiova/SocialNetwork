import React from 'react';

export const OkButton = ({handleClick}) => {
    return (
        <div>
            <button className="btn-floating waves-effect waves-light green" onClick={handleClick}>
                <i className="small material-icons">check</i>
            </button>
        </div>
    );
}

export const DeleteButton = ({handleClick}) => {
    return (
        <div>
            <button className="btn-floating waves-effect waves-light red" onClick={handleClick}>
                <i className="small material-icons">delete</i>
            </button>
        </div>
    );
}

export const CloseButton = ({handleClick}) => {
    return (
        <div>
            <button className="btn-floating waves-effect waves-light red" onClick={handleClick}>
                <i className="small material-icons">close</i>
            </button>
        </div>
    );
}

export const SendButton = ({handleClick}) => {
    return (
        <div>
            <button className="btn-floating waves-effect waves-light green" onClick={handleClick}>
                <i className="small material-icons">send</i>
            </button>
        </div>
    );
}

export const MessageButton = ({handleClick}) => {
    return (
        <div>
            <button className="btn-floating waves-effect waves-light blue" onClick={handleClick}>
                <i className="small material-icons">message</i>
            </button>
        </div>
    );
}
