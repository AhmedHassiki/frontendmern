import React,{ useState }  from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Modal , Form } from 'react-bootstrap';
import { userRegister } from '../JS Redux/actions/authActions';


const FormRegister = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name , setName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    
    const handleRegister = () => {
        dispatch(userRegister({name, lastName, email, password})); // userRegister from actions
        navigate('/');
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="dark" onClick={handleShow}>
            Register      
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name :</Form.Label>
        <Form.Control type="text " placeholder="Enter Name" name="name" onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last name :</Form.Label>
        <Form.Control type="text" placeholder="Enter Last name" name="lastName" onChange={(e)=>setLastName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email : </Form.Label>
        <Form.Control type="email" placeholder=" Enter Email" name="email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password :</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleRegister(); handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default FormRegister;