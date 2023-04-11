import React from 'react';


const Blog = () => {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold mt-8'>Viva Quertion</h1>
      <div className='my-container'>
        <div className='border-2 p-8 my-2'>
          <h1 className='text-center text-xl font-semibold'>When should you context API?</h1>
          <p className='text-center'>Context API works best for situations where a lightweight solution is desirable.
           Context API is also well suited for use cases that involve passing data from a parent to a deeply nested child. 
           Context API provides a scalable and simple framework, making it a great way to implement shared data between components.</p>
        </div>
        <div className='border-2 p-8 my-2'>
          <h1 className='text-center text-xl font-semibold'>What is custom hook?</h1>
          <p className='text-center'>Context is primarily used when some data needs to be accessible by many components at different nesting levels.
           Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels,
            component composition is often a simpler solution than context.</p>
        </div>
        <div className='border-2 p-8 my-2'>
          <h1 className='text-center text-xl font-semibold'>What is useRef?</h1>
          <p className='text-center'>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref).
           A reference is an object having a special property current</p>
        </div>
        <div className='border-2 p-8 my-2'>
          <h1 className='text-center text-xl font-semibold'>What is useMemo?</h1>
          <p className='text-center'>React has a built-in hook called useMemo that allows you to memoize expensive functions
           so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo
            will only recompute the memoized value when one of the inputs has changed.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;