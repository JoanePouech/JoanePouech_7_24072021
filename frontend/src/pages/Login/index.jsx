import colors from '../../utils/style/colors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SquareButton from '../../utils/style/SquareButton';

const LoginContainer = styled.section`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LoginForm = styled.form`
    width: 50vh;
    max-width: 75%;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 2px solid ${colors.secondary};
    background-color: ${colors.tertiary};
    & label {
        font-size: 1.5rem;
        padding-bottom: 1rem;
    }
    & input {
        width: 80%;
        height: 3.5rem;
        margin-bottom:2rem;
        border: 1px solid ${colors.primary};
        background-color: ${colors.tertiary};
    }
`

function Login () {
    return (
        <LoginContainer>
            <h1>Bienvenue sur notre réseau social interne</h1>
            <LoginBox>
                <h2>Déjà inscrit ?</h2>
                <LoginForm>
                    <label for="email" className="primary-color">Email</label>
                    <input name="email" id="email" type="email" required />
                    <label for="password" className="primary-color">Mot de passe</label>
                    <input name="password" id="password" type="text" required />
                    <SquareButton>
                        <Link to="/articles" className="white-color">Se connecter</Link>
                    </SquareButton>
                </LoginForm>
                <h2>Nouveau venu ?</h2>
                <Link to="/signup" className="primary-color">Inscrivez-vous ici</Link>
            </LoginBox>            
        </LoginContainer>
    )
};

export default Login;