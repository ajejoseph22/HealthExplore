//Typography
import Logo from '../typography/Logo';

const ProfileButton = ({ initials, notifications }) => {
    return (
        <button className={`w-8 h-8 flex justify-center items-center relative p-1 rounded-full bg-blue-500`}>
            <div className={`w-6 h-6 flex justify-center items-center absolute border-4 border-white-500 bg-red-500 rounded-full -right-4 -top-2`}>
                <span className={'text-white-500 text-xs leading-3 '}>{notifications}</span>
            </div>
            <Logo color={'white-500'}>{initials}</Logo>
        </button>
    )
}

export default ProfileButton;