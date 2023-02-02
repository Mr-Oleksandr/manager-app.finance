import API from "../../../API";

const accountsServices = {
    getAccounts: async () => {
        const accounts = await API.get('accounts')
        return accounts
    }
};
export default accountsServices;