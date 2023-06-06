import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ReactDocPage() {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h5 onClick={() => navigate("/")}>Logo</h5>
      <div>ReactDocPage ##{params.docId}</div>
    </>
  );
}
