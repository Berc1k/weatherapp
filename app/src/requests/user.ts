import { handleFetch } from ".";

export function registerRequest(data: object) {
  const url = "user/register";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  handleFetch(url, requestOptions);
}
