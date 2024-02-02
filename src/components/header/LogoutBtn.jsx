import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const onLogoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button
            onClick={onLogoutHandler}
            className="inline-block px-6 py-2 duration-200 hover:bg-yellow-200 hover:text-black rounded-full"
        >
            Logout
        </button>
    )
}

export default LogoutBtn