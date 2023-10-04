import React, { useState, useEffect } from 'react';

function Lender() {
  const [lenderData, setLenderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching lender data from an API
    setTimeout(() => {
      const fetchedData = {
        name: 'John Doe',
        totalLoans: 5,
        balance: 10000,
      };
      setLenderData(fetchedData);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Lender Dashboard</h2>
      {isLoading ? (
        <p>Loading lender data...</p>
      ) : (
        <div>
          <p>Welcome, {lenderData.name}!</p>
          <p>Total Loans: {lenderData.totalLoans}</p>
          <p>Balance: ${lenderData.balance}</p>
        </div>
      )}
    </div>
  );
}

export default Lender;
