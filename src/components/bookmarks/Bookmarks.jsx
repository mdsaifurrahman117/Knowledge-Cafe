import React from 'react'
import Bookmarked_card from './Bookmarked_card'

function Bookmarks({ bookmarks }) {
            return (
                        <div className="bg-gray-100 p-5 rounded-xl">
                                    <h1 className="text-xl">Bookmarked blogs : {bookmarks.length} </h1>
                                    {
                                                bookmarks.map( (bookmark, idx) => 
                                                            <Bookmarked_card
                                                                        key={idx}
                                                                        bookmark={bookmark}>
                                                            </Bookmarked_card>
                                                )
                                    }
                        </div>
            )
}

export default Bookmarks
