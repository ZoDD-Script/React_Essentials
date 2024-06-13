export default function Tabs({ children, button, ButtonContainer }) {
  // const ButtonCont   ainer = buttonContainer
  
  return(
    <>
      <ButtonContainer>
        {button}
      </ButtonContainer>
      {children}
    </>
  )
}