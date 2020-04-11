import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrgInfo({ data }) {
  const [org, setOrg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.post('http://localhost:8080/contracts', { data });
    setOrg(res.data);
    setIsLoading(false);
  }

  return (
    <div className="modal-card">
      {isLoading ? <p>Loading...</p> :
        <div>
          <h2>Contract Id:</h2><p>{org.contract_id}</p>
          <h2>Organsiation:</h2><p>{org.organisation_name}</p>
          <h2>Outstanding Balance:</h2><p>{org.ob}</p>
          <h2>Loan Size:</h2><p>{org.loan_size}</p>
          <h2>Interest Rate:</h2><p>{org.interest_rate}</p>
        </div>
      }
    </div>
  )
}

export default OrgInfo
