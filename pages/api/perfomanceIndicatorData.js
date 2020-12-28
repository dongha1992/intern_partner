import _ from 'lodash';
FORM_USER, NUMBER_OF_CONTRACTS, SUM_OF_CHARGE;

const performanceIndicatorData = [
  { numberOfCompaniesUseForm: '930개 +' },
  { numberOfContracts: '940,000개 +' },
  { sumOfCharge: '850억 +' },
];

export default async (req, res) => {
  const data = req.query.data;
  const result = await performanceIndicatorData(data);

  res.statusCode = 200;
  res.json({ performance: result });
};
