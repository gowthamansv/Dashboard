    // import * as React from 'react';
    // import { ChartContainer } from '@mui/x-charts/ChartContainer';
    // import {
    //   LinePlot,
    //   MarkPlot,
    //   lineElementClasses,
    //   markElementClasses,
    // } from '@mui/x-charts/LineChart';
    // import { tokens } from '../theme';
    // import { mockLineData } from '../Data/Mockdata';

    // // const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    // // const xLabels = [
    // //   'Page A',
    // //   'Page B',
    // //   'Page C',
    // //   'Page D',
    // //   'Page E',
    // //   'Page F',
    // //   'Page G',
    // // ];

    // export default function LineChart() {
    //     const lineData = mockLineData[0].data.map(point => point.y);
    //     const xLabels = mockLineData[0].data.map(point => point.x);
    //     const lineColor = mockLineData[0].color;
    
    //     return (
    //       <ChartContainer
    //         width={500}
    //         height={300}
    //         series={[{ type: 'line', data: lineData }]}
    //         xAxis={[{ scaleType: 'point', data: xLabels }]}
    //         sx={{
    //           [`& .${lineElementClasses.root}`]: {
    //             stroke: lineColor,
    //             strokeWidth: 2,
    //           },
    //           [`& .${markElementClasses.root}`]: {
    //             stroke: lineColor,
    //             scale: '0.6',
    //             fill: '#fff',
    //             strokeWidth: 2,
    //           },
    //         }}
    //         disableAxisListener
    //       >
    //         <LinePlot />
    //         <MarkPlot />
    //       </ChartContainer>
    //     );
    //   }