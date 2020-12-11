const Footer = () => {
    return (
        <div className={'flex flex-row sm:flex-col p-8 bg-white-500 font-normal text-sm space-x-8 sm:space-x-0 sm:space-y-8 shadow'}>
            <div className={'w-2/4 sm:w-full'}>
                <h1 className={'font-bold text-xl'}>About Us</h1>
                <p className={'mt-4'}>
                    We are a team of nurses, doctors, tecnhologists and executives dedicated to help nurses find jobs that they love.
                </p>
                <p className={'mt-2'}>
                    All copyrights reserved © 2020 - Health Explore
                </p>
            </div>
            <div className={'w-1/4 sm:w-full'}>
                <h1 className={'font-bold text-xl'}>Sitemap</h1>
                <ul>
                    <li><p className={'mt-4'}>Nurses</p></li>
                    <li><p className={'mt-2'}>Employers</p></li>
                    <li><p className={'mt-2'}>Social Networking</p></li>
                    <li><p className={'mt-2'}>Jobs</p></li>
                </ul>
            </div>
            <div className={'w-1/4 sm:w-full'}>
                <h1 className={'font-bold text-xl'}>Privacy</h1>
                <ul>
                    <li><p className={'mt-4'}>Terms of use</p></li>
                    <li><p className={'mt-2'}>Privacy policy</p></li>
                    <li><p className={'mt-2'}>Cookie policy</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;