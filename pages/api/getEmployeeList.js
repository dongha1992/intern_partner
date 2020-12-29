import _ from 'lodash';
const employeeLists = [
  {
    id: 1,
    name: '김동하',
    checked: true,
  },
  { id: 2, name: '김동하2', checked: true },
  { id: 3, name: '김동하3', checked: false },
  { id: 4, name: '김동하4', checked: false },
];

export default async (req, res) => {
  res.statusCode = 200;
  res.json(employeeLists);
};
