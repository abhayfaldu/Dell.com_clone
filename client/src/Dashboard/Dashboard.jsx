import { Box, Heading } from "@chakra-ui/react";
import React from "react";

import Sidebar from "./Sidebar";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductData } from "../Redux/Admin/action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store.AdminReducer);

  useEffect(() => {
    dispatch(getProductData);
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
            series={[product.length, 1000, 1800, 600]}
            options={{
              labels: ["temp-data", "Tech-PC", "HeadPhone", "All-In-One"],
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
