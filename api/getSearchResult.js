import _ from 'lodash';

const searchItems = [
  {
    id: 1,
    name: '창신동',
    address: '서울시 종로구 창신동',
  },
  {
    id: 2,
    name: '가좌역',
    address: '서울시 서대문구 가좌동',
  },
  {
    id: 3,
    name: '구신동',
    address: '서울시 종로구 창신동',
  },
  {
    id: 4,
    name: '나좌역',
    address: '서울시 서대문구 가좌동',
  },
  {
    id: 5,
    name: '가가좌역',
    address: '서울시 서대문구 가좌동',
  },
];

function findCompany(name) {
  const result = _.filter(searchItems, { name });
  return result;
}

export default async (req, res) => {
  console.log(req, res);
  const name = req.query.name;
  const result = await findCompany(name);

  res.statusCode = 200;
  res.json({ searchResult: result });
};
