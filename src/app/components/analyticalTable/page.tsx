'use client'
import { AnalyticalTable, Select, FlexBox, Button, Title, ThemeProvider } from "@ui5/webcomponents-react";
import deleteIcon from "@ui5/webcomponents-icons/dist/delete.js";
import editIcon from "@ui5/webcomponents-icons/dist/edit.js";
import React, { useEffect, useState } from 'react'
import RegisterForm from "../RegisterForm/page";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { deleteEmployee, getEmployees } from "@/app/redux/features/emplyoees/employeeSlice";

const Table = (props: any) => {
    // console.log(props);
    const dispatch = useDispatch<AppDispatch>();


    const [employess, setEmployees] = useState<any>();
    const [registerOpen, setRegiterOpen] = useState(false);
    const [employeId, setEmployeeId] = useState<any>();
    const [typeEdit, setTypeEdit] = useState<any>();
    const [rerender, setRender] = useState<any>();
    useEffect(() => {
        setEmployees(props.emp);
    }, [props.emp]);

    useEffect(() => {
        
        dispatch(getEmployees());

    }, [rerender])
    function handleStatus(event: any) {
        setRegiterOpen(!registerOpen);
        console.log(registerOpen);
        // console.log(event);
        setEmployeeId(event);
    }

    function handleDelete(event:any){
        setRender(event._id);
        dispatch(deleteEmployee({_id:event._id}));
    }
    return (
        <>
            <>
                <RegisterForm
                    registerOpen={registerOpen}
                    employeId={employeId}
                    setRegiterOpen={setRegiterOpen}
                    type={typeEdit}
                />
            </>
            <>
            <ThemeProvider>
                <AnalyticalTable
                    columns={[
                        {
                            Header: 'Full Name',
                            accessor: 'fullname',
                            headerTooltip: 'Full Name'
                        },
                        {
                            Header: 'Email',
                            accessor: 'email',
                            headerTooltip: 'Email'
                        },
                        {
                            Header: 'Password',
                            accessor: 'password',
                            headerTooltip: 'Password'
                        },
                        {
                            Header: 'Age',
                            accessor: 'age',
                            className: 'superCustomClass',
                            disableFilters: false,
                            disableGroupBy: true,
                            disableSortBy: false,
                            // hAlign: 'End'
                        },
                        {
                            Header: 'Contact No',
                            accessor: 'contact',
                            headerTooltip: 'contact'
                        },
                        {
                            Header: 'Experience',
                            accessor: 'experience'
                        },
                        {
                            Header: 'Country',
                            accessor: 'country'
                        },
                        // {
                        //     Header: 'Date of Birth',
                        //     accessor: 'birthday'
                        // },
                        {
                            Cell: (instance: any) => {
                                const { cell, row, webComponentsReactProperties } = instance;
                                // disable buttons if overlay is active to prevent focus
                                const isOverlay = webComponentsReactProperties.showOverlay;
                                return (
                                    <FlexBox style={{ flexDirection: "row",justifyContent:"space-between" }}>

                                        <Button
                                            // className="actions2"
                                            style={{marginRight:"10px"}}
                                            tooltip="Edit"
                                            icon={editIcon}
                                            onClick={() => {
                                                // setDialogType("Error");
                                                handleStatus(row.original);
                                                setTypeEdit("edit");
                                            }}
                                        />
                                        <Button
                                            // className="actions2"
                                            style={{marginRight:"10px"}}
                                            tooltip="delete"
                                            icon={deleteIcon}
                                            onClick={() => {
                                                handleDelete(row.original);
                                            }}
                                        />

                                    </FlexBox>)
                            },

                            Header: 'Actions',
                            accessor: '.',
                            // cellLabel: function _a(){},
                            disableFilters: true,
                            disableGroupBy: true,
                            disableResizing: true,
                            disableSortBy: true,
                            id: 'actions',
                            minWidth: 100,
                            width: 100
                        }
                    ]}

                    data={
                        employess?.data
                    }
                    filterable
                    groupBy={[]}
                    groupable
                    header="Employee Details data"
                    infiniteScroll
                   
                   
                    onSort={function _a() { }}
                    onTableScroll={function _a() { }}
                    // selectedRowIds={{
                    //     '3': false
                    // }}
                    // selectionMode="SingleSelect"
                    tableHooks={[]}
                    withRowHighlight
                />
                </ThemeProvider>
            </>
        </>
    )
}

export default Table