import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const chainfilterdata = [
    "Etherium",
    "Solana",
    "Polygon",
    "Cadano",
    "All Chains"
]

const timefilterdata = [
    "Past 24 hours",
    "Past 7 days",
    "Past 30 days",
]

const categoryfilterdata = [
    "Art",
    "Collectibles",
    "Domain Names",
    "Music",
    "Photography",
    "Sports",
    "All Categories"
]

const pricefilterdata = [
    "Price low to high",
    "Price high to low"
]

export const CategoryFilter = () => {
    const [state, setState] = useState("All Categories")
    return (
        <div className="seclect-box style3 voomio-pl-1 voomio-mta">
          <div id="artworks" className="dropdown">
              <Link to="#" className="btn-selector nolink voomio-select">{state}</Link>
              <ul className='voomio-zindex'>
                  {categoryfilterdata.map((item, index) =>(<li key={item} onClick={()=>setState(item)}><span className={(state==item)?"activefilter":""}>{item}</span></li>))}
              </ul>
          </div>
      </div>
    )
}

export const ChainFilter = () => {
    const [state, setState] = useState("All Chains")
    return (
        <div className="seclect-box style3 voomio-mta voomio-pl-1">
          <div id="artworks" className="dropdown">
              <Link to="#" className="btn-selector nolink voomio-select">{state}</Link>
              <ul className='voomio-zindex'>
                  {chainfilterdata.map((item, index) =>(<li key={item} onClick={()=>setState(item)}><span className={(state==item)?"activefilter":""}>{item}</span></li>))}
              </ul>
          </div>
      </div>
    )
}

export const TimeFilter = () => {
    const [state, setState] = useState("Past 24 hours")
    return (
        <div className="seclect-box style3 voomio-mta voomio-pl-1">
          <div id="artworks" className="dropdown">
              <Link to="#" className="btn-selector nolink voomio-select">{state}</Link>
              <ul className='voomio-zindex'>
                  {timefilterdata.map((item, index) =>(<li key={item} onClick={()=>setState(item)}><span className={(state==item)?"activefilter":""}>{item}</span></li>))}
              </ul>
          </div>
      </div>
    )
}

export const PriceFilter = () => {
    const [state, setState] = useState("Price low to high")
    return (
        <div className="seclect-box style3 voomio-mta voomio-pl-1">
          <div id="artworks" className="dropdown">
              <Link to="#" className="btn-selector nolink voomio-select">{state}</Link>
              <ul className='voomio-zindex'>
                  {pricefilterdata.map((item, index) =>(<li key={item} onClick={()=>setState(item)}><span className={(state==item)?"activefilter":""}>{item}</span></li>))}
              </ul>
          </div>
      </div>
    )
}