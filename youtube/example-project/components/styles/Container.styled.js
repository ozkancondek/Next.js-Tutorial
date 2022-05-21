import styled from "styled-components";
const Container = styled.div`
  width:1000px;
  max-width:100%;
  padding: 0 20px;
  margin 0 auto;

  h2 {
   /*    color:${(props) => props.bg}; */
      color:${({ bg }) => bg};
      background-color: ${({ theme }) => theme.colors.header}
  }
  &:hover {
     background-color:black;
  }
`;

export default Container;
