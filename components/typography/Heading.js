const Heading = ({ children, color }) => {
    return (
        <h1 className={`text-${color ? color : 'gray-900'} text-sm font-medium`}>
            {children}
        </h1>
    )
}

export default Heading;