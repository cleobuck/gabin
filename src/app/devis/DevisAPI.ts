import axios from "axios";

export async function fetchData() {
  try {
    const response = await axios.get("/api/hello");
    console.log("Serverless function response:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
