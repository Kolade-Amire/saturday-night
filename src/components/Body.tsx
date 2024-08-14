
const Body = () => {
    return (
        <main className="container mx-auto flex-grow text-center p-4">

            <h1 className="text-1xl md:text-2xl font-mono font-semibold text-textColorPrimary  my-6">
                Hi, welcome to Saturday Night.
                Here, you will find the most mind-rumbling, emotion-inducing, unfiltered raw stories about literally anything.
                And what more? We love music and we have a community of music enthusiasts that share playlists you can listen to while reading.
                Join us to dive in! Who knows, you might also have something to share!
            </h1>
            <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4">Login / Sign Up</h2>
                <form>
                    <input type="text" placeholder="Username" className="w-full p-2 mb-4 border rounded"/>
                    <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded"/>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Body;
