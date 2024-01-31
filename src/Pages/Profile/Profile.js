import './Profile.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import TabMain from '../../components/ProfileTabs/TabMain'
import TabPassword from '../../components/ProfileTabs/TabPassword';

function Profile() {
  return (
    <Container className='Profile'>
      <h2>Редактирование профиля</h2>
      <Row>
        <Col md={2} className="Profile_avatar">
          <Figure.Image className='Image_avatar'
            width={100}
            height={100}
            alt="Your avatar"
            src="./9b3ac09d98e37a3aeb37.jpg"
          />
          <Form>
            <Form.Control type="file" size="sm"/>
          </Form>
        </Col>
        <Col md={7}>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3 custom-tabs"
          >
          <Tab eventKey="home" title="Основная">
            <TabMain/>
          </Tab>
          <Tab eventKey="Password" title="Пароль">
            <TabPassword/>
          </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
