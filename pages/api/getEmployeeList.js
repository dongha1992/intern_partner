import _ from 'lodash';
const employeeLists = [
  {
    id: 1,
    name: '김동하',
    checked: true,
  },
  { id: 2, name: '장규석', checked: true },
  { id: 3, name: '박현재', checked: false },
  { id: 4, name: '류지혜', checked: false },
  { id: 4, name: '이민영', checked: false },
];

export default async (req, res) => {
  res.statusCode = 200;
  res.json(employeeLists);
};
