import React from 'react';

import propsType from 'prop-types';

export default function section(props) {
    const className = ["section"];
        className.push(props.className);
            if(props.isCenteredContent)className.push("center-content");

    return (
        <section className={className.join(" ")}>
            {props.children}
        </section>
    )
}

section.propsType = {
    isCenteredContent : propsType.bool,
    className : propsType.string
}
