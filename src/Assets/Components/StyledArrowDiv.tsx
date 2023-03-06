import styled from 'styled-components';

// ----------- BASE COMPONENT ----------- //
function ArrowDiv(props: ArrowDivProps) {
  return <div className={props.className}></div>;
}

// ----------- COMPONENT STYLES ----------- //
const StyledArrowDiv = styled(ArrowDiv)`
  align-self: center;
  justify-self: center;
  transform-origin: left;
  transform: translateX(20px) rotate(-${(props) => props.angle}deg);
  height: 2px;
  width: 40px;
  background: #00db04;
`;

// ----------- COMPONENT TYPES ----------- //
type ArrowDivProps = { className?: string; angle: number };

// -------------------------------------- //
// ----------- EXPORTING DATA ----------- //
export default StyledArrowDiv;
