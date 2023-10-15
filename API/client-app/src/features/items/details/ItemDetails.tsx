
import { Button,  Card,  Image } from 'semantic-ui-react'
import idea from "../../../assets/idea.jpg"
import { Activity } from '../../../app/models/activity'

interface Props {
    item: Activity;
    cancelSelectItem: () => void;
}

export default function ItemDetails(props:Props){
    return (
        <Card fluid>
        <Image src={idea}/>
        <Card.Content>
          <Card.Header>{props.item.title}</Card.Header>
          <Card.Meta>
            <span>{props.item.date}</span>
          </Card.Meta>
          <Card.Description>
            {props.item.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button floated='right' content = 'Участвовать'/>
            <Button onClick={props.cancelSelectItem} floated='left' content = 'Закрыть'/>

        </Card.Content>
      </Card>
    )
}