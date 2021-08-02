import colors from '../../utils/style/colors';
import styled from 'styled-components';
import RedButton from '../../components/RedButton/index';
import BackButton from '../../components/BackButton/BackButton';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Comment from '../../components/Comment/Comment';
import { useState, useEffect } from 'react';

const ArticleDetailContainer = styled.section`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    & h1 {
        align-self: flex-start;
    }
`
const ArticleDetailTitles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 425px) {
        flex-direction: column-reverse;
    }
`
const ArticleDetailContent = styled.p`
    padding: 1rem;
    text-align: justify;
    background-color: ${colors.tertiary};
`
const ArticleDetailAddComment = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & input {
        width: 100%;
        height: 40px;
        border: 1px solid ${colors.secondary};
    }
`
const ArticleDetailComments = styled.div`
    overflow-y: scroll;
    overflow-x: wrap;
`

function ArticleDetail () {
    const index = parseInt(useParams().id);
    const [article, setArticle] = useState([]);
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const token = localStorage.getItem("Token");
            try {
              const response = await fetch(`http://localhost:3000/api/articles/`+index, {headers: {"Authorization": "Bearer " + token}})
              const data = await response.json()
              setArticle(data)
            } catch (err) {
              console.log(err)
            }
            try {
                const response = await fetch(`http://localhost:3000/api/comments/`+index, {headers: {"Authorization": "Bearer " + token}})
                const data = await response.json()
                setCommentsList(data)
              } catch (err) {
                console.log(err)
              }
          }
          fetchData()
    }, [])

    return (
        <ArticleDetailContainer>
            <Link to='/articles'>
                <BackButton />
            </Link>            
            <ArticleDetailTitles>
                <h1>{article.title}</h1>
                {article.UserId === localStorage.getItem("UserId") ? (
                    <div>
                        <RedButton>Supprimer</RedButton>
                        <RedButton>Modifier</RedButton>  
                    </div>
                ):(
                    <div>
                    </div>
                )}        
            </ArticleDetailTitles>
            <ArticleDetailContent>{article.content}</ArticleDetailContent>
            <ArticleDetailAddComment>
                <input name="comment" id="comment" type="text" placeholder="Ajoutez votre commentaire ici" required />
                <RedButton>Envoyer</RedButton>
            </ArticleDetailAddComment>
            <ArticleDetailComments>
                {commentsList.map((comment) => (
                    <Comment 
                        key={comment.id}
                        profile={comment.username}
                        content={comment.post}
                    />
                ))}
            </ArticleDetailComments>        
        </ArticleDetailContainer>
    )
};

export default ArticleDetail;