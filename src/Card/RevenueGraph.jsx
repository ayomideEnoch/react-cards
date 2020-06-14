import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class  RevenueGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Total Number',
                        data: [
                            90000,
                            200000,
                            180000,
                            90000,
                            170000,
                            270000,
                            160000,
                            200000,
                            270000,
                            250000,
                            210000,
                            360000
                        ]
                    }
                ]
            }
        }
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }

    render() { 
        return (
            <div className='RevenueGraph'>
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Revenue',
                            fontSize: 10
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

export default RevenueGraph;