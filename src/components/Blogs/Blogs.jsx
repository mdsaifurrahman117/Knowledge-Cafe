import React, { useEffect, useState } from 'react'
import Blog from './Blog';

function Blogs() {
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
                                                                        key={blogs.id}
                                                                        blog={blog}>
                                                            </Blog>
                                                )
                                    }
                        </>
            )
}

export default Blogs
