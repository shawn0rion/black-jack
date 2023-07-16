import Card from "./Card.jsx";
import styled from "styled-components";

const StyledHand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
  margin-bottom: 40px;
`;

export default function Hand(props) {
  const { cards } = props;

  return (
    <StyledHand>
      {cards.map((card) => {
        return <Card key={`${card.suit}-${card.value}`} image={card.image} />;
      })}
    </StyledHand>
  );
}
