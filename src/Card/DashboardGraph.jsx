import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class  DashboardGraph extends Component {
     constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Total Number',
                        color: '#0B4177',
                        data: [
                            121,
                            80,
                            70,
                            120,
                            100,
                            75,
                            95,
                            95,
                            75,
                            80,
                            85,
                            50
                        ]
                    },
                    {
                        label: 'Increase Per Month',
                        color: '#9E5DB8',
                        data: [
                            50,
                            108,
                            100,
                            50,
                            100,
                            162,
                            95,
                            95,
                            160,
                            130,
                            110,
                            180
                        ]
                    }
                ]
            }
        }
    }
    static defaultProps = {
        displayTitle: true,
        // displayLegend: true,
        // legendPosition: 'right',
        positionTitle: 'left',
    }

    render() { 
        return (
            <div className='DashboardGraph'>
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            color: '#1D1D1D99',
                            display: this.props.displayTitle,
                            text: 'Total Number',
                            fontSize: 16,
                            position: this.props.positionTitle
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }                                        
                    }}
                />
            </div>
        );
    }
}


export default DashboardGraph;