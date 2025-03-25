import React from 'react'

function Time({ reading_time }) {
            return (
                        <div className="bg-blue-50 rounded-xl p-5 border border-blue-400">
                                    <h1 className="text-xl text-blue-800">
                                                Spent time on read : {reading_time} min
                                    </h1>
                        </div>
            )
}

export default Time
