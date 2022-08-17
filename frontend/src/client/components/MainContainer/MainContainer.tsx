import React from 'react';
import { ContainerStyled} from "./style";

const MainContainer = (props) => {

    const {children} = props;
        return (
            <ContainerStyled>
                {children}
            </ContainerStyled>
        )
    }
    
export default MainContainer;
