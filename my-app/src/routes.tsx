import { Chat } from "./components/applications/ticketChat";
import { Login } from "./components/Login/Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/constants";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]
export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]