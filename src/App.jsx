
import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import Form from './Form';

function App() {
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);

  const handleDisableSubmit = (disabled) => {
    setSubmitDisabled(disabled);
  };

  return (
    <div className="container mx-auto p-4">
      <Button
        type="button"
        onClick={() => handleDisableSubmit(true)}
        className="bg-red-500 text-white"
      >
        Disable Submit
      </Button>
      <Button
        type="button"
        onClick={() => handleDisableSubmit(false)}
        className="bg-green-500 text-white"
      >
        Enable Submit
      </Button>
      <Card>
        <Form isSubmitDisabled={isSubmitDisabled} />
      </Card>
    </div>
  );
}

export default App;
