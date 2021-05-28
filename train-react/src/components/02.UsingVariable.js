/**
 * @since 2017-05-23 15:45:57
 * @author vivaxy
 */

import React from 'react';

const comment = 'Hello World!';

// ok
// const element = <p>{`This is a comment: ${comment}`}</p>;

// better
const element = <p>This is a comment: {comment}</p>;

export default element;
