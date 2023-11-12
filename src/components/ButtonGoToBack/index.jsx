import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <button onClick={goBack}>
      Volver Atrás
    </button>
  );
};

export default BackButton;
