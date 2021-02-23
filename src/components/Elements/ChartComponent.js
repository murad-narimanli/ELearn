import * as React from 'react';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import {
    curveCatmullRom,
    line,
} from 'd3-shape';
import { scalePoint } from 'd3-scale';
import {progress as data} from "./data-vizualization";

const Line = props => (
    <LineSeries.Path
        {...props}
        path={line()
            .x(({ arg }) => arg)
            .y(({ val }) => val)
            .curve(curveCatmullRom)}
    />
);


const demoStyles = () => ({
    chart: {
        paddingRight: '30px',
        marginBottom:'20px',
        padding:'40px',
        height:'100px',
        borderRadius:'24px',
        background:'#DDEDFF'
    },
});

class ChartComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;
        const { classes } = this.props;

        return (
            <Chart
                data={chartData}
                className={classes.chart}
            >
                <ArgumentScale factory={scalePoint} />
                <ArgumentAxis />
                <ValueAxis />

                    <LineSeries
                        name="degree"
                        valueField="degree"
                        argumentField="month"
                        seriesComponent={Line}
                    />
                    <LineSeries
                        name="exp"
                        valueField="exp"
                        argumentField="month"
                        seriesComponent={Line}
                    />
                <Animation />
            </Chart>
        );
    }
}

export default withStyles(demoStyles, { name: 'Demo' })(ChartComponent);

