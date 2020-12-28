import _ from 'lodash';
const employeeLists = [
  {
    id: 1,
    name: '김동하',
    status: true,
  },
  { id: 2, name: '김동하2', status: true },
  { id: 3, name: '김동하3', status: false },
  { id: 4, name: '김동하4', status: false },
];

export default async (req, res) => {
  res.statusCode = 200;
  res.json(employeeLists);
};
