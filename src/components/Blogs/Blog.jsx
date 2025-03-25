import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Blog({ blog, handle_add_bookmarks, handle_reading_time }) {
            const { cover_image, title, author_name, author_image, posted_date, reading_time, hashtags, short_description } = blog;

            return (
                        <article className="mb-5">
                                    <img src={cover_image} alt="cover image" className="rounded-xl" />
                                    <div className="flex flex-row justify-between items-center my-5">
                                                <div className="flex flex-row gap-3 items-center">
                                                            <img src={author_image} alt="author image" className="w-[50px] h-[50px] object-cover rounded-full" />
                                                            <div className="flex flex-col">
                                                                        <span className="text-gray-500">{author_name}</span>
                                                                        <span className="text-gray-500">{posted_date}</span>
                                                            </div>
                                                </div>
                                                <div className="flex flex-row gap-2">
                                                            <span className="text-[1rem] text-gray-500">{reading_time} min read</span>
                                                            <button className="text-[1rem] cursor-pointer" 
                                                                        onClick={ () => {handle_add_bookmarks(blog)}}>
                                                                        <i class="ri-bookmark-line"></i>
                                                            </button>
                                                </div>
                                    </div>
                                    <h1 className="text-3xl font-semibold">{title}</h1>
                                    <p className="text-[1.08rem]">{short_description}</p>
                                    <ul className="my-2 flex flex-row gap-5 text-gray-500">
                                                {
                                                            hashtags.map((tag, idx) =>
                                                                        <li key={idx}>{tag}</li>
                                                            )
                                                }
                                    </ul>
                                    <button className="text-[1rem] text-blue-800 border-b cursor-pointer"
                                                onClick={ () => {handle_reading_time(reading_time)}}>
                                                Complete
                                                <i class="ri-check-double-line text-[1.2rem] ml-1"></i>
                                    </button>
                        </article>
            )
}

export default Blog
