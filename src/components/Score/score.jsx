import { RadialBar, RadialBarChart } from "recharts";
import PropTypes from "prop-types"


function Score({Data}) {

    const modelData = [
        { name: "score", value: 1 - Data, fill: "transparent" },
		{ name: "score", value: Data, fill: "red" },
    ]
    return (
        <section className="score">
            <h2 className="score__title">Score</h2>
            <RadialBarChart
                width={258}
                height={263}
                outerRadius={150}
                data={modelData}
                startAngle={90}
                endAngle={450}
                
                >
                <RadialBar
                background
                barSize={10}
                cornerRadius={10}
                dataKey="value"
                />
            </RadialBarChart>
            <div className="legend">
                <span className="legend__score">{Data*100}%
                    <p className="legend__text">de votre objectif</p>
                </span>
            </div>
        </section>
    )
}

// Score.propTypes = {
//     Data: PropTypes.number}

export default Score