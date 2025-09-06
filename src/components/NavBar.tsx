const NavBar = () => {
  return (
    <div className="component p-3 d-flex justify-content-between">
      <h1 className="logo w-25">Do it!</h1>
      <h1>
        <a className="text-decoration-none text-white" href="https://github.com/gustavoGGV" target="_blank">
          <i className="bi bi-github me-2"></i>gustavoGGV
        </a>
      </h1>
    </div>
  );
};

export default NavBar;
