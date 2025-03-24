import React from 'react'

function Blog({ blog }) {
            const { cover_image, title} = blog;
            console.log(blog);
            
            return (
                        <article>
                                    <h1>{title}</h1>
                                    <img src={cover_image} alt="" />
                        </article>
            )
}

export default Blog
