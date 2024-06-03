
"use client"
import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "@/app/Login/firstLogin.css"
import { Option } from '@ui5/webcomponents-react'
import { AppDispatch, RootState } from '@/app/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployees } from '@/app/redux/features/emplyoees/employeeSlice'
import HomeMain from '@/app/components/homeMain/page'
const LoginPage = () => {

  const { emp } = useSelector((state: RootState) => state.jobsReducer);
  const [empData, setEmpData] = useState<any>();
  const [emailData, setEmailData] = useState<any>();
  const [passwordData, setPasswordData] = useState<any>();
  const [openHome, setOpenHome] = useState<any>(false);
  const [logInFailed, setLogInFailed] = useState<any>(false);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {

    dispatch(getEmployees());

  }, [getEmployees])

  useEffect(() => {
    console.log(emp);

    setEmpData(emp);
  }, [emp])


  return (
    <>
      <div>
        {
          openHome ? <HomeMain /> :
            <div className='bg'>
              <div className='login'>
                <Box
                  sx={{ width: '600px', height: '300px', border: '1px solid black', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }}>
                  <Box sx={{ width: '300px' }}>
                    <div style={{ display: "flex", flexDirection: 'column' }}>
                      <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        variant="outlined"
                        size="small"
                        label="Email"
                        type='email'
                        required
                        onChange={
                          (e: any) => {
                            setEmailData(e.target.value);
                          }
                        }
                      />
                    </div>
                    <div style={{ marginTop: "10px", display: "flex", flexDirection: 'column' }}>
                      <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        variant="outlined"
                        size="small"
                        label="Password"
                        type='password'
                        required
                        onChange={
                          (e: any) => {
                            setPasswordData(e.target.value);
                          }
                        }
                      />
                    </div>
                    <div style={{ marginTop: "20px", marginLeft: '225px' }}>
                      <Button variant="contained" onClick={() => {
                        empData?.data?.forEach((element: any) => {
                          if ((element.email === emailData) && (element.password === passwordData)) {
                            console.log("login successfully");
                            setOpenHome(true);
                            setEmailData('');
                            setPasswordData('');
                          }
                          else{
                            setLogInFailed(true);
                            setEmailData('');
                            setPasswordData('');
                          }
                        });

                      }}>Login</Button>
                    </div>
                    {logInFailed && 
                    <div>
                      <p style={{color:"red"}}>please Enter valid Email and Passwod credentials</p>
                      </div>}
                  </Box>
                </Box>

              </div>
            </div>

        }
      </div>


    </>
  )
}

export default LoginPage