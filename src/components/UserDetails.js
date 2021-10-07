import { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import debounce from 'lodash.debounce';
const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [userNum,setUserNum] = useState(21);
  const scrollDown = useRef();
  const fetchData = async (num) => {
    //const res = await fetch("https://reqres.in/api/users/");
    const res = await fetch(`https://randomuser.me/api/?results=${userNum}`);
    const json = await res.json();
    setUsers(json.results);
  };
 
  window.onscroll = debounce(() => {
    

    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setUserNum(userNum+21);
      fetchData();
    }
  }, 100);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="user_details">
      <nav class="navbar  fixed-top">
        <h2>User Details</h2> 
      </nav>
      <Container className="grid md:grid-cols-5 grid-cols-3 gap-4 justify-items-center " ref={scrollDown}>
        <Row>
          {users.length &&
            users.map(user => {
              return (
                <Col xs={6} md={4} offset-md-4>
                  <div key={user.cell} className="img_container">
                    <img  src={user.picture.large} />
                    <p className="remove_margin">
                      <strong>{user.name.first} {user.name.last}</strong>
                    </p>
                    <p>Ph: {user.phone}</p>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};
export default UserDetails;
