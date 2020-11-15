import React, {useState, useEffect} from 'react'

const InputComment = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const username = localStorage.getItem("username");

useEffect(()=>{
    if(username !== null){
        setIsLoggedIn(true);
    }
})

    return (
        <div className="comment">
            {isLoggedIn !== false &&
                <div className="comment-heading">
                    <p className="username-comment">{username}</p>
            </div>}
        </div>
    )

};
export default InputComment;
