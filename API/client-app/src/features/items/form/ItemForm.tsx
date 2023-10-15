import { Button, Form, Segment, Header } from "semantic-ui-react";

export default function ItemForm() {
    return (
        <Segment clearing>
            <Form >
                <Header as='h5'>Предложи свою идею!</Header>
                <Form.Input placeholder='Название' />
                <Form.TextArea placeholder='Описание' />
                <Form.Input placeholder='Предметная оласть' />
                <Form.Input placeholder='Город' />
                <Form.Input placeholder='Местоположение' />
                <Button floated='right' positive type='submit' content='Отправить' />
                <Button floated='right' type='submit' content='Отменить' />

            </Form>
        </Segment>
    )
}