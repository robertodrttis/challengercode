import { useState } from 'react';

type BoxProps = {
  title: string;
  option1: string;
  price: string;
  isSelected: boolean;
  onSelect: () => void;
};

function Box({ title, option1, price, isSelected, onSelect }: BoxProps) {
  return (
    <div className='box-pick'>
      <div
        className={`box ${isSelected ? 'selected' : ''}`}
        onClick={onSelect}
      >

        <div className="box-options">
          <div className="option">
            <input className='check' type="checkbox" checked={isSelected} onChange={onSelect} />
            <label className='title-pick'>{title}</label>
            <label className='sub-pick'>{option1}</label>
            <label className="box-price">{price}</label>
          </div>
        </div>
      </div>
    </div>
  );
}

function BoxSelection() {
  const [selectedBox, setSelectedBox] = useState('');

  const handleBoxSelect = (box: string) => {
    setSelectedBox(box);
  };

  return (
    <div>
      <div className='container-pick'>
      <h1 className='title-planpick'>Pick Add-ons</h1>
      <label className='sub-titlepick'>Neque porro quisquam est qui dolorem ipsum quia</label>
      <div className="box-container">

        <Box
          title="Customizable Profile"
          option1="Custom theme on your profile"
          price="+$1.99/mo"
          isSelected={selectedBox === 'box1'}
          onSelect={() => handleBoxSelect('box1')}
        />
        <Box
          title="Customizable Profile"
          option1="Custom theme on your profile"
          price="+$2.99/mo"
          isSelected={selectedBox === 'box2'}
          onSelect={() => handleBoxSelect('box2')}
        />
        <Box
          title="Customizable Profile"
          option1="Custom theme on your profile"
          price="+$3.99/mo"
          isSelected={selectedBox === 'box3'}
          onSelect={() => handleBoxSelect('box3')}
        />
      </div>

    </div>

      </div>
   
  );
}

export default BoxSelection;
