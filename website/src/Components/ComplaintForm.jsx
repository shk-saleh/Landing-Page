import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

const ComplaintForm = () => {
  const [data, setData] = useState({
    name: "",
    sap: "",
    email: "",
    program: "",
    issueType: "",
    details: "",
  });

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "complaints"), {
        ...data,
        uid: auth.currentUser.uid,
        status: "Pending",
        timestamp: serverTimestamp(),
      });
      alert("Complaint submitted successfully!");
      setData({ name: "", sap: "", email: "", program: "", issueType: "", details: "" });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="card w-full max-w-2xl bg-base-100 shadow-xl p-5 mx-auto">
      <h2 className="text-xl font-bold mb-4">Register Complaint</h2>
      <input className="input input-bordered w-full mb-2" placeholder="Name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
      <input className="input input-bordered w-full mb-2" placeholder="SAP ID" value={data.sap} onChange={(e) => setData({ ...data, sap: e.target.value })} />
      <input className="input input-bordered w-full mb-2" placeholder="Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
      <input className="input input-bordered w-full mb-2" placeholder="Program" value={data.program} onChange={(e) => setData({ ...data, program: e.target.value })} />
      <select className="select select-bordered w-full mb-2" value={data.issueType} onChange={(e) => setData({ ...data, issueType: e.target.value })}>
        <option disabled value="">Select Issue Type</option>
        <option>Academic</option>
        <option>Finance</option>
        <option>Admin</option>
        <option>Other</option>
      </select>
      <textarea className="textarea textarea-bordered w-full mb-4" placeholder="Details" value={data.details} onChange={(e) => setData({ ...data, details: e.target.value })}></textarea>
      <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ComplaintForm;