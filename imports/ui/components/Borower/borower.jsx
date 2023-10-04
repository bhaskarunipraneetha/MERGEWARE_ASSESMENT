import React, { useState, useEffect } from 'react';

function Borrower() {
  const [borrowerData, setBorrowerData] = useState(null);
  const [loanStatus, setLoanStatus] = useState(null);

  useEffect(() => {
    // Simulate fetching borrower data and loan status from an API
    setTimeout(() => {
      const fetchedData = {
        name: 'Alice Smith',
        totalLoans: 3,
        balance: 5000,
      };
      const fetchedLoanStatus = 'Pending'; // Simulated loan status
      setBorrowerData(fetchedData);
      setLoanStatus(fetchedLoanStatus);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Borrower Dashboard</h2>
      {borrowerData && (
        <div>
          <p>Welcome, {borrowerData.name}!</p>
          <p>Total Loans: {borrowerData.totalLoans}</p>
          <p>Balance: ${borrowerData.balance}</p>
          <p>Loan Status: {loanStatus}</p>
        </div>
      )}
      {!borrowerData && <p>Loading borrower data...</p>}
    </div>
  );
}

export default Borrower;
