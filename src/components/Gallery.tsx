import info from '../config/sw-config.json'
import Friend from "./Friend.tsx";
import type {HeroInfo} from "../utils/sw-types";
import {Component} from "react";

type State = {
    selectedImg: string | null;
}


class Gallery extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            selectedImg: null
        }
    }

    handleClick = (item: string) => {
        this.setState((prevState) =>

            ({
                selectedImg: prevState.selectedImg === null ? item : null
            }))
    }

    render() {
        const {selectedImg} = this.state;
        return (
            <section className="right">
                <h3>Dream Team</h3>
                <div className="gallery">

                    {
                        selectedImg ? (
                                <img src={selectedImg}
                                     alt='Selected Hero'
                                     className={'bigImage'}
                                     onClick={() => this.handleClick(selectedImg)}
                                />
                            )
                            :
                            (
                                info.friends.map((item: HeroInfo) =>
                                    <Friend
                                        key={item.name}
                                        friend={item}
                                        onClick={() => this.handleClick(item.img)}
                                    />
                                )
                            )

                    }
                </div>
            </section>
        );
    }
}

export default Gallery;