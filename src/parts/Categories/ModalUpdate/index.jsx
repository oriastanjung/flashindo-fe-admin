import React from "react";
import InputWithLabel from "../../../components/InputWithLabel";
import useModalUpdateHooks from "./useModalUpdateHooks";
import { Select, MenuItem } from "@mui/material";
import InputModalImage from "../../../components/InputModalImage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingFullScreen from "../../../components/LoadingFullScreen";

function ModalUpdate(props) {
  const { handleOnChange, form, allCategory, handleUpdateData, isLoading } =
    useModalUpdateHooks({
      id: props.idCategory,
    });

  return (
    <div>
      <ToastContainer />
      {!isLoading ? (
        form && (
          <>
            
            <h4 className="text-center text-2xl font-bold mb-5">Update Data</h4>
            <form className="flex flex-col gap-4" onSubmit={handleUpdateData}>
              <div className="w-full flex flex-col justify-center gap-4">
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.category_name}
                  name={"category_name"}
                  label={"Category Name"}
                  type={"text"}
                  placeholder={"Input Category Name"}
                />
                
              </div>
              
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="bg-bluePrimary hover:bg-purple-900 translate duration-300 md:px-4 px-3 py-2 text-sm md:text-base rounded-2xl text-white font-bold"
                >
                  Update Data
                </button>
              </div>
            </form>
            <div className="mt-4 flex justify-center">
              <button
                onClick={props.onClose}
                className="border-[1px] text-sm md:text-base hover:border-black translate duration-300 px-4 py-2 rounded-2xl font-bold"
              >
                Cancel
              </button>
            </div>
          </>
        )
      ) : (
        <LoadingFullScreen isLoading={isLoading} />
      )}
    </div>
  );
}

export default ModalUpdate;
