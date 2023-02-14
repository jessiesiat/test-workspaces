import wretch from "wretch";

let http = (base, options) => wretch(base, options);

export default http;