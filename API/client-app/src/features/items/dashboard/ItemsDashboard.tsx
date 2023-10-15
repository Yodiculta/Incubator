import { Button, Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ItemList from "./ItemList";
import ItemDetails from "../details/ItemDetails";
import ItemForm from "../form/ItemForm";

interface Props{
    items: Activity[];
    selectedItem: Activity|undefined;
    selectItem: (id: string) => void;
    cancelSelectItem: () => void;
}


export default function ItemsDashboard(props: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <List>
                    <ItemList items = {props.items} selectItem ={props.selectItem}/>
                </List>
            </Grid.Column>
            <Grid.Column width='6'>
                <Button content = "Предложить свою идею"/>
                {props.selectedItem &&<ItemDetails item = {props.selectedItem} cancelSelectItem = {props.cancelSelectItem}/>}
                <ItemForm />
            </Grid.Column>
        </Grid>
    )
}