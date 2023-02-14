import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

function CampsiteCard(props) {
    const name = props.name;
    const tool = props.tool;
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.campsite.image}
                alt={props.campsite.name}
            />
            <CardTitle>{props.campsite.name}</CardTitle>
        </Card>
    );
  }
  
  //export default Tool;
  export default CampsiteCard;