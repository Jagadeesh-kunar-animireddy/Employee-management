'use client'
import { ThemeProvider, Form, FormGroup, FormItem, Input, Select, CheckBox, InputType, Button, ButtonType, MultiComboBox, MultiComboBoxItem, DatePicker, Label, Option, Title, Card, Dialog } from '@ui5/webcomponents-react'
import React, { useEffect, useRef, useState } from 'react'
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import { getEmployees, postEmployee, updateEmployee } from '@/app/redux/features/emplyoees/employeeSlice';
import { RootState, AppDispatch } from '@/app/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';

const RegisterForm = (props: any) => {

    const [registerOpen, setRegiterOpen] = useState<any>();

    //all values in this object
    const [resValues, setResValues] = useState<any>();
    const [currentDoc, setCurrentDoc] = useState<any>();
    const [existData, setExistData] = useState<any>();

    const [fullname, setFullname] = useState<any>();
    const [email, setEmail] = useState<any>();
    const [password, setPassword] = useState<any>();
    const [age, setAge] = useState<any>();
    const [contact, setContact] = useState<any>();
    const [experience, setExperience] = useState<any>();
    const [country, setCountry] = useState<any>();
   

    // const { registerData } = useSelector((state: RootState) => state.jobsReducer);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        setTimeout(() => {
            setCurrentDoc(document.body);
        }, 3000);
    }, []);

useEffect(() =>{
   if(resValues){
    // console.log(resValues);
    dispatch(getEmployees());
   }
},[resValues])

    const handleSubmit = (e: any) => {
        const values = {
            fullname: fullname,
            email: email,
            password: password,
            age: age,
            contact: contact,
            experience: experience,
            country: country,
            
        };
        e.preventDefault();
        setResValues(values);
        props.setRegiterOpen(false);
        // dispatch(getEmployees());

        dispatch(postEmployee(values));


    };

    const handleUpdate = (e: any) => {
        const values = {
            fullname: fullname,
            email: email,
            password: password,
            age: age,
            contact: contact,
            experience: experience,
            country: country,
            // birthday: birthday,
            // payment: payment,
        };
        e.preventDefault();
        setResValues(values);
        props.setRegiterOpen(false);
        // dispatch(getEmployees());
        console.log(values, "valuessssssssssssssssssssssssss");

        dispatch(updateEmployee({ ...values, _id: props?.employeId?._id }))



    };
    

    // const handlePaymentSelectionChange = (e) => {
    //     const selected = Object.values(e.detail.items).map((val) => val.text);
    //     setPayment(selected);
    // };

    return (
        <>
            <div>
                {currentDoc && props.registerOpen &&
                    createPortal(
                        <Dialog open={props.registerOpen} >
                            <Card>
                                <ThemeProvider>
                                    <Form onSubmit={(props.type === "edit") ? handleUpdate : handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <FormGroup titleText="Employee  Account Creation" >
                                            <FormItem label={<Label required>FullName</Label>}>
                                                <Input name="fullName" required value={props?.employeId?.fullname} onChange={(e: any) => {
                                                    setFullname(e.target.value);
                                                }} />
                                            </FormItem>
                                            <FormItem label={<Label required>Email</Label>}>
                                                <Input name="email" required type={InputType.Email} value={props?.employeId?.email} onChange={(e: any) => {
                                                    setEmail(e.target.value);
                                                }} />
                                            </FormItem>
                                            <FormItem label={<Label required>Password</Label>}>
                                                <Input name="password"  required type={InputType.Password} value={props?.employeId?.password} onChange={(e: any) => {
                                                    setPassword(e.target.value);
                                                }} />
                                            </FormItem>

                                            <FormItem label={<Label>Age</Label>}>
                                                <Input name="age" type={InputType.Number} value={props?.employeId?.age} onChange={(e: any) => {
                                                    setAge(e.target.value);
                                                }} />
                                            </FormItem>
                                            <FormItem label={<Label required>Contact No</Label>}>
                                                <Input name="contact" type={InputType.Number} value={props?.employeId?.contact} onChange={(e: any) => {
                                                    setContact(e.target.value);
                                                }} />
                                            </FormItem>
                                            <FormItem label={<Label >Experience</Label>}>
                                                <Input name="experience" value={props?.employeId?.experience} onChange={(e: any) => {
                                                    setExperience(e.target.value);
                                                }} />
                                            </FormItem>
                                            <FormItem label="Country">
                                                <Select name="country" onChange={(e: any) => {
                                                    setCountry(e.target.value);
                                                }} value={props?.employeId?.country}>
                                                    <Option>India</Option>
                                                    <Option>France</Option>
                                                    <Option>Italy</Option>
                                                    <Option>USA</Option>
                                                    <Option>Germany</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem>
                                                {props.type === "edit" ? (<Button type={ButtonType.Submit}>Update</Button>) : (<Button type={ButtonType.Submit}>Submit</Button>)}
                                                <Button style={{ marginLeft: "20px" }} onClick={
                                                    () => {
                                                        props.setRegiterOpen(false)
                                                    }
                                                }>Cancel</Button>
                                            </FormItem>

                                        </FormGroup>
                                    </Form>
                                </ThemeProvider>
                            </Card>
                        </Dialog>,
                        currentDoc ?? null
                    )
                }
            </div>
        </>
    )
}

export default RegisterForm