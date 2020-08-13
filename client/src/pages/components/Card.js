import React from "react";
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


export const RepoCard = (props) => {
  return   <Card shadow={5} style={{color: '#E684AE',minWidth: '450', margin: '5%', float: 'left'}}>
    <CardTitle style={{color: '#fff', height: '176px', backgroundColor: '#77A1D3' }} >{props.title}</CardTitle>
    <CardText>
    {props.title}
    {/* {props.description != null ? props.description : "Come back later..."} */}
    </CardText>
    <CardActions border>
      <Button colored>GitHub Link</Button>
    </CardActions>
    <CardMenu style={{color: '#E684AE'}}>
      <IconButton name="" />
    </CardMenu>
  </Card>

}


