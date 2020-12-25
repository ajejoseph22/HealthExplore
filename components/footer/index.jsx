const Footer = () => (
  <div className="w-full  p-4">
    <div className=" bg-white sm:flex mb-4 p-4">
      <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto m-1">
        <div className="font-bold text-red-light text-xl mb-2">About us</div>
        <p className="text-black leading-normal">
          We are a team of nurses, doctors, technologists and executives
          dedicated to help nurses find jobs that they love.
        </p>
        <br />
        <p>All copyrights reserved &copy; - 2020 - Health Explore</p>
      </div>

      <div className="sm:w-1/4 h-auto m-1">
        <div className="font-bold text-orange text-xl mb-2">SiteMap</div>
        <ul className="list-reset leading-normal">
          <li className="hover:text-orange text-grey-darker">Nurses</li>
          <li className="hover:text-orange text-grey-darker">Employers</li>
          <li className="hover:text-orange text-grey-darker">
            Social Networking
          </li>
          <li className="hover:text-orange text-grey-darker">Jobs</li>
        </ul>
      </div>
      <div className="sm:w-1/4 h-auto sm:mt-0 m-1">
        <div className="font-bold text-xl text-blue mb-2">Privacy</div>
        <ul className="list-reset leading-normal">
          <li className="hover:text-blue text-grey-darker">Terms of use</li>
          <li className="hover:text-blue text-grey-darker">Privacy policy</li>
          <li className="hover:text-blue text-grey-darker">Cookie policy</li>
        </ul>
      </div>
    </div>
  </div>
);
export default Footer;
