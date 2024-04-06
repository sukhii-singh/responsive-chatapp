import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";


export const GetCookie = () => {
    const navigate = useNavigate()
    const cooki = Cookies.get("user");
    if (cooki) {
        // Navigate(`)
        // navigate("/chat", replace = { true})
        return JSON.parse(cooki);
    }

    return cooki
}
