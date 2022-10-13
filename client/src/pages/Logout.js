const Logout = () => {
  localStorage.setItem("token", "");
  localStorage.setItem("loggedin", false);

  console.log(localStorage.getItem('token'));
  console.log(localStorage.getItem('loggedin'));

  return <div>This is the logout page</div>;
};

export default Logout;
