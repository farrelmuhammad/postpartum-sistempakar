import axios from "axios";
const API_URL = "http://localhost:5000/auth/";
const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        // email,
        password,
    });
};
const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.accessToken;
        });
};
const logout = () => {
    localStorage.removeItem("user");
};
const authService = {
    register,
    login,
    logout,
};
export default authService;