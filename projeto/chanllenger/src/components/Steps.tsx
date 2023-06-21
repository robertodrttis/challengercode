import { useState } from 'react';

const StepComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-sm w-full p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Componente de Steps</h1>

        {currentStep === 1 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Step 1</h2>
            <p>Conteúdo do Step 1</p>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Step 2</h2>
            <p>Conteúdo do Step 2</p>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Step 3</h2>
            <p>Conteúdo do Step 3</p>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Step 4</h2>
            <p>Conteúdo do Step 4</p>
          </div>
        )}

        <div className="mt-6">
          {currentStep > 1 && (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-2 rounded"
              onClick={handlePreviousStep}
            >
              Anterior
            </button>
          )}

          {currentStep < 4 && (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
              onClick={handleNextStep}
            >
              Próximo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepComponent;
