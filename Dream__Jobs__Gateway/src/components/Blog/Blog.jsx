import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="flex justify-center items-center w-full bg-[url('https://i.ibb.co/r4ZSBCj/Vector.png')] bg-repeat-space h-[200px]" >
                <h1 className="text-center font-extrabold text-4xl" >Blogs Question & Answer</h1>
            </div>
            <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl font-black" > Q. When should you use context API?</h1>
            <p className="mb-8 py-3" ><span className="font-semibold text-2xl" >The Context API</span>the Context API in React is used when you need to share data or state across multiple components in a tree-like structure without prop drilling. It is useful for managing global application states, facilitating communication between distant components, managing cross-cutting concerns, and simplifying prop passing in complex component hierarchies. However, it should be used judiciously and not as a replacement for props in all cases.</p>
            <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl font-black" > Q. What is a custom hook?</h1>
            <p className="mb-8 py-3" ><span className="font-semibold text-2xl" > A Custom Hook</span> in React is a reusable function that encapsulates the logic for managing states, side effects, or other common behaviors. Custom hooks follow a naming convention and can be used in functional components like any other React hook. They promote code reusability, maintainability, and separation of concerns by allowing developers to abstract complex logic into separate functions, making it easier to share and reuse code across components in a modular and efficient way.</p>
            <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl font-black" > Q. What is useRef?</h1>
            <p className="mb-8 py-3" ><span className="font-semibold text-2xl" >useRef </span> is a hook in React that allows you to create and manage mutable references to values that persist across re-renders in a functional component. It is commonly used for accessing and modifying the DOM directly or for storing and accessing values that need to persist but do not need to trigger re-renders. Unlike useState, useRef does not trigger re-renders when its value is updated, making it useful for performance optimization and managing mutable data in React components.</p>
            <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl font-black" > Q. What is useMemo?</h1>
            <p className="mb-8 py-3" ><span className="font-semibold text-2xl" >useMemo</span> is a hook in React, which is a popular JavaScript library used for building user interfaces. useMemo is used to optimize performance by memoizing the result of a function and returning the memoized result when the dependencies of that function have not changed. It helps to prevent unnecessary recalculations of expensive computations, which can lead to performance improvements in React applications.</p>
        </div>
    );
};

export default Blog;