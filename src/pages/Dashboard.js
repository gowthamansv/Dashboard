import React from 'react';
import { Box , Typography } from '@mui/material';
import PieChart from '../chart/PieChart';
import '../css/DisplayStyles.css';
import LineChart from '../chart/LineChart';
import { tokens } from "../theme.js";
import { useTheme } from "@mui/material";
import {mockTransactions} from '../Data/Mockdata.js';
import BarChart from '../chart/BarChart.js';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return (
      <Box>
        <Box className='box' >
        <Box
        className='box-chart'
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            flexDirection="column"
            alignItems="left"
          >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                45,229
              </Typography>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
          <Box
          className='box-transaction'
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            borderBottom={`4px solid ${theme.palette.box.main}`}
            colors={colors.grey[100]}
            p="15px"
            backgroundColor={colors.primary[400]}
            className='trans-t'
            position={'sticky'}
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              textAlign={"left"}
              borderBottom={`4px solid ${theme.palette.box.main}`}
              p="15px"
            >
              <Box
              width={'45%'} className='tranc-b1'>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]} width={'45%'} className='tranc-b1'>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                width={'20%'}
                className='tranc-b'
              >
               ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className='row-2'>
      <Box backgroundColor={colors.primary[400]} p="10px" mt={2} className="row-21">
      <Typography variant="h4" fontWeight="600" padding={0}>
        Overall Profit
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent='space-evenly' height='40vh' >
        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "20px" }}>
        53,857 revenue generated
        </Typography>
        <Typography variant="h5" >Invested amount: 7,29,100</Typography>
        <Typography variant="h5" >Reinvested amount: 7,82,957</Typography>
        <Typography variant="h5" >Returns: 6.8%</Typography>
        <Typography variant="h5" >Company expenses:17,700 </Typography>
      </Box>
    </Box>
    <Box className='row-22' p="10px" mt={2} backgroundColor={colors.primary[400]}>
    <Typography variant='h4'>
          Bar Chart
        </Typography>
      <BarChart isDashboard={true}/>
      </Box>
      <Box className='row-22' p="10px" mt={2} backgroundColor={colors.primary[400]}>
        <Typography variant='h4'>
          Pie Chart
        </Typography>
        <PieChart isDashboard={false}/>
      </Box>
      </Box>
      </Box>
    );
};

export default Dashboard;