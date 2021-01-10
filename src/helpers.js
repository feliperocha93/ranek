export function serialize(obj) {
  let queystring = "";
  for (let key in obj) {
    queystring += `&${key}=${obj[key]}`;
  }
  return "/produtos?_limit=10" + queystring;
}

export function mapFields(options) {
  const object = {};
  for (let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]];
    object[field] = {
      get() {
        return this.$store.state[options.base][field];
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value });
      },
    };
  }
  return object;
}
