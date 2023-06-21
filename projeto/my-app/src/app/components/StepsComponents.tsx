import React, { useState } from 'react';

const StepComponent: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <div>Passo 1</div>;
      case 2:
        return <div>Passo 2</div>;
      case 3:
        return <div>Passo 3</div>;
      case 4:
        return <div>Passo 4</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStepContent()}
      <button onClick={previousStep} disabled={currentStep === 1}>
        Anterior
      </button>
      <button onClick={nextStep} disabled={currentStep === 4}>
        Próximo
      </button>
    </div>
  );
};

export default StepComponent;
