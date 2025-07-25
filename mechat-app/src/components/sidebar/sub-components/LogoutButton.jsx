import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../../hooks/useLogout.js";

const LogoutButton = () => {

    const { logout } = useLogout();

    return (
        <div>
            <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
        </div>
    );
};
export default LogoutButton;