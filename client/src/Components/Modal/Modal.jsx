import { Button, Modal } from 'antd';
import { useState } from 'react';
const ModalComponent = ({children, icon}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div onClick={showModal}>
                {icon}
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    );
};
export default ModalComponent;