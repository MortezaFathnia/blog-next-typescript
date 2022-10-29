import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <main className="container">
        {props.children}
      </main>
    </Fragment>
  );
}

export default Layout;