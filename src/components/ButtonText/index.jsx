import  {Container}  from './styles'

export const ButtonText = ({title, isactive = false, ...rest}) => {
    return (
        <Container
        type= 'button'
        isactive={isactive ? 'true' : 'false'}
        {...rest}
        >
            {title}
        </Container>
    );

}