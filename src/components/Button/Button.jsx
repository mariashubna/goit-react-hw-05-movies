import { useNavigate } from 'react-router-dom';

const Button = ({ to }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)}>Go back</button>
  );
};

export default Button;