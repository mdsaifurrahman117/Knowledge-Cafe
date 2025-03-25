import React, { useEffect, useState } from 'react'
import Blog from './Blog';

function Blogs({ handle_add_bookmarks }) {
            const [blogs, set_blogs] = useState([]);

            useEffect(() => {
                        fetch("blogs.json")
                                    .then(response => response.json())
                                    .then(data => set_blogs(data))
            }, [])

            return (
                        <>
                                    {
                                                blogs.map( blog => 
                                                            <Blog 
                                                                        key={blog.id}
                                                                        blog={blog}
                                                                        handle_add_bookmarks={handle_add_bookmarks}>
                                                            </Blog>
                                                )
                                    }
                        </>
            )
}

export default Blogs
