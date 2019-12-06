import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import airplane from './images/plane.png';
class Splash extends React.Component{
    
    render(){
        return(
            <div>
                <div class="wave-container text-dark">
                    
                    {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#f3f4f5" fill-opacity="0.9" d="M0,288L60,261.3C120,235,240,181,360,154.7C480,128,600,128,720,138.7C840,149,960,171,1080,170.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>*/}
                    <img src={airplane} className="h-100px" alt="airplane"/>
                    <h1>test</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#f3f4f5" fill-opacity="1" d="M0,288L60,261.3C120,235,240,181,360,154.7C480,128,600,128,720,138.7C840,149,960,171,1080,170.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </div>
            <MDBContainer id="nextPage" className="px-0">
            <MDBRow className="py-5">
                <MDBCol md="12" className="text-center">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="4">.col-4</MDBCol>
                <MDBCol size="4">.col-4</MDBCol>
                <MDBCol size="4">.col-4</MDBCol>
            </MDBRow>
        </MDBContainer>
            </div>
        )
    }
}
export default Splash