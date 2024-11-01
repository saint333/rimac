export const PlansData = async () => {
  const data = await fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json');
  const response = await data.json();
  return response.list;
}