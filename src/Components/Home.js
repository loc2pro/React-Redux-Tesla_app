import React from 'react';
import styled from 'styled-components';
import Section from './Section';


function Home() {
    return (
        <Container>
            <Section 
                title= "model s"
                description="Order Online for TouchLess Delive"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title= "model y"
                description="Order Online for TouchLess Delive"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title= "model x"
                description="Order Online for TouchLess Delive"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title= "model 3"
                description="Order Online for TouchLess Delive"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title= "Lowest Cost Solar Panels in Amenica"
                description="Monet-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="learn more"
            />
            <Section
                title= "Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Show now"
            />

        </Container>
    )
};

export default Home;

const Container = styled.div`
    height: 100vh;
`
