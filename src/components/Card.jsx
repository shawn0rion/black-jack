import styled from "styled-components";

const StyledCard = styled.div`
  width: 130px;
  height: 185px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export default function Card(props) {
  const { image } = props;

  return (
    <StyledCard>
      <img src={image.src} alt="card" />
    </StyledCard>
  );
}
