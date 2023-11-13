export async function handleFetch(url: string, requestOptions: object) {
  try {
    const response = await fetch(
      `http://localhost:8080/${url}`,
      requestOptions
    );
    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
