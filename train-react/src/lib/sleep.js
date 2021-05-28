/**
 * @since 2017-06-05 17:03:56
 * @author vivaxy
 */

export default timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};
