import React from 'react';
import InputMask from 'react-input-mask';

const FormComponent = () => {
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log(formValues);
  };

  return (
    <>
              <div className="">
    <form className="w-4/5">
      <div className="mb-4">
        <label htmlFor="name" className="block">
          Nome:
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
        <label htmlFor="email" className="block">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Digite seu email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block">
          Telefone:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Digite seu telefone"
        />
      </div>
    </form>
  </div>
    </>
  );
};

export default FormComponent;
