import React from 'react'
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header';
import Bookmarks from './components/bookmarks/Bookmarks';
import Time from './components/Blogs/times/Time';
import Footer from './components/Footer';

function App() {
            return (
                        <>
                                    <Header></Header>
                                    <section className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                                                <section  className="col-span-1 md:col-span-2">
                                                            <Blogs></Blogs>
                                                </section>
                                                <aside className="flex flex-col gap-5">
                                                            <Time></Time>
                                                            <Bookmarks></Bookmarks>
                                                </aside>
                                    </section>
                                    <Footer></Footer>
                        </>
            )
}

export default App
