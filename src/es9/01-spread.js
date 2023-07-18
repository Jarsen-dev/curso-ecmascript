const user = { username: 'jarsen', age: 25, country: 'MX' };
const { username, ...values } = user;
console.log(username);
console.log(values);

/*
jarsen
{ age: 25, country: 'MX' }
*/