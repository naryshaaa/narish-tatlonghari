import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Splash extends React.Component{
    
    render(){
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="4">.col-4</MDBCol>
                    <MDBCol size="4">.col-4</MDBCol>
                    <MDBCol size="4">.col-4</MDBCol>
                </MDBRow>
            </MDBContainer>   
        )
    }
}
export default Splash