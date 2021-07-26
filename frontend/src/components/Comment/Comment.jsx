import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CommentContainer = styled.div`
    & p{
        margin-bottom: 0.2rem;
    }    
`
const ContentContainer = styled.p`
    width: 95%;
    padding: 1rem;
    margin: 0;
    color: white;
    background-color: ${colors.secondary};
    border-radius: 8px;
`

function Comment ({profile, content}) {
    return (
        <CommentContainer>
            <p className="remark">{profile}</p>
            <ContentContainer>
                {content}
            </ContentContainer>
        </CommentContainer>
    )

};

export default Comment;