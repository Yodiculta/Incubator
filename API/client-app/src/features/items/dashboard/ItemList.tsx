import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";


interface Props{
    items: Activity[];
}

export default function ItemList ({items}: Props)
{
    return(
        <Segment>
            <Item.Group devided>
            {items.map(item => (
                <Item.Content>
                    <Item.Header as='a'>{item.title}</Item.Header>
                    <Item.Meta>{item.date}</Item.Meta> 
                    <Item.Description>
                        <div>{item.description}</div>
                        <div> {item.city}, {item.venue}</div>
                        </Item.Description> 
                        <Item.Extra>
                            <Button content = 'Посмотреть'/>
                            <Label basic content = {item.category}/>
                        </Item.Extra>
                </Item.Content>
            ))}
            </Item.Group>
        </Segment>
    )
}