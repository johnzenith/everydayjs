/**
 * Get payload size
 * @param {object} payload
 * @return {number|null} payload size in bytes on success. Null otherwise.
 */
const requestSize = (payload) => {
  if (typeof TextEncoder !== 'undefined') {
    return new TextEncoder().encode(JSON.stringify(payload)).length;
  }
  if (typeof Buffer !== 'undefined') {
    return  Buffer.byteLength(JSON.stringify(payload));
  }
  return null;
}
