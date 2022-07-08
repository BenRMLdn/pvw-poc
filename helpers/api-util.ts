export async function getPVAResults() {
  const REQ_URL = process.env.PVA_QUERY;
  const response = await fetch(REQ_URL!);
  const data = await response.json();
  const properties = data.properties;
  return properties;
}
