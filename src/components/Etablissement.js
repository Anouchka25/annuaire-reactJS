import React from 'react';
import { Card } from 'semantic-ui-react';

const Etablissement = () => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Nom d'établissement</Card.Header>
                <Card.Meta>Téléphone: 01 23 45 67 89</Card.Meta>
                <Card.Meta>Email: abc@def.com</Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default Etablissement;