import React from 'react'
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header';
import Bookmarks from './components/Bookmarks';

function App() {
            return (
                        <>
                                    <Header></Header>
                                    <section className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                                                <section  className="col-span-1 md:col-span-2 bg-amber-600">
                                                            <Blogs></Blogs>
                                                </section>
                                                <aside className="bg-amber-500">
                                                            <Bookmarks></Bookmarks>
                                                </aside>
                                    </section>
                        </>
            )
}

export default App
