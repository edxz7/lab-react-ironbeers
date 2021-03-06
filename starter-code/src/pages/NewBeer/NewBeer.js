import React, { Component } from 'react'
import Navbar from "../../components/Navbar";
import BeersService from '../../services/BeersService';
const beersService = new BeersService()
export default class NewBeer extends Component {
    state = {
        form: {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: ""
        }
    }

    submitNewBeer = async () => {
        const { form } = this.state
        await beersService.createBeers(form)
        this.props.history.push(`/beers/`)
    }

    inputChange = ({ target: { value, name } }) => {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [name]: value
            }
        });
    };


    render() {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state.form;
        return (
            <div>
            <Navbar/>
                <label>Name </label>
                <input onChange={this.inputChange} name="name" placeholder="name" type="text" value={name} />
                <br />
                <label>Tagline </label>
                <input onChange={this.inputChange} name="tagline" placeholder="tagline" type="text" value={tagline} />
                <br />
                <label>Description </label>
                <input onChange={this.inputChange} name="description" placeholder="tagdescriptionline" type="text" value={description} />
                <br />
                <label>First Brewed </label>
                <input onChange={this.inputChange} name="first_brewed " placeholder="First Brewed" type="text" value={first_brewed} />
                <br />
                <label>Brewers Tips </label>
                <input onChange={this.inputChange} name="brewers_tips" placeholder="Brewers Tips" type="text" value={brewers_tips} />
                <br />
                <label>Attenuation Level </label>
                <input onChange={this.inputChange} name="attenuation_level" placeholder="Attenuation Level" type="number" value={attenuation_level} />
                <br />
                <label>Contributed by </label>
                <input onChange={this.inputChange} name="contributed_by" placeholder="Contributed by" type="text" value={contributed_by} />
                <br />
                <button onClick={this.submitNewBeer} type="submit">Submit</button>
            </div>
        )
    }
}