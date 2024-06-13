export default function Tabs({ children, button, ButtonContainer = 'menu' }) {
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