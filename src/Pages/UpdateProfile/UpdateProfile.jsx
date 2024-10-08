import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { Helmet } from "react-helmet-async";

import { ScrollRestoration } from "react-router-dom";

import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user, handleUpdateProfile } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setName(user?.displayName);
    setPhoto(user?.photoURL);
  }, [user?.displayName, user?.photoURL]);
  useEffect(() => {
    setLoader(true);
    setTimeout(setLoader, 500, false);
  }, []);

  const onChangeName = (e) => {
    e.preventDefault();
    const newName = e.target.value;
    console.log(newName);
    setName(newName);
  };

  const onChangePhoto = (e) => {
    e.preventDefault();
    const newPhoto = e.target.value;
    console.log(newPhoto);
    setPhoto(newPhoto);
  };

  const handleUpdate = () => {
    setLoader(true);
    handleUpdateProfile(name, photo);
    setTimeout(setLoader, 800, false);
    Swal.fire({
      icon: "success",
      title: "Profile Updated",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  if (loader) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  } else {
    return (
      <div className="container text-black mx-auto my-10 flex flex-col lg:flex-row gap-10 justify-between p-5 bg-slate-200 border-2 border-gray-400 rounded-3xl h-auto">
        <Helmet>
          <title>Heaven Point | Update Profile</title>
        </Helmet>
        <div className="w-full lg:w-[50%]">
          <div className=" animate__animated animate__fadeInDown">
            <h1 className="text-4xl underline font-bold text-center">
              Your Current Profile:
            </h1>
          </div>
          <div className="animate__animated animate__zoomIn">
            <div className="w-32 h-32  rounded-full bg-no-repeat bg-contain bg-[url(https://i.ibb.co/zmbRY07/images.png)] mx-auto my-5">
              {user && (
                <img
                  className="w-full h-full rounded-full"
                  src={user?.photoURL || "https://i.ibb.co/zmbRY07/images.png"}
                  alt=""
                />
              )}
            </div>
            <div className="space-y-3">
              <h2 className="text-xl">
                {" "}
                <span className="font-bold">User Name:</span>
                {user?.displayName || ""}
              </h2>
              <h2 className="text-xl">
                <span className="font-bold text-nowrap">User Email:</span>{" "}
                {user?.email || "Not Found"}
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%]   ">
          <div>
            <h1 className="text-4xl font-bold underline mb-5 text-center animate__animated animate__fadeInDown">
              Update Your Profile
            </h1>

            <div className="w-3/4 mx-auto animate__animated animate__zoomIn">
              <div>
                <h2> Your Name:</h2>
                <input
                  type="text"
                  className="input w-full bg-gray-300 mb-3 "
                  onChange={(e) => onChangeName(e)}
                  value={name}
                />
              </div>
              <div>
                <h2> Your Photo URL:</h2>
                <input
                  type="text"
                  className="input bg-gray-300 w-full mb-3 "
                  value={photo}
                  onChange={(e) => onChangePhoto(e)}
                />
              </div>
              <div>
                <h2> Your Email:</h2>
                <input
                  disabled
                  type="email"
                  className="input bg-gray-300 w-full mb-3 "
                  value={user?.email || "Not Found"}
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleUpdate}
                  className="btn bg-blue-700 hover:bg-blue-gray-900 text-white "
                >
                  Update Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <ScrollRestoration />
      </div>
    );
  }
};

export default UpdateProfile;
