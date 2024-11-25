import { useSelector } from 'react-redux';

const useUser = () => {
  const user = useSelector((state) => state.user.data); // Adjust this according to your actual state structure
  return user;
};

export default useUser;
