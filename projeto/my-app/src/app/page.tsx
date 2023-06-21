
import StepsComponent from './components/StepsComponents';

export default function Home() {
  useClient(); // Marca o componente Home como um componente do lado do cliente

  return (
    <>
      <div>
        <StepsComponent />
      </div>
    </>
  );
}
function useClient() {
  throw new Error('Function not implemented.');
}

