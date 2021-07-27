import colors from '../../utils/style/colors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BlueButton from '../../components/BlueButton/BlueButton';

const SignUpContainer = styled.section`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SignUpBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SignUpForm = styled.form`
    width: 50vh;
    max-width: 60%;
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

function SignUp () {
    return (
        <SignUpContainer>
            <h1>Bienvenue sur notre réseau social interne</h1>
            <SignUpBox>
                <h2>Nouveau venu ?</h2>
                <SignUpForm>
                    <label for="user" className="primary-color">Nom d'utilisateur</label>
                    <input name="user" id="user" type="text" required />
                    <label for="email" className="primary-color">Email</label>
                    <input name="email" id="email" type="email" required />
                    <label for="password" className="primary-color">Mot de passe</label>
                    <input name="password" id="password" type="text" required />
                    <BlueButton>
                        <Link to="/articles" className="white-color">S'inscrire</Link>
                    </BlueButton>
                </SignUpForm>
                <h2>Déjà inscrit ?</h2>
                <Link to="/auth/login" className="primary-color">Connectez-vous ici</Link>
            </SignUpBox>            
        </SignUpContainer>
    )
};

export default SignUp;