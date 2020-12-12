//Typography
import Heading from '../typography/Heading';

const PrimaryButton = ({ title }) => {
    return (
        <button className={`rounded-lg border border-blue-500 p-2 pl-3 pr-3 bg-blue-500 duration-300 hover:bg-blue-100`}>
            <Heading color={'white-500'}>{title}</Heading>
        </button>
    )
}

export default PrimaryButton;