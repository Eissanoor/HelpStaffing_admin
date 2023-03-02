import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import "./NewHospitals.css"
import { Divider } from "antd";
// import Pdf from "react-to-pdf";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const mocked_data = {
    labels: ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"],
    spend_per_channel: {
        sales: [
            {
                label: "Montgomery",
                data: [156, 123, 155, 56, 157, 190, 230],
            },
            {
                label: "Juneau",
                data: [122, 117, 132, 147, 162, 180, 230],
            },
            {
                label: "Phoenix",
                data: [416, 173, 125, 176, 127, 185, 230],
            },
            {
                label: "Denver",
                data: [126, 135, 180, 100, 86, 179, 230],
            },
            {
                label: "Atlanta",
                data: [136, 113, 135, 146, 167, 150, 230],
            },
            {
                label: "Chicago ",
                data: [136, 113, 135, 146, 167, 150, 230],
            },
        ],
    },
};

function NewHospitalsChart() {
    const barRef = useRef();
    const CHART_COLORS = [
        " #222983",
        "#D7A4FF",
        "#3351F6",
        "#FF7500",
        "#0ACF97",
        "#8855B0",
    ];
    const salesdata = mocked_data.spend_per_channel.sales.map((sale, index) => {
        return {
            label: sale.label,
            backgroundColor: CHART_COLORS[index],
            data: sale.data,
            stack: 2,
            barThickness: 10,
        };
    });
    const newdataset = [salesdata];
    const spnedperchanneldata = newdataset.flat();
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: spnedperchanneldata,
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: "right",
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                },
            },
            title: {
                display: false,
                text: "Chart.js Line Chart",
            },
        },
        // Modify the axis by adding scales
        scales: {
            // to remove the labels
            x: {
                // ticks: {
                //   display: false,
                // },
                // to remove the x-axis grid
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            // to remove the y-axis labels
            y: {
                ticks: {
                    display: false,
                    beginAtZero: true,
                },
                // to remove the y-axis grid
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
        },
    };
    return (
        <>
            <div >
                <div>
                    <h1 className="NewHospitalsheading fontfamilyLato fontstyle text-black mt-2 ms-1">
                        New&nbsp;Hospitals
                    </h1>
                    <p className="HostpitalsJoining fontfamilyLato fontstyle   ms-1">
                        Joining&nbsp;over&nbsp;time
                    </p>
                </div>

                <div className="d-flex w-100">
                    <div className=" w-100">
                        <Bar data={data} options={options} ref={barRef} height={300} />
                    </div>
                    <div className="w-auto ">
                        <div className="d-flex gap-3 ">
                            <span className=" textdashcardhead ciclesgroph mt-1 bgdashgraphcol2 rounded-circle "></span>
                            <p className=" textdashcardhead fontfamilyLato fontstyle">
                                Montgomery
                            </p>
                            <span className="numberdashcardhead fontfamilyLato fontstyle">25.12%</span>
                        </div>
                        <Divider />
                        {/* <hr></hr> */}
                        <div className="d-flex gap-3 ">
                            <span className=" textdashcardhead ciclesgroph mt-1 bgdashgraphcol2 rounded-circle "></span>
                            <p className=" textdashcardhead fontfamilyLato fontstyle">
                                Juneau
                            </p>
                            <span className="numberdashcardhead fontfamilyLato fontstyle">19.85%</span>
                        </div>
                        <Divider />
                        {/* <hr></hr> */}
                        <div className="d-flex gap-3 ">
                            <span className=" textdashcardhead ciclesgroph mt-1 bgdashgraphcol3 rounded-circle "></span>
                            <p className=" textdashcardhead fontfamilyLato fontstyle">
                                Phoenix
                            </p>
                            <span className="numberdashcardhead fontfamilyLato fontstyle">26.21</span>
                        </div>
                        <Divider />
                        {/* <hr></hr> */}
                        <div className="d-flex gap-3 ">
                            <span className=" textdashcardhead ciclesgroph mt-1 bgdashgraphcol4 rounded-circle "></span>
                            <p className=" textdashcardhead fontfamilyLato fontstyle">
                                Denver
                            </p>
                            <span className="numberdashcardhead fontfamilyLato fontstyle">10.97%</span>
                        </div>
                        <Divider />
                        {/* <hr></hr> */}
                        <div className="d-flex gap-3 ">
                            <span className=" textdashcardhead ciclesgroph mt-1 bgdashgraphcol5 rounded-circle "></span>
                            <p className=" textdashcardhead fontfamilyLato fontstyle">
                                Atlanta
                            </p>
                            <span className="numberdashcardhead fontfamilyLato fontstyle">9.85%</span>
                        </div>
                        <Divider />
                        {/* <hr></hr> */}
                        <div className="d-flex gap-3 ">
                            <span className=" textdashcardhead ciclesgroph mt-1 bgdashgraphcol6 rounded-circle "></span>
                            <p className=" textdashcardhead fontfamilyLato fontstyle">
                                Chicago
                            </p>
                            <span className="numberdashcardhead fontfamilyLato fontstyle">7.85%</span>
                        </div>
                        {/* <Divider /> */}
                        {/* <hr></hr> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default NewHospitalsChart;