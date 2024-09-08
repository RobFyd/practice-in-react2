import React from 'react';

export function Logger(props) {
    const date = new Date();
    console.log(
        `Created at ${date.getHours()} : ${date.getMinutes()}`
    );
    return <>{props.children}</>;
}