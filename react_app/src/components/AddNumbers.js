import React, { useState } from 'react';

function AddNumbers() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAddition = async () => {
    try {
      // Construct the URL with query parameters
      const url = new URL(
          'https://3c453cd2a3c54100bea6f03aac76e9c9.vfs.cloud9.us-east-1.amazonaws.com/api/add/'
      );
      url.searchParams.append('number1', number1);
      url.searchParams.append('number2', number2);

      // Make the fetch request
      const response = await fetch(url);
      const data = await response.json();

      // Set the result
      setResult(data.result);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setResult('Error performing the calculation');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleAddition}>Add Numbers</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default AddNumbers;
