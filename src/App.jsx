import React, { useState } from 'react'
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header';
import Bookmarks from './components/bookmarks/Bookmarks';
import Reading_time from './components/Reading_time';
import Footer from './components/Footer';

function App() {
            const [bookmarks, set_bookmarks] = useState([]);
            const handle_add_bookmarks = ( blog ) => {
                        const new_bookmarks = [...bookmarks, blog];
                        set_bookmarks(new_bookmarks);
            }

            const [reading_time, set_reading_time] = useState(0);
            const handle_reading_time = ( id, time) => {
                        set_reading_time(reading_time + time);
                        // removing from bookmarks after reading complete
                        const remaining_bookmark = bookmarks.filter( bookmark => bookmark.id !== id );
                        set_bookmarks(remaining_bookmark)
                        
            }

            return (
                        <>
                                    <Header></Header>
                                    <section className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                                                <section  className="col-span-1 md:col-span-2">
                                                            <Blogs 
                                                                        handle_add_bookmarks={handle_add_bookmarks}
                                                                        handle_reading_time={handle_reading_time}>            
                                                            </Blogs>
                                                </section>
                                                <aside className="flex flex-col gap-5">
                                                            <Reading_time
                                                                        reading_time={reading_time}>            
                                                            </Reading_time>
                                                            <Bookmarks
                                                                        bookmarks={bookmarks}>
                                                            </Bookmarks>
                                                </aside>
                                    </section>
                                    <Footer></Footer>
                        </>
            )
}

export default App
