import React from 'react';
import {
    PlusCircleOutlined,
    EditOutlined
} from '@ant-design/icons';
import './AddAccounts.css'
import ModalComponent from "../../../Components/Modal/Modal";
import CreateAccounts from "../CreateAccounts/CreateAccounts";

const AddAccounts = () => {
    return (
        <div className='addAccounts'>
            <div>Мої рахунки</div>
            <div className="addAccounts group-icons">
                <ModalComponent icon={<PlusCircleOutlined className="addAccounts icon-plus"/>}><CreateAccounts/></ModalComponent>
                <EditOutlined/>
            </div>
        </div>
    );

};

export default AddAccounts;