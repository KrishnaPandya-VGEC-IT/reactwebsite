import React, { PureComponent } from 'react';

import 
{
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import linechartData from '../assets/data_polarity_monthly.json';

const data = linechartData;

export default class RechartLine extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      null
    );
  }
}
