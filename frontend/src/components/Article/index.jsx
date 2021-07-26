import colors from '../../utils/style/colors';
import styled from 'styled-components';
import iconDislike from '../../assets/iconDislike.png';
import iconLike from '../../assets/iconLike.png';

const StyledArticleContainer = styled.div`
    width: 30vw;
    margin-bottom: 2rem;
    padding: 0.5rem;
    border: solid 1px ${colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (max-width: 768px) {
        width: 40vw;
    }
    @media screen and (max-width: 425px) {
        width: 80vw;
    }
`
const ArticleSummary = styled.div`
    font-size: 1.5rem;
    height: 100px;
    color: ${colors.primary};
    padding: 0.5rem;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: ${colors.tertiary};
`
const ArticleSocial = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    & .remark {
        color: ${colors.secondary};
    }
`
const ArticleLike = styled.img`
    height: 20px;
`

function Article ({title, content, like, comments}) {
    return (
        <StyledArticleContainer>
            <h2>{title}</h2>
            <p className="primary-color">Aperçu:</p>
            <ArticleSummary>{content}</ArticleSummary> 
            <ArticleSocial>
                <ArticleLike src={like === 1? iconLike:iconDislike}/>
                <p className="remark">Commentaires: {comments}</p>
            </ArticleSocial>
        </StyledArticleContainer>        
    )
};

export default Article;