import { useState } from 'react';

interface PlanCardProps {
  title: string;
  price: string;
  isSelected: boolean;
  onSelect: () => void;
}

function PlanCard({ title, price, isSelected, onSelect }: PlanCardProps) {
  return (
    <div className={`plan-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <h2 className="plan-title">{title}</h2>
      <p className="plan-price">{price}</p>
    </div>
  );
}

function PlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
     <div>
      <h1>Escolha o seu plano</h1>
      <div className="flex">
        <PlanCard
          title="Arcade"
          price="$9.99/mês"
          isSelected={selectedPlan === 'arcade'}
          onSelect={() => handlePlanSelect('arcade')}
        />
        <PlanCard
          title="Advanced"
          price="$19.99/mês"
          isSelected={selectedPlan === 'advanced'}
          onSelect={() => handlePlanSelect('advanced')}
        />
        <PlanCard
          title="Pro"
          price="$29.99/mês"
          isSelected={selectedPlan === 'pro'}
          onSelect={() => handlePlanSelect('pro')}
        />
      </div>
      <button disabled={!selectedPlan}>Selecionar Plano</button>
    </div>

    </div>
  );
}

export default PlanSelection;
