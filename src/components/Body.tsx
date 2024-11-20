import homeImgSrc from '../assets/city-scape.jpg';
import googleLogo from '../assets/google_logo.svg'
import '../App.css'

export default function Body(props) {
    return (
        <main className={`${props.darkMode ? "dark" : ""} bg-primaryColor flex-grow mx-0 px-0 text-center p-4`}>

            <div className="typing-container">
            <h1 className="typing-animation text-1xl md:text-2xl font-mono font-semibold text-textColorPrimary my-6">
                Hi, welcome to Saturday Night.
                Here, you will find the most mind-rumbling, emotion-inducing, unfiltered raw stories about literally anything.

                Join us to dive in! Who knows, you might also have something to share!
            </h1>
            </div>

            <div className="faded-edges mt-4">
                <img src={homeImgSrc} alt="home image" className="max-w-screen max-h-96 w-auto"/>
            </div>
            <div className="max-w-md mx-auto border-2 border-textFaded p-6 mt-10 rounded-md shadow-md">
                <h2 className="text-2xl text-textColorPrimary font-bold mb-4">Sign up</h2>
                <form className="bg-primaryColor">
                    <label className="text-textColorPrimary font-bold text-left block mb-1" htmlFor="first-name">First
                        Name</label>
                    <input id="first-name" type="text"
                           className="w-full bg-primaryColor text-textColorPrimary border-2 border-textFaded p-2 mb-4 rounded"/>
                    <label className="text-textColorPrimary font-bold text-left block mb-1" htmlFor="last-name">Last
                        Name</label>
                    <input id="last-name" type="text"
                           className="w-full bg-primaryColor text-textColorPrimary border-2 border-textFaded p-2 mb-4 rounded"/>
                    <label className="text-textColorPrimary font-bold text-left block mb-1" htmlFor="email">Email
                        Address</label>
                    <input type="text" id="email"
                           className="w-full bg-primaryColor text-textColorPrimary border-2 border-textFaded p-2 mb-4 rounded"/>
                    <label className="text-textColorPrimary font-bold text-left block mb-1"
                           htmlFor="password">Password</label>
                    <input type="text" id="password"
                           className="w-full bg-primaryColor text-textColorPrimary border-2 border-textFaded p-2 mb-4 rounded"/>
                    <label className="text-textColorPrimary font-bold text-left block mb-1" htmlFor="confirm-password">Confirm Password</label>
                    <input type="text" id="confirm-password"
                           className="w-full bg-primaryColor text-textColorPrimary border-2 border-textFaded p-2 mb-4 rounded"/>
                    <button type="submit"
                            className="w-full bg-secondaryColor text-primaryColor p-2 rounded hover:bg-textFaded">
                        Sign up
                    </button>
                    <p className="mt-4 text-gray-600">Have an account with us already? <a href="#"
                                                                          className="text-secondaryColor font-bold hover:underline hover:text-textFaded ">Login</a>
                    </p>
                    <p className="mt-4 text-gray-600">or</p>
                    <div className="mt-4">
                        <button type="button"
                                className="w-full bg-secondaryColor text-primaryColor p-2 rounded hover:bg-textFaded flex items-center justify-center">
                            <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2"/> Sign up with
                            Google
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}
