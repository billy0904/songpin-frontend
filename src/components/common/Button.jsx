import styled from 'styled-components';

const Button = ({ name, onClick }) => {
  return (
    <>
      <Wrapper>
        <button onClick={onClick}>{name}</button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  button {
    cursor: pointer;
    border: 1px solid var(--light_black, #232323);
    background: var(--light_black, #232323);
    width: 500px;
    height: 60px;
    flex-shrink: 0;
    color: var(--f8f8f8, #fcfcfc);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export default Button;