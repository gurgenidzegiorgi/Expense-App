import "./Chart.css";

import ChartBar from "./ChartBar";

export default function Chart(props) {
	const chartValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const maxChartValue = Math.max(...chartValues);
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => {
				return (
					<ChartBar
						key={dataPoint.label}
						value={dataPoint.value}
						maxValue={maxChartValue}
						label={dataPoint.label}
					/>
				);
			})}
		</div>
	);
}
