function NavBars() {
  return (
    <div>
      <header className="fixed top-0 bg-black h-14 w-full flex items-center">
        <div className="flex w-2/3">
          <div>
            <span className="ms-10 text-2xl font-bold text-white">Management</span>
            <span className="ms-1 text-xs font-bold text-white">Chuwa</span>
          </div>
          <div className="ms-16 w-full bg-white rounded flex items-center">
            <input type="text" className="p-2 rounded w-full outline-none" placeholder="Search" />
            <i className="fas fa-search text-gray-400 mx-3"></i>
          </div>
        </div>
        <div className="flex w-1/3 justify-end">
          <div className="me-10 text-white">
            <button className="text-sm"><i className="far fa-user me-2"></i> Sign in</button>
            <button className="ms-7 text-sm"><i className="fas fa-cart-shopping me-2"></i>$0.00</button>
          </div>
        </div>
      </header>

      <div className="mt-14"></div>

      <div class="fixed bottom-0 left-0 right-0 bg-black h-14 flex justify-between items-center">
        <div className="w-1/3">
          <span className="text-white text-xs ms-10">@2022 All Rights Reserved</span>
        </div>
        <div class="w-1/3 text-white text-base flex justify-center">
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter ms-2"></i>
          <i className="fab fa-facebook ms-2"></i>
        </div>
        <div class="w-1/3 text-white text-xs flex justify-end">
          <a href="#" className="me-3">Contact us</a>
          <a href="#" className="me-3">Privacy Policies</a>
          <a href="#" className="me-10">Help</a>
        </div>
      </div>
    </div>
  );
}

export default NavBars;
