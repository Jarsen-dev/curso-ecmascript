const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-01');
console.table(matchers);

/*
[
  '2022-01-01',
  '2022',
  '01',
  '01',
  index: 0,
  input: '2022-01-01',
  groups: undefined
]
*/