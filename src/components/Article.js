import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    function howLong(minutes) {
        if (minutes < 30) {
            const emoji = "☕️";
            return emoji.repeat(Math.ceil(minutes/5));
        } else {
            const emoji = "🍱";
            return emoji.repeat(Math.ceil(minutes/10));
        }
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <br></br>
            <small>{howLong(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;