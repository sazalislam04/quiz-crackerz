import React from "react";

const Blog = () => {
  return (
    <section className="h-full" data-aos="flip-right" data-aos-duration="1000">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6"></div>
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl mb-6 font-semibold sm:text-4xl">
          Assignment Questions?
        </h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-violet-400">
              What is the purpose of react router dom?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              Routing is a process in which a user is directed to different
              pages based on their action or request. ReactJS Router is mainly
              used for developing Single Page Web Applications. React Router is
              used to define multiple routes in the application. When a user
              types a specific URL into the browser, and if this URL path
              matches any 'route' inside the router file, the user will be
              redirected to that particular route.
              <p>
                React Router DOM is an npm package that enables you to implement
                dynamic routing in a web app.
              </p>
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400">
              How does work Context API?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              Context allows passing data through the component tree without
              passing props down manually at every level.
              <p>
                In React application, we passed data in a top-down approach via
                props. Sometimes it is inconvenient for certain types of props
                that are required by many components in the React application.
                Context provides a way to pass values between components without
                explicitly passing a prop through every level of the component
                tree.
              </p>
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-violet-400">
              How does work useRef hook?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              It is an attribute which makes it possible to store a reference to
              particular DOM nodes or React elements. It provides a way to
              access React DOM nodes or React elements and how to interact with
              it. It is used when we want to change the value of a child
              component, without making the use of props
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
