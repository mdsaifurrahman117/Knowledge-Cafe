import React from 'react'

function Bookmarked_card({ bookmark }) {
            const {title} = bookmark;

            return (
                        <>
                                    <div className="card bg-base-100 shadow-sm my-3">
                                                <div className="card-body">
                                                            <h2 className="card-title">{title}</h2>
                                                </div>
                                    </div>
                        </>
            )
}

export default Bookmarked_card
