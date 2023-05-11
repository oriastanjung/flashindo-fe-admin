import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align={"center"} className="text-bold">
              No
            </TableCell>
            <TableCell align={"center"} className="text-bold">
              Item Details
            </TableCell>
            <TableCell align="center" className="text-bold">
              Total Price
            </TableCell>
            <TableCell align="center" className="text-bold">
              Username
            </TableCell>
            <TableCell align="center" className="text-bold">
              Email
            </TableCell>
            <TableCell align="center" className="text-bold">
              Phone
            </TableCell>
            <TableCell align="center" className="text-bold">
              Status Payment
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((item, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 w-100">
                    <img
                      src={`http://localhost:3287/uploads/${item.id_item.thumbnail}`}
                      alt=""
                      className="w-[60px] h-[60px] rounded-xl "
                      style={{
                        boxShadow: "-3px 4px 15px 2px rgba(81, 70, 159, 0.2)",
                        border: "1px solid #D9D9D9",
                      }}
                    />
                    <p>{item.id_item.name}</p>
                  </div>
                  {/* {item.id_item.name} */}
                </TableCell>

                <TableCell align="center">
                  <p className="truncate text-ellipsis" style={{maxWidth : "6rem"}}>Rp{item.total_price}00000</p>
                </TableCell>
                <TableCell className="truncate text-ellipsis" align="center">
                  {/* {item.id_user.username} */}
                  <p className="truncate text-ellipsis" style={{maxWidth : "5rem"}}>
                  ellipsisellipsisellipsisellipsisellipsisellipsis dakfjskafjkdsajfkjl
                  </p>
                </TableCell>
                <TableCell align="center">{item.id_user.email}</TableCell>
                <TableCell align="center">
                  {item.id_user.no_telpon}
                </TableCell>
                <TableCell align="center">
                  <p
                    className={`capitalize ${
                      item.statusPayment === "success"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {item.statusPayment}
                  </p>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableTransactionDashboard;
