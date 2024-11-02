export default async function UserData() {
  try {
    const data = await fetch(
      "https://rimac-front-end-challenge.netlify.app/api/user.json"
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
