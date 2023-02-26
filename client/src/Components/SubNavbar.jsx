import React from "react";
import { BsLaptopFill } from "react-icons/bs";
import { GrDesktop } from "react-icons/gr";
import { RiAliensFill } from "react-icons/ri";
import { FaHeadphonesAlt } from "react-icons/fa";
import "./Subnavbar.modules.css";
import { useNavigate } from "react-router-dom";


const SubNavbar = () => {
	const navigate = useNavigate();
	return (
		<div className="container">
		<div>
			<div className="logos">
				<div>
					<BsLaptopFill />
				</div>
				<div>Laptops</div>
				<div className="hidden" onClick={()=>navigate("/products")}>For Home</div>
				<div className="hidden" onClick={()=>navigate("/products")}>For Bussiness</div>
			</div>
			<div className="logos">
				<div>
					<GrDesktop />
				</div>
				<div>Desktops</div>
				<div className="hidden" onClick={()=>navigate("/products")}>For Home</div>
				<div className="hidden" onClick={()=>navigate("/products")}>For Bussiness</div>
			</div>
			<div className="logos">
				<div>
					<RiAliensFill />
				</div>
				<div>Alienware</div>
				<div className="hidden" onClick={()=>navigate("/products")}>Laptops</div>
				<div className="hidden" onClick={()=>navigate("/products")}>Desktops</div>
			</div>
			<div className="logos">
				<div>
					<BsLaptopFill />
				</div>
				<div>Vostro</div>
				<div className="hidden" onClick={()=>navigate("/products")}>For Home</div>
				<div className="hidden" onClick={()=>navigate("/products")}>For Bussiness</div>
			</div>
			<div className="logos">
				<div>
					<GrDesktop />
				</div>
				<div>Monitor</div>
				<div className="hidden" onClick={()=>navigate("/products")}>For Home</div>
				<div className="hidden" onClick={()=>navigate("/products")}>For Bussiness</div>
			</div>
			<div className="logos">
				<div>
					<FaHeadphonesAlt />
				</div>
				<div>Accessories</div>
				<div className="hidden" onClick={()=>navigate("/keyboard&mouse")} >For Home</div>
				<div className="hidden" onClick={()=>navigate("/keyboard&mouse")} >For Bussiness</div>
			</div>
			</div>
		</div>
	);
};

export default SubNavbar;
