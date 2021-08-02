import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Article from '../../components/Article';
import RedButton from '../../components/RedButton/index';
import { useState, useEffect } from 'react';

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

    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem("Token");
                const response = await fetch(`http://localhost:3000/api/articles`, {headers: {"Authorization": "Bearer " + token}})
                const data = await response.json()
                setArticlesList(data)
            } catch (err) {
                console.log(err)
            }
          }
          fetchData()
    }, [])

    return (
        <MainPageContainer>
            <MainPageTitles>
                <h1>Les derniers articles ajoutés :</h1>
                <Link to="/articles/new">
                    <RedButton>Ajouter un article</RedButton>
                </Link>                
            </MainPageTitles>
            <ArticlesContainer>                
                {articlesList.map((article) => (
                    <Link to={"/articles/"+article.id} key={article.id}>
                        <Article 
                            title={article.title}
                            content={article.content}
                            comments={article.comments}
                        />
                    </Link>))}                    
                
            </ArticlesContainer>
        </MainPageContainer>        
    )
};

export default MainPage;