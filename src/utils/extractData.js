export default function extractData(arr, prop) {
  return arr.map((obj) => obj[prop]);
}
