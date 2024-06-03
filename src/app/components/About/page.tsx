import { Card, Link } from '@ui5/webcomponents-react'
import React from 'react'

const About = () => {
    return (
        <div>
            <Card style={{}}>
                <div style={{marginTop:"3%"}}>
                    <div><h1><center>
                        Welcome to IT Employee management system
                    </center>
                    </h1>
                        <p style={{ fontSize: "16px" }}><img src="https://www.shutterstock.com/image-vector/group-portrait-funny-smiling-office-260nw-1249852108.jpg" width={300} height={150} style={{ float: 'right' }} />
                            &emsp;In 2024, the corporate landscape in India is bustling with innovation, growth, and unprecedented changes. As the country emerges as a global economic powerhouse, the lives of corporate employees are evolving rapidly. Let's delve into the current state of corporate employee life in India, exploring the data, challenges, solutions, and the way forward.
                            This theory is one of the recent models for explaining the relationship between work and family. According to this model, experience in one role (work or family) will enhance the quality of life in the other role. In other words, this model tries to explain the positive effects of the work–family relationship.
                        </p>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column",justifyContent:"center", marginTop:"10%",marginBottom:"10%",alignItems:"center" }}>
                    <h1>ABOUT US</h1>
                    <div style={{display:"flex", flexDirection:"column",justifyContent:"center"}}>
                        <h3><Link rel="stylesheet" href="https://www.epfindia.gov.in/site_en/For_Employees.php" >Employee PF found</Link></h3>
                        <h3><Link rel="stylesheet" href="https://www.epfindia.gov.in/site_en/For_Employees.php" >Employee needs</Link></h3>
                        <h3><Link rel="stylesheet" href="https://www.epfindia.gov.in/site_en/For_Employees.php" >Employee </Link></h3>
                        <h3><Link rel="stylesheet" href="https://www.epfindia.gov.in/site_en/For_Employees.php" >Employee Main</Link></h3>
                        <h3><Link rel="stylesheet" href="https://www.epfindia.gov.in/site_en/For_Employees.php" >Employee Account</Link></h3>
                        <h3><Link rel="stylesheet" href="https://www.epfindia.gov.in/site_en/For_Employees.php" >Employee </Link></h3>
                    </div>
                    
                </div>
            </Card>
        </div>
    )
}

export default About