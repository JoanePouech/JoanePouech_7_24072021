import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { articleList } from '../../datas/articleList';
import Article from '../../components/Article';
import RedButton from '../../components/RedButton/index';

const MainPageContainer = styled.section`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    & h1 {
        align-self: flex-start;
    }
`
const MainPageTitles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 425px) {
        flex-direction: column-reverse;
    }
`
const ArticlesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width: 425px) {
        justify-content: center;
    }
`

function MainPage () {
    return (
        <MainPageContainer>
            <MainPageTitles>
                <h1>Les derniers articles ajoutés :</h1>
                <Link to="/articles/new">
                    <RedButton>Ajouter un article</RedButton>
                </Link>                
            </MainPageTitles>
            <ArticlesContainer>
                {articleList.map((article) => (
                    <Link to={"/articles/:"+article.id} key={article.id}>
                        <Article 
                            title={article.title}
                            content={article.content}
                            like={article.like}
                            comments={article.comments}
                        />
                    </Link>))}
            </ArticlesContainer>
        </MainPageContainer>        
    )
};

export default MainPage;