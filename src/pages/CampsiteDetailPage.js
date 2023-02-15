import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../featuures/campsites/CampsiteDetail';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <Row>
               <CampsiteDetail campsite={campsite} />
            </Row>
        </Container>
    )
};

export default CampsiteDetailPage;