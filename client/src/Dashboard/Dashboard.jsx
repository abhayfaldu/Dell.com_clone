import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductCount } from "../Redux/Admin/action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { productCount } = useSelector((store) => store.AdminReducer);

  useEffect(() => {
    dispatch(getProductCount);
  }, []);
  return (
    <Box>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Heading mt={"120px"}> Total Available Product </Heading>
        <Box style={{ marginTop: "30px" }}>
          <Chart
            mt={200}
            type="pie"
            width={1200}
            height={400}
            series={[productCount, 40, 100, 150]}
            options={{
              labels: ["Laptop", "Mouse", "Keyboard", "All-In-One PC"],
              dropShadow: {
                enabled: true,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5,
              },
            }}
            style={{
              color: "red", // Set text color here
            }}
          ></Chart>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
