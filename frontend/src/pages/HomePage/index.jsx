import colors from '../../utils/style/colors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SquareButton from '../../utils/style/SquareButton';

const HomePageContainer = styled.section `
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const HomePageChoice = styled.div`
    width: 70vh;
    margin: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
const HomePageBox = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Homepage () {
    return (
        <HomePageContainer>
            <h1>Bienvenue sur notre réseau social interne</h1>
            <HomePageChoice>
                <HomePageBox>
                    <h2>Nouveau venu ?</h2>
                    <SquareButton>
                        <Link to="/signup" className="white-color">S'inscrire</Link>
                    </SquareButton>
                </HomePageBox>
                <HomePageBox>
                    <h2>Déjà inscrit ?</h2>
                    <SquareButton>
                        <Link to="/login" className="white-color">Se connecter</Link>
                    </SquareButton>
                </HomePageBox>
            </HomePageChoice>
        </HomePageContainer>        
    )
};

export default Homepage;