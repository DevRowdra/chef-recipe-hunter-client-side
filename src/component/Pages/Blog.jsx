import React, { useEffect } from 'react';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Loading from './Loading';

const Blog = () => {
  const [loader, setLoader] = useState(false);

  
  // add manual page loader
const[pageLoader,setPageLoader]=useState(true)
useEffect(()=>{
setTimeout(() => {
  setPageLoader(false)
}, 1000);

},[])

  const downloadPDF = () => {
    const capture = document.querySelector('#blog');
    setLoader(true);
    const options = {
      scale: 2, 
      scrollY: -window.scrollY, 
      logging: true, 
      width: capture.offsetWidth, 
      height: capture.offsetHeight,
    };
    html2canvas(capture, options).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a3');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('blog.pdf');
    });
  };
  
  if (pageLoader) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div
        className="grid grid-cols-2 gap-4"
        id="blog"
      >
        <div className="border rounded-md shadow-xl p-8">
          <div className="badge badge-secondary bg-pink-400">Best Blog</div>
          <h1 className="my-7 text-3xl font-semibold">
            Differences between uncontrolled and controlled components.
          </h1>
          Controlled components are predictable and easier to manage, becouse
          the system maintains control of their state and behavior.
          <br />
          Uncontrolled components more flexible and versatile, but it be more
          difficult to manage and validate, as their state is not always under
          the direct control of our system.
        </div>
        <div className="border rounded-md shadow-xl p-8">
          <div className="badge badge-secondary bg-pink-400">Best Blog</div>
          <h1 className="my-7 text-3xl font-semibold">
            How to validate React props using PropTypes
          </h1>
          
         
          1.We can use the prop-types library that comes with React.
          2.First, install the prop-types package using npm. <br />
          3.Import the PropTypes object from the prop-types package. <br />
          4.Define the expected prop types for your component using the propTypes property:
          <pre>
        <code>
          {`MyComponent.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.number.isRequired,
  prop3: PropTypes.arrayOf(PropTypes.string),
  prop4: PropTypes.shape({
    prop5: PropTypes.string,
    prop6: PropTypes.number,
  }),
};`}
        </code>
      </pre>

        </div>
        <div className="border rounded-md shadow-xl p-8">
          <div className="badge badge-secondary bg-pink-400">Best Blog</div>
          <h1 className="my-7 text-3xl font-semibold">
            Difference between nodejs and express js.
          </h1>
          Node.js is a JavaScript runtime that allows us to run
          JavaScript code in the server-side,and Express.js is a framework
          built on top of Node.js it make easy the process of building web
          applications.
          Node.js can be used to build a wide range of applications,  web servers, command-line tools, desktop applications, and  Express.js is specifically designed for building web applications.
        </div>
        <div className="border rounded-md shadow-xl p-8">
          <div className="badge badge-secondary bg-pink-400">Best Blog</div>
          <h1 className="my-7 text-3xl font-semibold">
            What is a custom hook, and why will you create a custom hook?
          </h1>
          Custom hook is a reusable function that encapsulates a certain set of logic It can be shared  different components in a React . Custom hooks allow us to extract common functionality into a single location.It can help to improve code organization, reduce duplication, and make the codebase more modular and easier to maintain.
        </div>
      </div>
      <div className="text-center mt-7">
        <div className="">
          <button
            className="btn btn-error"
            onClick={downloadPDF}
            disabled={!(loader === false)}
          >
            {loader ? <span>Downloading</span> : <span>Download</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
