import React from "react";

type Props = {};

const footer = (props: Props) => {
  return (
    <footer
      id="sticky-footer"
      className="flex-shrink-0 py-4 bg-dark text-white-50"
    >
      <div className="container text-center">
        <small>Copyright &copy; MyProduct.com 2023</small>
      </div>
    </footer>
  );
};

export default footer;
