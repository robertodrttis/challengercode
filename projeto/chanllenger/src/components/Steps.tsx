import { ChangeEvent, useState } from 'react';
import FormComponent from './form';
import PlanCard from './plancard';

const StepComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);


  

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setPhoneError('');
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleNext = () => {
    if (!phone) {
      setPhoneError('Por favor, preencha o campo de telefone.');
    }

    if (!email) {
      setEmailError('Por favor, preencha o campo de e-mail.');
    }

    if (phone && email) {
        handleNextStep();
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-screen-lg mx-auto bg-white rounded shadow" style={{ height: '615px', width: '900px' }}>
                {currentStep === 1 && (
                    <div className="grid grid-cols-2">
                                    <div className="p-3 image-container">
                                    <div className="p-3 relative">
                    <img src="/assets/images/bg-sidebar-desktop.svg" alt="Descrição da imagem" className="max-w-full" />
                    
                        <div className="step-info-top absolute top-0 left-0">
                            <ul className="step-items">
                            <li className='step-info'> 
                                <div className='ball'>
                                    <p className="step-number">1</p>
                                </div>     
                                <p className="step-name">STEP 1</p>
                                <label className="step-subname">Your Info</label>
                            </li>
                            <li className='step-info'>      
                            <div className='ball-off'>
                                    <p className="step-number">2</p>
                                </div> 
                                <p className="step-name">STEP 2</p>
                                <label className="step-subname">Select Plan</label>
                            </li>
                            <li className='step-info'>      
                            <div className='ball-off'>
                                    <p className="step-number">3</p>
                                </div> 
                                <p className="step-name">STEP 3</p>
                                <label className="step-subname">Add Ons</label>
                            </li>
                            <li className='step-info'>      
                            <div className='ball-off'>
                                    <p className="step-number">4</p>
                                </div> 
                                <p className="step-name">STEP 4</p>
                                <label className="step-subname">Summary</label>
                            </li>
                            </ul>
                        </div>
                        </div>

                        </div>
                        <div className="p-2 mr-10">
                            {/* Formulário na coluna direita */}
                            <div className="text-left margin-left: -40px;">
                                <form className="w-full mt-10">
                                    <h1 className='title'>Person Info</h1>
                                    <label className='sub-title'>Neque porro quisquam est qui dolorem ipsum quia</label>
                                    <div className="mb-4 mt-10">
                                    <label htmlFor="name" className="block text-label">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        placeholder="Digite seu nome"
                                    />
                                    </div>

                                    <div className="mb-4">
                                    <label htmlFor="email" className="block text-label">
                                        Email Address:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        placeholder="Digite seu email"
                                        value={email}
                                        onChange={handleChangeEmail}
                                        required
                                        />
                                        {emailError && <p className="text-red-500">{emailError}</p>}
                                    </div>

                                    <div className="mb-4">
                                    <label htmlFor="phone" className="block text-label">
                                        Phone number:
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full p-2 border border-gray-300 rounded"
                                        placeholder="Digite seu telefone"
                                        value={phone}
                                        onChange={handleChangePhone}
                                        required
                                        />
                                        {phoneError && <p className="text-red-500">{phoneError}</p>}
                                    </div>
            
                                </form>
                                
                            </div>
                            {currentStep < 4 && (
                    <button
                    className="button-next bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                    onClick={handleNext}
                    >
                    Next Step
                    </button>
                )}
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                <div>
                    <div className="grid grid-cols-2">
                                    <div className="p-3 image-container">
                                    <div className="p-3 relative">
                    <img src="/assets/images/bg-sidebar-desktop.svg" alt="Descrição da imagem" className="max-w-full" />
                    
                        <div className="step-info-top absolute top-0 left-0">
                            <ul className="step-items">
                            <li className='step-info'> 
                                <div className='ball-off'>
                                    <p className="step-number">1</p>
                                </div>     
                                <p className="step-name">Step 1</p>
                                <label className="step-subname">Your Info</label>
                            </li>
                            <li className='step-info'>      
                            <div className='ball'>
                                    <p className="step-number">2</p>
                                </div> 
                                <p className="step-name">Step 2</p>
                                <label className="step-subname">Your Info</label>
                            </li>
                            <li className='step-info'>      
                            <div className='ball-off'>
                                    <p className="step-number">3</p>
                                </div> 
                                <p className="step-name">Step 3</p>
                                <label className="step-subname">Your Info</label>
                            </li>
                            <li className='step-info'>      
                            <div className='ball-off'>
                                    <p className="step-number">4</p>
                                </div> 
                                <p className="step-name">Step 4</p>
                                <label className="step-subname">Your Info</label>
                            </li>
                            </ul>
                        </div>
                        </div>

                        </div>
                        <div className="p-2 mr-10">
                            {/* Formulário na coluna direita */}
                            <div className="text-left margin-left: -40px;">
                            <PlanCard></PlanCard>    
                            </div>
         
                {currentStep > 1 && (
                    <button
                    className="button-back bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 mr-2 rounded"
                    onClick={handlePreviousStep}
                    >
                    Go back
                    </button>
                )}

          
                            {currentStep < 4 && (
                    <button
                    className="button-next bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                    onClick={handleNextStep}
                    >
                    Next Step
                    </button>
                )}
                        </div>
                    </div>
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

       
            </div>
    </div>
  );
};

export default StepComponent;
