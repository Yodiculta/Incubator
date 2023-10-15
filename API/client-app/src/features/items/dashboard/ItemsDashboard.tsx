import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ItemList from "./ItemList";

interface Props{
    items: Activity[];
}


export default function ItemsDashboard(props: Props) {
    return (
        <Grid>
            <Grid.Column widtg='10'>
                <List>
                    <ItemList items = {props.items}/>
                </List>
            </Grid.Column>
        </Grid>
    )
}