import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form"
import StateList from './stateList';
import '../App.css'
const RegForm = () => {
const [states, setStates] = ([{"state":"","capital":"","date": ""}])
const list = (x) =>
{

setStates(x)
// console.log(x)
}

<StateList list = {list}/>
console.log(states)
return(

  <Form className='m-3 p-3 contact-form' data-bs-theme="light" style={{backgroundColor: "white"}}  >
    <fieldset className='border rounded-3 p-3' >
    <legend className='float-none w-auto px-3'>Registration Details</legend>
      {/*------------------------------------------------ROW 1------------------------------------------ */}
      <Row className="mb-3 pt-3"> 
        <Form.Group as={Col} controlId="formGridEmail"  >
        <Form.Label>State Of Domicile</Form.Label>
          <Form.Select defaultValue="Choose..." size="sm">
          <option>Choose...</option>
            {List.map(state => {return <option>{state.state}</option>})}
        </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Scholarship Category</Form.Label>
          <Form.Select defaultValue="Choose..." size="sm">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>
      {/*------------------------------------------------ROW 2------------------------------------------ */}
      <Row>
      <Col sm='3'>
      <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label >Name</Form.Label>
      <Form.Control size="sm"  placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Col>
      <Col sm='2'>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Date</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Col>
      <Col sm='2'>
      <Form.Label>Gender</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Col>
      <Col sm='2'>
      <Form.Label>Single Girl Child</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Col>
      <Col sm='3'>
      <Form.Label>Religion</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Col>
      </Row>
{/*------------------------------------------------ROW 3------------------------------------------ */}
      <Row>
      <Col sm='3'>
      <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Community/Category</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Form.Group>
      </Col>
      <Col sm='3'>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Father's Name</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Col>
      <Col sm='3'>
      <Form.Label>Mother's Name</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Col>
      <Col sm='3'>
      <Form.Label>Annual Income</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Col>
      </Row>
      {/*------------------------------------------------ROW 4------------------------------------------ */}
      <Row>
      <Col sm='3'>
      <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Aadhar Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Col>
      <Col sm='3'>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Col>
      <Col sm='3'>
      <Form.Label>E-mail Id</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Col>
      <Col sm='3'>
      <Form.Label>Day Scholar/Hosteler</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Col>
      </Row>
      {/*------------------------------------------------ROW 5------------------------------------------ */}

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check className='form-switch' type="checkbox" label="Check me out" />
      </Form.Group>
      
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
      </fieldset>
  {/*------------------------------------------------Fieldset-2------------------------------------------ */}
  <fieldset className='border rounded-3 p-3' >
    <legend className='float-none w-auto px-3'>Academic Details</legend>
      {/*------------------------------------------------ROW 1------------------------------------------ */}
      <Row> 
        <Form.Group as={Col} sm='6' className="mb-2"  controlId="formGridEmail" >
        <Form.Label>Institute</Form.Label>
          <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} sm='3' controlId="formGridPassword">
          <Form.Label>Present Class/Course</Form.Label>
          <Form.Select size="sm" className="mb-2"  defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} sm='3' className="mb-2"  controlId="formGridPassword">
          <Form.Label>Present Class Year</Form.Label>
          <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>
      {/*------------------------------------------------ROW 2------------------------------------------ */}
      <Row>
      <Form.Group as={Col} className="mb-2"  sm='4' controlId="formGridAddress1">
      <Form.Label>Mode Of Study</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Form.Group>
      <Form.Group as={Col} className="mb-2"  sm='4' controlId="formGridAddress2">
        <Form.Label>Present Class Start Date</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Form.Group as={Col} className="mb-2"  sm='4' controlId="formGridAddress3">
      <Form.Label>Previous Board University Name</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Form.Group>
      </Row>
{/*------------------------------------------------ROW 3------------------------------------------ */}
      <Row>
      <Form.Group as={Col} className="mb-2" controlId="formGridAddress1">
      <Form.Label>Previous Course</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Form.Group>
      <Form.Group as={Col} className="mb-2" controlId="formGridAddress2">
        <Form.Label>Previous Passing Year</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Form.Group as={Col} className="mb-2" controlId="formGridAddress2">
        <Form.Label>Previous Class%</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Form.Group as={Col} className="mb-2" controlId="formGridAddress1">
      <Form.Label>University I/II Rank Holder</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Form.Group>
      </Row>
      {/*------------------------------------------------ROW 4------------------------------------------ */}
      <Row>
      <Form.Group as={Col} className="mb-2" sm='4' controlId="formGridAddress2">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Form.Group as={Col} className="mb-2" sm='4' controlId="formGridAddress1">
      <Form.Label>Day Scholar/Hosteler</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Form.Group>
      <Form.Group as={Col} className="mb-2" sm='4' controlId="formGridAddress2">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Row>
            {/*------------------------------------------------ROW 5------------------------------------------ */}
            <Row>
      <Form.Group as={Col} className="mb-2" sm='4' controlId="formGridAddress2">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Form.Group as={Col} className="mb-2" sm='4' controlId="formGridAddress1">
      <Form.Label>Day Scholar/Hosteler</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Form.Group>
      <Form.Group as={Col} className="mb-2" sm='4' controlId="formGridAddress2">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Row>
      {/*------------------------------------------------ROW 6------------------------------------------ */}

      <Row>
      <Form.Group as={Col} className="mb-2" sm='3' controlId="formGridAddress1">
      <Form.Label>Day Scholar/Hosteler</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Form.Group>
      <Form.Group as={Col} className="mb-2" sm='3' controlId="formGridAddress1">
      <Form.Label>Day Scholar/Hosteler</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
      </Form.Group>
      <Form.Group as={Col} className="mb-2" sm='3' controlId="formGridAddress2">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Form.Group as={Col} className="mb-2" sm='3' controlId="formGridAddress2">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Row>
            {/*------------------------------------------------ROW 7------------------------------------------ */}
            <Row>
      <Form.Group as={Col} className="mb-2" sm='4' controlId="formGridAddress2">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Form.Group as={Col} className="mb-2" sm='4' controlId="formGridAddress2">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Form.Group as={Col} className="mb-2" sm='4' controlId="formGridAddress2">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Row>


      </fieldset>
      {/* ----------------------------------------------------Fieldset-3------------------------------------------- */}
    
      <fieldset className='border rounded-3 p-3' >
    <legend className='float-none w-auto px-3'>Other Details</legend>
      {/*------------------------------------------------ROW 1------------------------------------------ */}
      <Row > 
        <Form.Group as={Col} sm='2' className="mb-2" controlId="formGridEmail" >
        <Form.Label>State Of Domicile</Form.Label>
          <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} sm='2' className="mb-2" controlId="formGridAddress2">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
        <Form.Group as={Col} sm='3' className='mb-2' controlId="formGridPassword">
          <Form.Label>Scholarship Category</Form.Label>
          <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className='mb-2' sm='3' controlId="formGridPassword">
          <Form.Label>Scholarship Category</Form.Label>
          <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className="mb-2" sm='2' controlId="formGridAddress2">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>
      </Row>
      {/*------------------------------------------------ROW 2------------------------------------------ */}
      <Row>
      <Form.Group as={Col} className="mb-2" sm='3' controlId="formGridAddress1">
      <Form.Label>Gender</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-2" sm='3' controlId="formGridAddress1">
      <Form.Label>Single Girl Child</Form.Label>
      <Form.Select size="sm" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
          </Form.Group>
      <Form.Group as={Col} className="mb-2" sm='3' controlId="formGridAddress1">
      <Form.Label>Name</Form.Label>
      <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Form.Group as={Col} className="mb-2" sm='3' controlId="formGridAddress2">
        <Form.Label>Date</Form.Label>
        <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
      </Form.Group>

      </Row>
      
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
      </fieldset>

            {/*------------------------------------------------ROW 6------------------------------------------ */}


      <Button className='m-2' variant="primary" type="submit" size="md">
        Submit
      </Button>
    </Form>
)
};

