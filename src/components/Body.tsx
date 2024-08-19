import googleLogoSrc from '../assets/Google__G__logo.svg';
import '../App.css'

const Body = () => {
    return (
        <main className="container mx-auto flex-grow text-center p-4">

            <div className="typing-container">
                <h1 className="text-1xl md:text-2xl font-mono text-wrap font-semibold text-textColorPrimary my-6">
                    Hi, welcome to Saturday Night.
                    Here, you will find the most mind-rumbling, emotion-inducing, unfiltered raw stories about literally
                    anything.

                    Join us to dive in! Who knows, you might also have something to share!
                </h1>
            </div>
            <div className="max-w-md mx-auto bg-primaryColor border-2 border-textFaded p-6 mt-10 rounded-md shadow-md">
                <h2 className="text-2xl text-textColorPrimary font-bold mb-4">Sign Up</h2>
                <form className="bg-primaryColor">
                    <input type="text" placeholder="Full name"
                           className="w-full bg-primaryColor border-2 border-textFaded p-2 mb-4 rounded"/>
                    <input type="text" placeholder="Email address"
                           className="w-full bg-primaryColor border-2 border-textFaded p-2 mb-4 rounded"/>
                    <input type="text" placeholder="Password"
                           className="w-full bg-primaryColor border-2 border-textFaded p-2 mb-4 rounded"/>
                    <input type="text" placeholder="Confirm password"
                           className="w-full bg-primaryColor border-2 border-textFaded p-2 mb-4 rounded"/>
                    <button type="submit"
                            className="w-full bg-secondaryColor text-primaryColor p-2 rounded hover:bg-textFaded">
                        Sign Up
                    </button>
                    <p className="mt-4 font-semibold text-secondaryColor">Have an account?
                        <a href="#" className="text-secondaryColor ml-1 font-bold hover:text-textFaded ">
                            Login
                        </a>
                    </p>
                    <p className="mt-4 text-secondaryColor font-semibold">
                        Or
                    </p>
                    <div className="mt-4">
                        <button type="button"
                                className="w-full text-textColorPrimary font-semibold p-2 rounded hover:text-textFaded flex items-center justify-center">
                            <img src={googleLogoSrc} alt="Google" className="w-5 h-5 mr-2"/> Sign Up with
                            Google
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Body;
