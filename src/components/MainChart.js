import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';

class MainChart extends Component {
  state = {
    data: [
      {
        id: 'Temp',
        color: 'hsl(7, 70%, 50%)',
        data: [
          {
            color: 'hsl(246, 70%, 50%)',
            x: '6/1',
            y: 71
          },
          {
            color: 'hsl(243, 70%, 50%)',
            x: '6/2',
            y: 73
          },
          {
            color: 'hsl(16, 70%, 50%)',
            x: '6/3',
            y: 79
          },
          {
            color: 'hsl(50, 70%, 50%)',
            x: '6/4',
            y: 68
          },
          {
            color: 'hsl(187, 70%, 50%)',
            x: '6/5',
            y: 60
          },
          {
            color: 'hsl(194, 70%, 50%)',
            x: '6/6',
            y: 70
          },
          {
            color: 'hsl(343, 70%, 50%)',
            x: '6/7',
            y: 70
          },
          {
            color: 'hsl(160, 70%, 50%)',
            x: '6/8',
            y: 72
          },
          {
            color: 'hsl(310, 70%, 50%)',
            x: '6/9',
            y: 75
          }
        ]
      },
      {
        id: 'Humidity',
        color: 'hsl(138, 70%, 50%)',
        data: [
          {
            color: 'hsl(216, 70%, 50%)',
            x: '6/1',
            y: 35
          },
          {
            color: 'hsl(165, 70%, 50%)',
            x: '6/2',
            y: 3
          },
          {
            color: 'hsl(169, 70%, 50%)',
            x: '6/3',
            y: 6
          },
          {
            color: 'hsl(201, 70%, 50%)',
            x: '6/4',
            y: 19
          },
          {
            color: 'hsl(141, 70%, 50%)',
            x: '6/5',
            y: 44
          },
          {
            color: 'hsl(133, 70%, 50%)',
            x: '6/6',
            y: 30
          },
          {
            color: 'hsl(335, 70%, 50%)',
            x: '6/7',
            y: 24
          },
          {
            color: 'hsl(51, 70%, 50%)',
            x: '6/8',
            y: 12
          },
          {
            color: 'hsl(78, 70%, 50%)',
            x: '6/9',
            y: 10
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ResponsiveLine
        data={this.state.data}
        margin={{
          top: 50,
          right: 110,
          bottom: 50,
          left: 60
        }}
        minY="auto"
        stacked={true}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Month',
          legendOffset: 36,
          legendPosition: 'center'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Reading',
          legendOffset: -40,
          legendPosition: 'center'
        }}
        colors="d310"
        dotSize={10}
        dotColor="inherit:darker(0.3)"
        dotBorderWidth={2}
        dotBorderColor="#ffffff"
        enableDotLabel={true}
        dotLabel="y"
        dotLabelYOffset={-12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            symbolSize: 12,
            symbolShape: 'circle'
          }
        ]}
      />
    );
  }
}

export default MainChart;
