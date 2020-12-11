//Typography
import Heading from '../typography/Heading';

const HospitalAvatar = ({ name }) => {
    return (
        <div className={'flex justify-center items-center w-10 h-10 rounded bg-gray-300'}>
            <Heading color={'white-500'}>{name.slice(0, 2).toUpperCase()}</Heading>
        </div>
    )
}

export default HospitalAvatar;