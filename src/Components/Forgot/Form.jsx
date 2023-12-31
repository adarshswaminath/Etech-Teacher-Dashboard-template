import React, { useState } from "react";
import { motion } from "framer-motion";
import swal from "sweetalert";




function Form() {
  const Template = ({ purpose,placeholder ,condition}) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 2, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.9 }}
      >
        <div>
          <form className="grid gap-4 mt-3">
            <input
              type="text"
              placeholder={`${placeholder}`}
              className="border rounded-lg border-gray-400 p-2 focus:outline-none"
              name=""
              id=""
              required
            />
          </form>
          {condition ? (
            <button
            onClick={changeStat}
              className="bg-violet-500 mt-3 text-white w-full p-3 rounded-lg hover:bg-violet-400 font-semibold focus:outline-none"
            >
              {purpose}
            </button>
          ) : (
            <button
            onClick={Alert}
              className="bg-violet-500 mt-3 text-white w-full p-3 rounded-lg hover:bg-violet-400 font-semibold focus:outline-none"
            >
              {purpose}
            </button>
          )}
        </div>
      </motion.div>
    );
  };

  const [username, setUsername] = useState(true);

  const changeStat = () => {
    setUsername(!username);
  };

  const Alert = () => {
    swal("Success", "Password Successfully Changed!", "success")
    setTimeout(() => {
      window.location = '/'
    },3000)
  }

  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-violet-500 text-2xl">Forgot Password</h3>
      <p className="text-gray-400">
        Voluptate enim nulla laborum mollit culpa velit sunt consequat. Exercitation duis sunt excepteur officia veniam ex ea fugiat esse cillum.
      </p>

      {username ? (
        <Template purpose="Submit Username" placeholder="Username" condition={true} />
      ) : (
        <Template purpose="Submit Password" placeholder="Password" condition={false}/>
      )}
    </div>
  );
}

export default Form;
