const Logo = ({ children, color }) => {
    return (
        <h1 className={`text-${color ? color : 'blue-500'} font-bold text-lg`}>
            {children}
        </h1>
    )
}

export default Logo;