export default RegForm;

const List = [
  {
      "state" : "Andhra Pradesh",
      "capital" : "Amaravati",
      "dof" : "01111956"
  },
  {
      "state" : "Arunachal Pradesh",
      "capital" : "Itanagar",
      "dof" : "20021987"
  },
  {
      "state" : "Assam",
      "capital" : "Dispur",
      "dof" : "26011950"
  },
  {
      "state" : "Bihar",
      "capital" : "Patna",
      "dof" : "22031912"
  },
  {
      "state" : "Chhattisgarh",
      "capital" : "Raipur",
      "dof" : "01112000"
  },
  {
      "state" : "Goa",
      "capital" : "Panaji",
      "dof" : "30051987"
  },
  {
      "state" : "Gujarat",
      "capital" : "Gandhinagar",
      "dof" : "01051960"
  },
  {
      "state" : "Himachal Pradesh",
      "capital" : "Shimla",
      "dof" : "2501957"
  },
  {
      "state" : "Jharkhand",
      "capital" : "Chandigarh",
      "dof" : "15112000"
  },
  {
      "state" : "Karnataka",
      "capital" : "Bengaluru",
      "dof" : "01111956"
  },
  {
      "state" : "Kerala",
      "capital" : "Thiruvananthapuram",
      "dof" : "01111956"
  },
  {
      "state" : "Madhya Pradesh",
      "capital" : "Bhopal",
      "dof" : "01111956"
  },
  {
      "state" : "Maharashtra",
      "capital" : "Mumbai",
      "dof" : "01051960"
  },
  {
      "state" : "Manipur",
      "capital" : "Imphal",
      "dof" : "21011972"
  },
  {
      "state" : "Meghalaya",
      "capital" : "Shillong",
      "dof" : "21011972"
  },
  {
      "state" : "Mizoram",
      "capital" : "Aizawl",
      "dof" : "20021987"
  },
  {
      "state" : "Nagaland",
      "capital" : "Kohima",
      "dof" : "01121963"
  },
  {
      "state" : "Odisha",
      "capital" : "Bhubaneswar",
      "dof" : "26011936"
  },
  {
      "state" : "Punjab",
      "capital" : "Chandigarh",
      "dof" : "01111966"
  },
  {
      "state" : "Rajasthan",
      "capital" : "Jaipur",
      "dof" : "01111956"
  },
  {
      "state" : "Sikkim",
      "capital" : "Gangtok",
      "dof" : "16051975"
  },
  {
      "state" : "Tamil Nadu",
      "capital" : "Chennai",
      "dof" : "26011950"
  },
  {
      "state" : "Telangana",
      "capital" : "Hyderabad",
      "dof" : "02012014"
  },
  {
      "state" : "Tripura",
      "capital" : "Agartala",
      "dof" : "21011972"
  },
  {
      "state" : "Uttar Pradesh",
      "capital" : "Agartala",
      "dof" : "21011972"
  },
  {
      "state" : "Tripura",
      "capital" : "Lucknow",
      "dof" : "26011950"
  },
  {
      "state" : "Uttarakhand",
      "capital" : "Dehradun",
      "dof" : "09112000"
  },
  {
      "state" : "West Bengal",
      "capital" : "Kolkata",
      "dof" : "01111956"
  }
]