export default class ActionButtonSchema {
   constructor(schema) {
      for (let key in schema) {
         this[key] = schema[key];
      }
   }
   setKeyValue(key, value) {
      this[key] = value;
   }
   setFeildOfNameToValue(name, value) {
      if (!this.fields) return;
      let fields = this.fields;

      let foundFeild = fields.find(feild => feild.name === name);
      let fieldIndex = fields.indexOf(foundFeild);
      fields[fieldIndex] = value;
   }
}
