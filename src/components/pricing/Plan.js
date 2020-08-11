import React from 'react'

const Plan = ({title, price}) => {
    return (
            <div className="card card-pricing popular shadow text-center px-3 mb-4">
                    <span
                        className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">{title}</span>
                <div className="bg-transparent card-header pt-4 border-0">
                    <h1 className="h1 font-weight-normal text-primary text-center mb-0"
                        data-pricing-value="30">$<span className="price">{price}</span><span
                        className="h6 text-muted ml-2">/ per month</span></h1>
                </div>
                <div className="card-body pt-0">
                    <ul className="list-unstyled mb-4">
                        <li>Up to 5 users</li>
                        <li>Basic support on Github</li>
                        <li>Monthly updates</li>
                        <li>Free cancelation</li>h
                    </ul>
                    <a href="https://www.totoprayogo.com" target="_blank" className="btn btn-primary mb-3">Order
                        Now</a>
                </div>
            </div>
    )
}

export default Plan