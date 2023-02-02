import React, {useEffect, useState, } from 'react';
import {Table, Tag} from "antd";
import accountsServices from "../Sidebar/api/AccountsServices";
import paymentServices from "./api/paymentServices";
import adaptPaymentsTable from "./adaptPaymetnsTabel";

const PaymentTable = () => {
    const [payments, setPayments] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const {data} = await paymentServices.getPayments();
            setPayments(data.rows);
            setLoading(false)
        })()
    },[]);
    if(loading){
        return <>Loading</>
    }
    return (
        <div>
            <Table dataSource={payments} columns={adaptPaymentsTable()} pagination={false} />
        </div>
    );
};

export default PaymentTable;