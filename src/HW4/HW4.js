export const user = {
  name: 'John',
};
export let admin = {};
export function addAgeByPrompt() {
  const input = window.prompt('Enter age');
  user.age = input;
  return user;
}
export function assignRole() {
  addAgeByPrompt();
  admin = Object.assign({}, user, { role: 'admin' });
  return admin;
}

export function saveObjectKeyToVariables() {
  const { name, age, role } = admin;
  return console.log(name, age, role);
}
