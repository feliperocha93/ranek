export function serialize(obj) {
  let queystring = "";
  for (let key in obj) {
    queystring += `&${key}=${obj[key]}`;
  }
  return "/produto?_limit=10" + queystring;
}
