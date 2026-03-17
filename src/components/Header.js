import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import { setGptModeOn } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const signOutFn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribes the even onAuthStateChanged when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(setGptModeOn());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row md:justify-between justify-center bg-black">
      <img className="w-44 m-auto md:m-0" src={LOGO_URL} />
      {user && (
        <div className="flex p-2">
          <button
            className="py-2 px-4 mx-4 my-2 h-10 text-white bg-blue-300 rounded-md"
            onClick={handleGptSearch}
          >
            GPT Search
          </button>
          <button
            className="py-2 px-4 mx-4 my-2 h-10 bg-red-700 text-white rounded-md"
            onClick={signOutFn}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
