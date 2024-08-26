// import React, { createContext, useState, useContext } from 'react';
// import { UserContext } from './userContext';

// function Preview({ setTimes }) {
//     // const {User,login} = useContext(UserContext)
//     const [isFormVisible, setIsFormVisible] = useState(false);
//     const handleClick = () => {
//         setIsFormVisible(true);
//     };
//     const [user, setUser] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser((user) => ({ ...user, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setTimes(1)
//         // login(User)
//         localStorage.setItem("UserDetail", JSON.stringify(user))
//         setUser({ name: "", email: "", password: "" });
//     };    
//     const userDetail = localStorage.getItem("UserDetail");
// const getUser = userDetail ? JSON.parse(userDetail) : null;
// const userName = getUser.name
// console.log(userName)

//     return (        
//             <div>
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-12 bg-dark" style={{ height: "100vh" }}>
//                             <button
//                                 className='btn btn-outline-light text-secondary'
//                                 style={{ margin: "10% 20% 3% 48%" }}
//                                 onClick={handleClick}
//                             >
//                                 Login
//                             </button>
//                             {isFormVisible && (
//                                 <form className='d-block' onSubmit={handleSubmit}>
//                                     <input type="text" className='form-control w-25 mx-auto mb-3' placeholder='Enter Your Name' value={user.name} onChange={handleChange} name="name" />
//                                     <input type="email" className='form-control w-25 mx-auto mb-3' placeholder='Enter Your Email' value={user.email} onChange={handleChange} name="email" />
//                                     <input type="password" className='form-control w-25 mx-auto mb-3' placeholder='Enter Your Password' value={user.password} onChange={handleChange} name="password" />
//                                     <button type="submit" className='btn btn-light mx-auto d-block mb-2'>Submit</button>
//                                 </form>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>        
//     );

// }

// export default Preview;