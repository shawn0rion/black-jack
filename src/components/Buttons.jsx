import styled from "styled-components";
import Button from "./Button.jsx";
// if the result is not "", then show replay button

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 15px;
`;

export default function Buttons(props) {
  const { result, onHitClick, onStayClick, onReplayClick } = props;

  return (
    <StyledButtons>
      {result === "" && (
        <>
          <Button onClick={onHitClick}>Hit</Button>
          <Button onClick={onStayClick}>Stay</Button>
        </>
      )}
      {result !== "" && <Button onClick={onReplayClick}>Replay</Button>}
    </StyledButtons>
  );
}
