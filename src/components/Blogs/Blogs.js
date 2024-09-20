import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed

function Blogs() {
    const sections = [
        //'Software Testing',
        'Object Oriented Design',
        //'Data Structure and Algorithm',
        //'AI'
    ];

    return (
        <div>
            <h1 className="blogName">Blog Categories</h1>
            <ul className="blogList">
                {sections.map((section, index) => (
                    <li key={index}>
                        <Link to={`/blogs/${section.replace(/\s+/g, '-').toLowerCase()}`}>
                            {section}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blogs;
