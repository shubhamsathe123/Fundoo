import AxiosServices from './axiosService'
const axiosService = new AxiosServices()

const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/user/'

export default class UserService{

    
    register = (data) => {
        return axiosService.post(`${baseUrl}userSignUp`, data)
    }

    
    login = (data) => {
        return axiosService.post(`${baseUrl}login`, data)
    }

    
    forgot = (data) => {
        return axiosService.post(`${baseUrl}reset`, data)
    }

    resetPassword = (data, token) => {
        return axiosService.post(`${baseUrl}reset-password`, data, {
            headers: {
                Authorization: token
            }
        })
    }
    
}




// export function registration(data) {
//     try {
//         console.log("This is the Sign up part", data);
//         let data1 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`, data);
//         return data1;
//     } catch (error) {
//         return error;
//     }

// };
// export function login(data) {

//     try {
//         console.log("This is the Sign in part", data);
//         let data3 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/login`, data);
//         return data3;
//     } catch (error) {
//         return error;
//     }

// };

// export function forgot(data) {
//     try {
//         console.log("This is forgot password part", data);
//         let data2 = axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/user/reset`, data);
//         return data2;
//     } catch (error) {
//         return error;
//     }

// };