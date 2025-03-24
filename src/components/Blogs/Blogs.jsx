import React, { useEffect, useState } from 'react'

function Blogs() {
            const [ blogs, set_blogs] = useState([]);

            useEffect( () => {
                        fetch("blogs.json")
                        .then(response => response.json())
                        .then(data => set_blogs(data))
            }, [] )

            console.log(blogs);
            

            return (
                        <div>

                        </div>
            )
}

export default Blogs
