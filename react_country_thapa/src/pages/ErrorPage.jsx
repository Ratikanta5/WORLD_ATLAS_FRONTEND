import { useRouteError,NavLink } from "react-router-dom";

export default function ErrorPage(){
    const error =  useRouteError(); //hooks provie by the react-router-dom for It lets your error page read what went wrong so you can show the message to the user through the errorpage.
    // console.log(error); //here we can see the error message by log , extract that to show in error page.

    return(
        <div>
            <h1>Oops! An error occurred.</h1>
            { error && <p>{error.data}</p> }

            <NavLink to="/">
                <button>Go Home</button>
            </NavLink>
        </div>
    )
}