import colors from '../../utils/style/colors';
import styled from 'styled-components';
import RedButton from '../../components/RedButton/index';
import BackButton from '../../components/BackButton/BackButton';
// import {useParams} from 'react-router-dom';
import { articleList } from '../../datas/articleList';
import { commentList } from '../../datas/commentList';
import { Link } from 'react-router-dom';
import Comment from '../../components/Comment/Comment';

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
    // const index = parseInt((useParams().id.split(':')[1]));
    const article = articleList[3];

    return (
        <ArticleDetailContainer>
            <Link to='/articles'>
                <BackButton />
            </Link>            
            <ArticleDetailTitles>
                <h1>{article.title}</h1>
                <div>
                    <RedButton>Supprimer</RedButton>
                    <RedButton>Modifier</RedButton>  
                </div>
        
            </ArticleDetailTitles>
            <ArticleDetailContent>{article.content}</ArticleDetailContent>
            <ArticleDetailAddComment>
                <input name="comment" id="comment" type="text" placeholder="Ajoutez votre commentaire ici" required />
                <RedButton>Envoyer</RedButton>
            </ArticleDetailAddComment>
            <ArticleDetailComments>
                {commentList.map((comment) => (
                    <Comment 
                        key={comment.id}
                        profile={comment.profile}
                        content={comment.content}
                    />
                ))}
            </ArticleDetailComments>        
        </ArticleDetailContainer>
    )
};

export default ArticleDetail;