import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdFrEGQNlKAroj4TD7DdcAjW8LlfDStJU",
  authDomain: "dtat-react.firebaseapp.com",
  projectId: "dtat-react",
  storageBucket: "dtat-react.appspot.com",
  messagingSenderId: "350383106733",
  appId: "1:350383106733:web:e38e00bfb5566f4555f424",
  measurementId: "G-P4C53NSFPT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export async function fetchEmployees(circle) {
  try {
    const employeeNames = [];
    // Assuming "Employee" is the main collection
    const employeeCollectionRef = collection(db, "UserDetails");
    const snapshot = await getDocs(employeeCollectionRef);
    snapshot.forEach((doc) => {
      if (doc.data().Circle === circle) employeeNames.push(doc.data().Name);
    });

    return employeeNames;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  }
}

export async function taskAllocate(site, lat, longi, date, emp) {
  const docName = `${site}+${date}`;
  const projectCollectionRef = collection(db, "Projects");
  const projectdoc = doc(projectCollectionRef, docName);
  try {
    await setDoc(projectdoc, {
      Longitude: longi,
      Latitude: lat,
      SiteCode: site,
      Employee: emp,
    });
    return true;
  } catch (error) {
    return false;
  }
}
