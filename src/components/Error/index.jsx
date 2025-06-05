import styled from "styled-components"
import ErrorImage from "../../assets/undraw_page_not_found_su7k.svg"
import colors from "../../Colors"
function Error() {
  return (
    <ErrorBody>
        <ErrorContainer>
      <ErrorTitle>Oups...</ErrorTitle>
      <ErrorImageStyled src={ErrorImage} alt="Page not found" />
      <ErrorText>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorText>
    </ErrorContainer>
    </ErrorBody>
    
  )
}

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`
const ErrorImageStyled = styled.img`
  width: 400px;
  height: 300px;
`
const ErrorText = styled.p`
  margin: 0;
`
const ErrorTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`
const ErrorBody = styled.h2`
  background-color: ${colors.backgroundDark2};
  margin-top: 50px;
  margin-right: 300px;
  margin-left: 300px;
`
export default Error
