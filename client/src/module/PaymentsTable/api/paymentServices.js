import API from "../../../API";

const paymentServices = {
    getPayments: async () => {
        const payment = await API.get('payments')
        return payment
    }
};
export default paymentServices;