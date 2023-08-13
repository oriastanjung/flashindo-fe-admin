import { InfinitySpin } from "react-loader-spinner";
import Searchbar from "../../../components/Searchbar";
import TableProducts from "../../../components/TableProducts";
import useMainHooks from "./useMainHooks";
import InputSelect from "../../../components/InputSelect";
import "sweetalert2/src/sweetalert2.scss";
import Modal from "../../../components/Modal";
import ModalUpdate from "../ModalUpdate";
import ModalAdd from "../ModalAdd";

function Main() {
  const {
    allProducts,
    isLoading,
    columns,
    setSearchInput,
    searchInput,
    selectedCategory,
    setSelectedCategory,
    allCategory,
    closeModal,
    isModalOpen,
    idProduct,
    openModalAdd,
    isModalAddOpen,
    closeModalAdd
  } = useMainHooks();
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalUpdate idProduct={idProduct} onClose={closeModal} />
      </Modal>
      <Modal isOpen={isModalAddOpen} onClose={closeModalAdd}>
        <ModalAdd idProduct={idProduct} onClose={closeModalAdd} />
      </Modal>
      <div className="mt-16">
        <div className="flex justify-between w-full">
          <div className="flex justify-center md:justify-start w-full">
            <Searchbar
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              label={"Search"}
              placeholder={"Search by name or description"}
            />
          </div>

          <div className="flex justify-center md:justify-end w-full">
            {allCategory && (
              <InputSelect
                label={"Filter By Category"}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                options={allCategory}
              />
            )}
          </div>
        </div>
        <div className="w-full flex justify-end mt-5 ">
          <button onClick={openModalAdd} className="md:px-4 px-3 py-2 md:py-2 rounded-2xl bg-success text-white text-sm md:text-base font-bold">
            Add Product
          </button>
        </div>
        <div className="mt-10 h-1/2 overflow-hidden">
          {isLoading && (
            <div className="flex justify-center items-center flex-col text-center">
              <InfinitySpin width="200" color="#51469F" />
              <p>Loading ...</p>
            </div>
          )}
          {!isLoading && allProducts && (
            <TableProducts columns={columns} rows={allProducts} />
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
