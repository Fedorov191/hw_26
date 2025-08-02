import '../ContactForm.css'
import {Component} from "react";
type Planet = {
    name: string;
};
type State={
    planets:Planet[]
}

class Contact extends Component<object, State> {
    constructor(props:object) {
        super(props);
        this.state={
            planets:[]
        }
    }

    async componentDidMount(){
        const response=await fetch("https://sw-info-api.herokuapp.com/v1/planets")
        const data=await response.json()
        this.setState(
            {
                planets: data
            }
        )
    }

    render() {
        return (
            <div className="container-form">
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                    <label htmlFor="planet">Choose your planet</label>
                    <select id="planet" name="planet">
                        {this.state.planets.map((planet, id)=>
                            <option key={id} value={planet.name}>{planet.name}</option>)}


                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."
                              style={{height: "200px"}}></textarea>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Contact;