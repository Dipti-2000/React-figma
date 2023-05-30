const Navigation = () => {
  return (
    <nav className="container">
      <div className="Logo">
        <img
          src="https://th.bing.com/th?id=OIP.owB3jmGFCSKNVjHk_pziLgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          height={65}
          width={80}
          alt="nike"
        />
      </div>
      
      <ul>
      <li href="#">Menu</li> 
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      

      <button>Login</button>
      
    </nav>
  );
};
export default Navigation;
