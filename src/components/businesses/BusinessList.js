import { auth } from "../../firebase-config/firebase";
import { db } from "./config/firebase";
import { useState } from "react";
import { getDocs, collection } from "firebase/firestore"

export const BusinessList = () => {
  const [businesses, setBusinesses] = useState("");

  useState(() => {
    
  }), []

  return (
    <main>
        <h1>All Businesses</h1>
    </main>
  );
};
