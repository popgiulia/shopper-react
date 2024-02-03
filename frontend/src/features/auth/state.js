import { localStorageGetItem } from "../../utils/local-storage-utils";

const user = localStorageGetItem('user', 'object');

const initialState = {
    user: user || null,
    statuses: {}
}

export default initialState;