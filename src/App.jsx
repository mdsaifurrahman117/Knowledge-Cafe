import React, { useState } from 'react'
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header';
import Bookmarks from './components/bookmarks/Bookmarks';
import Time from './components/Blogs/times/Time';
import Footer from './components/Footer';

function App() {
            const [bookmarks, set_bookmarks] = useState([]);
            const handle_add_bookmarks = ( blog ) => {
                        const new_bookmarks = [...bookmarks, blog];
                        set_bookmarks(new_bookmarks);
                        
            }

            return (
                        <>
                                    <Header></Header>
                                    <section className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                                                <section  className="col-span-1 md:col-span-2">
                                                            <Blogs 
                                                                        handle_add_bookmarks={handle_add_bookmarks}>            
                                                            </Blogs>
                                                </section>
                                                <aside className="flex flex-col gap-5">
                                                            <Time></Time>
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
