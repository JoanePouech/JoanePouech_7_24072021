import BackButton from "../../components/BackButton/BackButton";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import BlueButton from "../../components/BlueButton/BlueButton";
import { Link } from "react-router-dom";

const ArticleNewContainer = styled.section`

`
const ArticleNewForm = styled.form`
    max-width: 80%;
    padding: 5rem 0;
    margin: auto;
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
    & #content {
        height: 30rem;
    }
`

function ArticleNew () {
    return (
        <ArticleNewContainer>
            <BackButton />   
            <h1>Soumettre un nouvel article</h1>         
            <ArticleNewForm>
                <label for="title" className="primary-color">Titre de l'article</label>
                <input name="title" id="title" type="text" required />
                <label for="content" className="primary-color">Contenu de l'article</label>
                <input name="content" id="content" type="text" required />
                <BlueButton>
                    <Link to="/articles" className="white-color">Soumettre</Link>
                </BlueButton>
            </ArticleNewForm>
        </ArticleNewContainer>

    )
};

export default ArticleNew;