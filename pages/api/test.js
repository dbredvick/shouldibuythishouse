const axios = require('axios');

export default async function handle(req, res) {

  const result = await axios.get(`http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=${process.env.ZILLOW_API_KEY}&zpid=194556966`);

  res.json(result.data);
}