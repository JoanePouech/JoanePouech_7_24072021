import colors from '../../utils/style/colors';
import styled from 'styled-components';
import logo from '../../assets/icon-left-font-monochrome-white.png';

const HeaderContainer = styled.header`
    height: 100px;
    padding: 1rem;
    color: white;
    background-color: ${colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
        height: 80px;
    }
`
const HeaderLogo = styled.img`
    height: 350px;
    @media screen and (max-width: 768px) {
        height: 190px; 
    }
`
const HeaderUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

function Header () {
    return (
        <HeaderContainer>
            <HeaderLogo src={logo}/>
            <HeaderUser>
                <p>Nom du profil</p>
                <p className="remark">Supprimer le compte</p>
            </HeaderUser>
        </HeaderContainer>
    )
};

export default Header;