import styled from "styled-components";

const StyledButton = styled.button`
  padding: 15px 20px;
  color: #333;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  background-color: #eee;
  text-align: center;
  text-transform: uppercase;
`;

export default function Button(props) {
  const { onClick, children } = props;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
