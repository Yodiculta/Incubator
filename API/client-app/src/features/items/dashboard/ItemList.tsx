import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";


interface Props {
    items: Activity[];
    selectItem: (id: string) => void;
}

export default function ItemList(props: Props) {
    return (
        <Segment>
            <Item.Group devided = "true">
                {props.items.map(item => (
                    <Item key = {item.id}>
                        
                    <Item.Content>
                        <Item.Header as='a'>{item.title}</Item.Header>
                        <Item.Meta>{item.date}</Item.Meta>
                        <Item.Description>
                            <Label basic content={item.category} />
                            <div>{item.description}</div>
                            <div> {item.city}, {item.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' content='Посмотреть' onClick = {() => props.selectItem(item.id)}/>
                            <Button floated='right' content='Поддержать' />

                        </Item.Extra>
                    </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}