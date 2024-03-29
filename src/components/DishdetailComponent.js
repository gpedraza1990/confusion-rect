import React from "react";
import { Card, CardText, CardTitle, CardImg,Breadcrumb,BreadcrumbItem,  CardBody, CardHeader} from 'reactstrap';
import {Link} from 'react-router-dom';

    
    

    function RendeerDish({dish}){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle >{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
        
            
    }
    function RenderCommnets({comments}){
        if(comments !=null)
            return(
                 <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment)=> {
                            return (
                                <li key = {comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format( new Date(Date.parse(comment.date)))}</p>
                                </li>
                            )
                        })}
                    </ul>
                 </div>
            );
        else
            return(
                <div></div>
            );

    }
    const Dishdetail = (props)=>{
        if(props.dish != null)
           return(
                <div className="container"> 
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to ='/menu'>
                                    Menu
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RendeerDish dish={props.dish} />
                        <RenderCommnets comments={props.comments} />
                    </div>
                </div>
           );
        else
           return(
                <div></div>
           );  
    }
    


export default Dishdetail ;