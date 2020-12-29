import _ from 'lodash';

const carList = [
  {
    현대: [
      { id: 1, name: '코나' },
      { id: 2, name: '투싼' },
      { id: 3, name: '아반떼' },
      { id: 4, name: '싼타페' },
      { id: 5, name: '베뉴' },
    ],
  },
  {
    기아: [
      { id: 1, name: '기아1' },
      { id: 2, name: '기아2' },
      { id: 3, name: '기아3' },
      { id: 4, name: '기아4' },
      { id: 5, name: '기아5' },
    ],
  },
  {
    아우디: [
      { id: 1, name: '아우디1' },
      { id: 2, name: '아우디2' },
      { id: 3, name: '아우디3' },
      { id: 4, name: '아우디4' },
      { id: 5, name: '아우디5' },
    ],
  },
];

export default async (req, res) => {
  res.statusCode = 200;
  res.json(carList);
};
