"use client"
import { Toolbar, Text, Button, Icon, ToolbarSpacer, Bar, Input, Title, Card } from '@ui5/webcomponents-react'
import React, { useEffect, useState } from 'react'
import em from '../../images/employees.jpg'
import Table from '../analyticalTable/page'
import RegisterForm from '../RegisterForm/page'
import Link from 'next/link'
import { getEmployees } from '@/app/redux/features/emplyoees/employeeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/redux/store'



const HomeMain = () => {

    const { emp } = useSelector((state: RootState) => state.jobsReducer);
    const [empData, setEmpData] = useState();
    const [registerOpen, setRegiterOpen] = useState(false);
    const [rerender, setRerender] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {

        setTimeout(() => {
            dispatch(getEmployees());
        }, 1000);


    }, [])

    useEffect(() => {
        setEmpData(emp);
    }, [emp])

    return (
        <div>
            <Bar
                design="Header"
                endContent={<>
                    <Button
                        design="Default"
                        // icon="employee"
                        onClick={() => {
                            setRegiterOpen(true);
                        }}
                    >
                        <RegisterForm registerOpen={registerOpen}
                            setRegiterOpen={setRegiterOpen} />
                        {/* <Link href="/components/RegisterForm">Register</Link>  */}
                        Register Emplyoyee
                    </Button>
                    <Button
                        design="Default"
                        icon="employee"
                        onClick={function _a() { }}
                    >
                        <Link href="/Login" style={{ marginLeft: '6px',textDecoration:"none" }} target="_blank">Login</Link>
                    </Button>
                </>}
                startContent={<><h3>Employee management system</h3>
                    <Button
                        design="Default"
                        // icon="employee"
                        onClick={function _a() { }}
                        
                    >
                        <Link href="/components/About" target="_self" style={{textDecoration:"none"}}>
                            About
                        </Link>
                    </Button>
                    {/* <Button
                        design="Default"
                        icon="employee"
                        onClick={function _a() { }}
                    >
                        Contact us
                    </Button> */}
                </>}
            >
            </Bar>
            <Card >
                <div><h1><center>
                    Welcome to IT Employee management system
                </center>
                </h1>
                    <p style={{ fontSize: "16px" }}><img src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?cs=srgb&dl=pexels-fauxels-3184357.jpg&fm=jpg" width={300} height={150} style={{ float: 'right' }} />
                        &emsp;In 2024, the corporate landscape in India is bustling with innovation, growth, and unprecedented changes. As the country emerges as a global economic powerhouse, the lives of corporate employees are evolving rapidly. Let's delve into the current state of corporate employee life in India, exploring the data, challenges, solutions, and the way forward.
                        This theory is one of the recent models for explaining the relationship between work and family. According to this model, experience in one role (work or family) will enhance the quality of life in the other role. In other words, this model tries to explain the positive effects of the work–family relationship.
                    </p>
                </div>

            </Card>

            <Table emp={empData} />


        </div>
    )
}

export default HomeMain