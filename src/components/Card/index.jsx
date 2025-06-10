import DefaultPicture from "../../assets/profile.png"
import PropTypes from "prop-types"
import styled from "styled-components"
import colors from "../../Colors"
// styled-components
const CardLabel = styled.span`
  color: ${colors.textLight};
  font-size: 22px;
  padding: 5px 10px;
  align-self: flex-start;
`
const CardTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
`
const CardImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: ${colors.backgroundDark2};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px ${colors.backgroundDark2};
  }
`

// Card component
function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}
// PropTypes
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}
Card.defaultProps = {
  label: "",
  title: "",
  picture: DefaultPicture,
}

export default Card
