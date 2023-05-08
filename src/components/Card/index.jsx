/* eslint-disable react/prop-types */


function Card(props) {
  return (
    <div className="bg-white w-[50%] lg:w-[30%] md:w-[40%] px-5 py-5 rounded-3xl" style={{border : "1px solid #D9D9D9", boxShadow: "10px 15px 40px 1px rgba(81, 70, 159, 0.2)"}}>
        <div className="flex justify-between items-center">
            <h4 className="text-xl font-medium">{props.title}</h4>
            <div className="w-[24px]">
                {props.icon}
            </div>
        </div>
        <div>
            <p className="font-bold text-2xl mt-4">{props.value}</p>
            <p className="font-normal text-sm mt-4 text-bluePrimary">View More <span className="font-bold"> {">"} </span></p>
        </div>
    </div>
  )
}

export default Card