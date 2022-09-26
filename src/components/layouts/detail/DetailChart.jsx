import React from 'react';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { Link } from 'react-router-dom';
import Chart from "react-apexcharts";

function DetailChart(){

    const chartdata = {
        options: {
            chart: {
              id: "basic-bar",
              toolbar: {
                show: false
                },
            },

            xaxis: {
              categories: ["2/14", "3/16", "4/19", "5/10", "6/4", "7/26", "8/17", "9/9", "10/31"],
            },
            stroke: {
                curve: 'smooth'
            },

          },
          series: [
            {
              name: "series-1",
              data: [3, 4, 4.5, 5, 4.9, 6, 7, 9.1]
            }
          ]
    }

    return(<>
    <div className='w-100'>
        <div className='chart-header flex'>
            <QueryStatsIcon className="detail-meta-icon" style={{fontSize:'20px'}}></QueryStatsIcon>
            <h5>Pricing History</h5>
        </div>
        <div className='chart-panel'>
            <div className='chart-filter'>
                <div className="seclect-box style3 voomio-pl-1 chart-select-box">
                    <div id="artworks" className="dropdown mg-r-8">
                        <Link to="#" className="btn-selector nolink voomio-select">Past 24 hours</Link>
                        <ul className='voomio-zindex'>
                            <li><span>Past 24 hours</span></li>
                            <li><span>Past 24 hours</span></li>
                            <li><span>Past 24 hours</span></li>
                        </ul>
                    </div>
                    <div>
                        <h6>All time avg. price</h6>
                    </div>
                </div>
            </div>
            <Chart
                className="chart-main"
                options={chartdata.options}
                series={chartdata.series}
                height="200"
                type="line"
            />
        </div>
    </div>
    </>)
}

export default DetailChart