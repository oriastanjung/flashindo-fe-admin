function TableTransactionDashboard() {
  const data = [
    {
      _id: "6450fd3c8e2c92c71e3ed284",
      id_user: {
        _id: "6444fd46ab11399071711365",
        username: "orias1",
        email: "origaming27@gmail.com",
        no_telpon: "082269727779",
      },
      id_item: {
        _id: "644e636284942bd2bf30019a",
        name: "Mouse Razer 123",
        purchase_price: 80000,
        sell_price: 160000,
        keypoint: ['["1600 DPI","Wireless 5G"]'],
        thumbnail: "2023-04-30T12:52:30.137Z-ep 4.png",
        image1: "2023-04-30T12:47:29.726Z-bpjs bayar ke 1.jpeg",
        image2:
          "2023-04-30T12:47:29.730Z-CSS3_and_HTML5_logos_and_wordmarks.svg.png",
        category: "644a0dc1be968e06462b3e08",
        stock: 110,
        createdAt: "2023-04-30T12:47:30.115Z",
        updatedAt: "2023-05-02T12:09:43.683Z",
        __v: 1,
        description: "",
      },
      total_price: 1680000,
      total_pcs: 10,
      delivery_receipt: "orias nihh",
      tokenPayment: "1e647683-f8ea-4b63-b3e1-79147aa9dd68",
      statusPayment: "success",
      isFinished: true,
      createdAt: "2023-05-02T12:08:28.305Z",
      updatedAt: "2023-05-02T12:09:43.956Z",
      __v: 0,
    },
    {
      _id: "64529291c0f7ff614a5f3f13",
      id_user: {
        _id: "6444fd46ab11399071711365",
        username: "orias1",
        email: "origaming27@gmail.com",
        no_telpon: "082269727779",
      },
      id_item: {
        _id: "644e60e19b93a53791b32356",
        name: "M123ouse Razer RX724",
        description: "",
        purchase_price: 80000,
        sell_price: 160000,
        keypoint: ["1600 DPI", "Wireless 5G"],
        thumbnail: "2023-04-30T12:36:48.749Z-3461540443.jpeg",
        image1: "",
        image2: "",
        category: "6449fe83f033939fcfb4cb0b",
        stock: 100,
        createdAt: "2023-04-30T12:36:49.202Z",
        updatedAt: "2023-04-30T12:36:49.202Z",
        __v: 0,
      },
      total_price: 1680000,
      total_pcs: 10,
      address: "jl tpi",
      tokenPayment: "6e5619f1-728e-410d-aeef-4d427d180a4d",
      delivery_receipt: "jt0124151251",
      statusPayment: "pending",
      isFinished: false,
      createdAt: "2023-05-03T16:57:53.433Z",
      updatedAt: "2023-05-03T16:59:35.203Z",
      __v: 0,
    },
  ];
  return (
    <div>
      <table className="table-auto w-[100%]">
        <thead>
          <tr className="" >
            <th className="text-md font-normal">No</th>
            <th className="text-md  font-normal">Item Details</th>
            <th className="text-md font-normal">Total Price</th>
            <th className="text-md font-normal">Username</th>
            <th className="text-md font-normal">Email</th>
            <th className="text-md font-normal">No Phone</th>
            <th className="text-md font-normal">Status Payment</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, i) => {
              return (
                <tr key={i} className="text-left">
                  <td className="text-md text-center font-normal">{i + 1}</td>
                  <td className="text-md text-center font-normal">{item.id_item.name}</td>
                  <td className="text-md text-center font-normal">{item.total_price}</td>
                  <td className="text-md text-center font-normal">{item.id_user.username}</td>
                  <td className="text-md text-center font-normal">{item.id_user.email}</td>
                  <td className="text-md text-center font-normal">{item.id_user.no_telpon}</td>
                  <td className="text-md text-center font-normal">{item.statusPayment}</td>
                </tr>
              );
            })}
          <tr className="flex justify-between">
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableTransactionDashboard;
