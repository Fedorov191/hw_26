import {Component} from "react";

type State = {
    info: {
        id: number
        name: string
        gender: string
        height: number
        birth_year: string

    }
}

class AboutMe extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            info: {
                id: 0,
                name: '',
                gender: '',
                height: 0,
                birth_year: '',

            }
        }
    }

    async componentDidMount() {
        const id = Math.trunc((Math.random() * 70 + 1))
        try {
            const response = await fetch("https://sw-info-api.herokuapp.com/v1/peoples/" + id)
            if (!response.ok) throw 'Bad request'
            const data = await response.json()
            this.setState({
                info: {
                    id: data.id,
                    name: data.name,
                    gender: data.gender,
                    height: data.height,
                    birth_year: data.birth_year,

                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const info = this.state.info

        return (
            <div className={'container'}>

                    <p className="farGalaxy">
                        Name: <span>{info.name}</span><br />
                        Gender: <span>{info.gender}</span><br />
                        Height: <span>{info.height}</span><br />
                        Birth year: <span>{info.birth_year}</span><br />
                    </p>

            </div>

        );
    }
}

export default AboutMe;
