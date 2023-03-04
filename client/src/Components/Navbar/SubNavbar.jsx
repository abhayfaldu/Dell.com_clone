import React from "react";
import { BsLaptop } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { RiAliensFill } from "react-icons/ri";
import { TfiHeadphone } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import desktop_pc_icon from "../../Utils/desktop_pc_icon.png";
import "./Subnavbar.modules.css";

const SubNavbar = () => {
	const navigate = useNavigate();
	return (
		<div className="container">
			<div>
				<div className="logos">
					<div>
						<BsLaptop />
					</div>
					<div>
						<div>Laptops</div>
						<div className="hidden" onClick={() => navigate("/products")}>
							For Home
						</div>
						<div className="hidden" onClick={() => navigate("/products")}>
							For Bussiness
						</div>
					</div>
				</div>
				<div className="logos">
					<div>
						<img
							className="desktop_icon"
							src={desktop_pc_icon}
							alt="desktop-icon"
						/>
					</div>
					<div>
						<div>Desktops</div>
						<div className="hidden" onClick={() => navigate("/products")}>
							For Home
						</div>
						<div className="hidden" onClick={() => navigate("/products")}>
							For Bussiness
						</div>
					</div>
				</div>
				<div className="logos">
					<div>
						<RiAliensFill />
					</div>
					<div>
						<div>Alienware</div>
						<div className="hidden" onClick={() => navigate("/products")}>
							Laptops
						</div>
						<div className="hidden" onClick={() => navigate("/products")}>
							Desktops
						</div>
					</div>
				</div>
				<div className="logos">
					<div>
						<BsLaptop />
					</div>
					<div>
						<div>Vostro</div>
						<div className="hidden" onClick={() => navigate("/products")}>
							For Home
						</div>
						<div className="hidden" onClick={() => navigate("/products")}>
							For Bussiness
						</div>
					</div>
				</div>
				<div className="logos">
					<div>
						<FiMonitor />
					</div>
					<div>
						<div>Monitor</div>
						<div className="hidden" onClick={() => navigate("/products")}>
							For Home
						</div>
						<div className="hidden" onClick={() => navigate("/products")}>
							For Bussiness
						</div>
					</div>
				</div>
				<div className="logos">
					<div>
						<TfiHeadphone />
					</div>
					<div>
						<div>Accessories</div>
						<div className="hidden" onClick={() => navigate("/keyboard&mouse")}>
							For Home
						</div>
						<div className="hidden" onClick={() => navigate("/keyboard&mouse")}>
							For Bussiness
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubNavbar;
