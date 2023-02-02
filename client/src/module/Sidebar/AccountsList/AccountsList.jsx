import React, {useEffect, useState} from 'react';
import {List} from "antd";
import accountsServices from "../api/AccountsServices";

const AccountsList = () => {
    const [accounts, setAccounts] = useState();

    useEffect(() => {
        (async () => {
            const {data} = await accountsServices.getAccounts();
            setAccounts(data);
        })()
    },[]);
    return (
        <div>
            <List
                size="small"
                 dataSource={accounts}
                renderItem={(item) => <List.Item key={item.id}>{item.name} - ₴ {item.balance}</List.Item>}
            />
        </div>
    );
};

export default AccountsList;