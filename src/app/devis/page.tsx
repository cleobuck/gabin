import React, { useEffect } from "react";
import DevisForm from "./DevisForm";

import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get("/api/hello");
    console.log("Serverless function response:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const DevisPage = () => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Demande de Devis</h1>
      <DevisForm />
    </div>
  );
};

export default DevisPage;
