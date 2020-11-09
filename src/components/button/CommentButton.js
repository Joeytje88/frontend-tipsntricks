import React from 'react'

const CommentButton = (props) => {
    return (
    <button
        onClick={props.click}
        disabled={props.disabled}
        className="comment-button">
        Plaats je reactie</button>
    )
}

export  default CommentButton;
