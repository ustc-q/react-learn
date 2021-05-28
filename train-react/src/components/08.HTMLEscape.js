/**
 * @since 20180702 19:37
 * @author vivaxy
 */

import React from 'react';

const markup = '<span>Text</span>';
export default <div dangerouslySetInnerHTML={{ __html: markup }} />;
// export default <div>{markup}</div>;
