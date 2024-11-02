export const PlansData = async () => {
  try {
    const data = await fetch(
      "https://rimac-front-end-challenge.netlify.app/api/plans.json"
    );
    const response = await data.json();
    return response.list;
  } catch (error) {
    console.error(error);
  }
};
