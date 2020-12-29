import _ from 'lodash';
const companyList = [
  {
    id: 1,
    name: '현대',
  },
  { id: 2, name: '기아' },
  { id: 3, name: '아우디' },
  { id: 4, name: '벤츠' },
  { id: 4, name: '인피니티' },
];

export default async (req, res) => {
  res.statusCode = 200;
  res.json(companyList);
};
