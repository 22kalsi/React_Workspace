import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { useAuth0 } from "@auth0/auth0-react";
import Body from './Body';

const Login = () => {

    // const [modalShow, setModalShow] = useState(false);

    const [isLoading, setLoading] = useState(false);

    
    useEffect(() => {
      function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 1000));
      }
  
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false)
          if (isAuthenticated){
            logout({ returnTo: window.location.origin })
          } else {loginWithRedirect()};
          // setModalShow(true)
        });
      }
    }, [isLoading]);
  
    const handleClickOut = () => setLoading(true);

     const handleClickIn = () => setLoading(true);

    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();


    return (        
<>
    {isAuthenticated ?  <Button variant="outline-success" disabled={isLoading} onClick={!isLoading ? handleClickOut : null}>{isLoading ? 'Loging Out' : ' Logout '}</Button> :  <Button variant="outline-success" disabled={isLoading} onClick={!isLoading ? handleClickIn : null}>{isLoading ? 'Loading…' : ' Login '}</Button> }
    </>
    )
}

export default Login