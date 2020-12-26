import _ from "lodash";

function requestDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (
    `${year}.` +
    `${month < 10 ? 0 + "" + month : month}.` +
    `${day < 10 ? 0 + "" + day : day} ` +
    `${hours}:` +
    `${minutes}`
  );
}

const requestInfo = [
  {
    id: 1,
    car_brand: "현대",
    car_type: "아반떼",
    car_number: "01가1234",
    phone_number: "+ 82 10 1234 1234",
    location: "서울특별시 강남구",
    date: requestDate(), // 2020.12.25 15:10,
    description: "빠른 처리 부탁드립니다.",
  },
  {
    id: 2,
    car_brand: "현대",
    car_type: "그랜저 Hybrid",
    car_number: "01나1234",
    phone_number: "+ 82 10 4321 4321",
    location: "서울특별시 강남구",
    date: requestDate(), // 2020.12.25 15:10,
    description: "안녕하세요.",
  },
  {
    id: 3,
    car_brand: "현대",
    car_type: "GENESIS G70",
    car_number: "01다1234",
    phone_number: "+ 82 10 3333 5555",
    location: "서울특별시 강남구",
    date: requestDate(), // 2020.12.25 15:10,
    description: "조심히 오세요.",
  },
];

function findUser(name) {
  const result = _.find(requestInfo, { name });
  return result;
}

export default async (req, res) => {
  const id = req.query.id;
  const result = await findUser(id);

  res.statusCode = 200;
  res.json({ requestInfo: result });
};
