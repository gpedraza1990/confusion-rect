import React, { Component } from "react";
import { Card, CardImgOverlay, CardText, CardTitle, CardImg, CardBody, CardHeader} from 'reactstrap';

class Dishdetail  extends Component {
    constructor(props){
        super(props);

        this.state = {
           
        };
    };

    rendeerDish(dish){
        if(dish!= null)
        {
            const comment = dish.comments.map(
                (comment)=>{
                    return(
                        <CardBody>
                            <CardText >{comment.comment}</CardText>
                            <CardText>-- {comment.author} , {comment.date}</CardText>
                        </CardBody>    
                    );

                }
            );
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle heading>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div key={comment.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Comments</CardTitle>
                            </CardHeader>
                            {comment}
                        </Card>
                    </div>
                </div>
                
            );
        }
        else{
            return <div></div>
        }
    }
    render(){
        return(
           
            this.rendeerDish(this.props.dish )
           
        );
    }
    
}

export default Dishdetail ;