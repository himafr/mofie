import { PersonDetails } from "../types/types";
import { apiToken, apiUrl } from "./tmdb";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${apiToken}`,
};

export async function getPersonById(
  id:string|undefined
): Promise<PersonDetails> {
   if(id==undefined)throw new Error("there is no movie selected")
  const url = `${apiUrl}person/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: PersonDetails = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch movie credits:", error);
    throw error;
  }
}