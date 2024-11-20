

export default function Footer (props){
    return (
        <footer className={`${props.darkMode ? "dark" : ""} footer-container h-20 text-primaryColor bg-secondaryColor p-4`}>
            <div className="container  mx-auto text-center">
                <p className="pb-2">Contact us: dev@saturdaynight.com</p>

                <p className="pb-2">All rights reserved © 2024. Saturday Night</p>
            </div>
        </footer>
    )
}
