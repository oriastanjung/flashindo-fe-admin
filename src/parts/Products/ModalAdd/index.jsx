import React from "react";
import InputWithLabel from "../../../components/InputWithLabel";
import useModalAddHooks from "./useModalAddHooks";
import { Select, MenuItem } from "@mui/material";
import InputModalImage from "../../../components/InputModalImage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingFullScreen from "../../../components/LoadingFullScreen";

function ModalAdd(props) {
  const { handleOnChange, form, allCategory, handleAddData, isLoading } =
    useModalAddHooks();

  return (
    <div>
      <ToastContainer />
      {!isLoading ? (
        form && (
          <>
            
            <h4 className="text-center text-2xl font-bold mb-5">Add Product</h4>
            <form className="flex flex-col gap-4" onSubmit={handleAddData}>
              <div className="flex flex-col justify-center md:grid grid-cols-2 place-items-center w-full gap-4">
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.name}
                  name={"name"}
                  label={"Name"}
                  type={"text"}
                  required={true}
                  placeholder={"Input Product Name"}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.description}
                  isMultiline
                  name={"description"}
                  label={"Description"}
                  type={"text"}
                  required={true}
                  placeholder={"Input Product Desc"}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.purchase_price}
                  name={"purchase_price"}
                  label={"Purchase Price"}
                  type={"number"}
                  required={true}
                  placeholder={"Input Product Purchase Price"}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.sell_price}
                  name={"sell_price"}
                  label={"Sell Price"}
                  type={"number"}
                  required={true}
                  placeholder={"Input Product Sell Price"}
                />
                <InputWithLabel
                  onChange={handleOnChange}
                  value={form.stock}
                  name={"stock"}
                  label={"Stock"}
                  type={"number"}
                  required={true}
                  placeholder={"Input Product Stock"}
                />
                <div className="flex flex-col justify-start w-full md:w-auto px-8 gap-3">
                  <label>Category</label>
                  <Select
                    id="demo-simple-select"
                    name="category"
                    onChange={handleOnChange}
                    value={form.category}
                    required
                    placeholder="Input Product Category"
                  >
                    {allCategory &&
                      allCategory.map((item, i) => {
                        return (
                          <MenuItem
                            key={i}
                            className="capitalize"
                            value={item._id}
                          >
                            {item.category_name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </div>
              </div>
              <div className="flex flex-col border-t-2 mt-8 pt-8 gap-5 border-slate-300 w-full">
                <InputModalImage
                  onChange={handleOnChange}
                  name={"thumbnail"}
                  label={"Thumbnail Image"}
                  required={true}
                  imageUrl={form.thumbnailUrl}
                />
                <hr />
                <InputModalImage
                  onChange={handleOnChange}
                  name={"image1"}
                  label={"First Image Product"}
                  required={true}
                  imageUrl={form.image1Url}
                />
                <hr />
                <InputModalImage
                  onChange={handleOnChange}
                  name={"image2"}
                  label={"Second Image Product"}
                  required={true}
                  imageUrl={form.image2Url}
                />
                <hr />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-bluePrimary hover:bg-purple-900 translate duration-300 md:px-4 px-3 py-2 text-sm md:text-base rounded-2xl text-white font-bold"
                >
                  Add Product
                </button>
              </div>
            </form>
            <div className="mt-4 flex justify-center">
              <button
                onClick={props.onClose}
                className="border-[1px] hover:border-black translate duration-300 px-4 py-2 text-sm md:text-base rounded-2xl font-bold"
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

export default ModalAdd;
