import { useState } from 'react';

interface PlanCardProps {
  title: string;
  price: string;
  image: string;
  isSelected: boolean;
  onSelect: () => void;
}

function PlanCard({ title, price, image, isSelected, onSelect }: PlanCardProps) {
  return (
    <div className='plan-column'>
      <div className={`plan-box ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
        <div className={`plan-card ${isSelected ? 'selected' : ''}`}>
          <img src={image} alt={title} className="plan-image" />
          <div className='box-text'>
            <h2 className="plan-title">{title}</h2>
            <p className="plan-price">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isAnnual, setIsAnnual] = useState(false);

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handleToggleMode = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div>
      <h1 className='title-plan'>Select Your Plan</h1>
      <label className='sub-titleplan'>Neque porro quisquam est qui dolorem ipsum quia</label>
      <div className="flex">
        {isAnnual ? (
          <>
            <PlanCard
              image="/assets/images/icon-arcade.svg"
              title="Arcade"
              price="$100.99/years"
              isSelected={selectedPlan === 'arcade'}
              onSelect={() => handlePlanSelect('arcade')}
            />
            <PlanCard
              image="/assets/images/icon-advanced.svg"
              title="Advanced"
              price="$109.99/years"
              isSelected={selectedPlan === 'advanced'}
              onSelect={() => handlePlanSelect('advanced')}
            />
            <PlanCard
              image="/assets/images/icon-pro.svg"
              title="Pro"
              price="$229.99/years"
              isSelected={selectedPlan === 'pro'}
              onSelect={() => handlePlanSelect('pro')}
            />
          </>
        ) : (
          <>
            <PlanCard
              image="/assets/images/icon-arcade.svg"
              title="Arcade"
              price="$9.99/mês"
              isSelected={selectedPlan === 'arcade'}
              onSelect={() => handlePlanSelect('arcade')}
            />
            <PlanCard
              image="/assets/images/icon-advanced.svg"
              title="Advanced"
              price="$19.99/mês"
              isSelected={selectedPlan === 'advanced'}
              onSelect={() => handlePlanSelect('advanced')}
            />
            <PlanCard
              image="/assets/images/icon-pro.svg"
              title="Pro"
              price="$29.99/mês"
              isSelected={selectedPlan === 'pro'}
              onSelect={() => handlePlanSelect('pro')}
            />
          </>
        )}
      </div>
      <button
        className={`button-plan relative flex items-center justify-center w-16 h-8 rounded-full ${isAnnual ? 'bg-blue-500' : 'bg-gray-400'}`}
        onClick={handleToggleMode}
      >
        <span className={`absolute left-0 flex items-center justify-center w-8 h-8 rounded-full transition-transform ${isAnnual ? 'transform translate-x-full bg-white' : 'bg-gray-300'}`}>
          {isAnnual ? (
            <svg className="w-4 h-4 text-gray-500 fill-current" viewBox="0 0 24 24">
              <path d="M13 2h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 10v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm-2 2h-2v4h2v-4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
              <path d="M11 2a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-12a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-4a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1z" />
            </svg>
          )}
        </span>
        <span className={`ml-1 text-xs ${isAnnual ? 'text-white' : 'text-gray-700'}`}>
          {isAnnual ? 'Yearly' : 'Monthly'}
        </span>
      </button>



    </div>
  );
}

export default PlanSelection;
