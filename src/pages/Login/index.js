import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

export default function Login(){
  const history = useHistory();

  useEffect(() => {
    (function loadData(){
      const token = localStorage.getItem('token');
      if(token){
        history.push('/');
      }
    })()
  }, []);

  return(
    <h1>Login</h1>
  );
}