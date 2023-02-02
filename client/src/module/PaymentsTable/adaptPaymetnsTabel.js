import {Tag} from "antd";
import React from "react";

const adaptPaymentsTable = (data) => {
    const columns = [
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Сума',
            dataIndex: 'price',
            key: 'price',
            render:(_,payments) => (
                <>
                    {payments.incomeId ? <Tag key={payments.id} color='green'>+{payments.price} ₴</Tag> : <Tag key={payments.id}  color='red'>-{payments.price} ₴</Tag>}
                </>
            )
        },
        {
            title: 'Рахунок/залишок',
            dataIndex: 'actualBalance',
            key: 'actualBalance',
        },
        {
            title: 'контрагент',
            dataIndex: 'clientId',
            key: 'clientId',
        },
        {
            title: 'категорія',
            dataIndex: 'categoryId',
            key: 'categoryId',
        },
    ];
    return columns
}

export default adaptPaymentsTable