export function arrayChunks(array, limit) {
  let chunks = [];
  let i = 0;
  while (i < array.length) {
    chunks.push(array.slice(i, (i = i + limit)));
  }
  return chunks;
}
