import React, { Component } from 'react';
import {
    withRouter
} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Samplecarousel from './Carousel';
import SamplePagination from './SamplePagination'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/180/888/39__65309.1604725799.png?c=1",
                    name: "SPANISH ARBEQUINA EXTRA VIRGIN OLIVE OIL BY PONS / ACEITE DE OLIVA VIRGEN EXTRA PONS - 500ML (17 FL OZ)",
                    price: 80,
                    category: "Pantry",
                    quantity: 10,
                    available: false
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/180/888/39__65309.1604725799.png?c=1",
                    name: "SPANISH ARBEQUINA EXTRA VIRGIN OLIVE OIL BY PONS / ACEITE DE OLIVA VIRGEN EXTRA PONS - 500ML (17 FL OZ)",
                    price: 80,
                    category: "Pantry",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/180/888/39__65309.1604725799.png?c=1",
                    name: "SPANISH ARBEQUINA EXTRA VIRGIN OLIVE OIL BY PONS / ACEITE DE OLIVA VIRGEN EXTRA PONS - 500ML (17 FL OZ)",
                    price: 80,
                    category: "Pantry",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/180/888/39__65309.1604725799.png?c=1",
                    name: "SPANISH ARBEQUINA EXTRA VIRGIN OLIVE OIL BY PONS / ACEITE DE OLIVA VIRGEN EXTRA PONS - 500ML (17 FL OZ)",
                    price: 80,
                    category: "Pantry",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/180/888/39__65309.1604725799.png?c=1",
                    name: "SPANISH ARBEQUINA EXTRA VIRGIN OLIVE OIL BY PONS / ACEITE DE OLIVA VIRGEN EXTRA PONS - 500ML (17 FL OZ)",
                    price: 80,
                    category: "Pantry",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/153/584/la-espa-ola-duo-aceitunas-rellenas-anchoas-twin-pack-olives-stuffed-with-anchioves-two-easy-open-cans-of-200g-each-5__50008.1605544848.png?c=1",
                    name: "SPANISH OLIVES STUFFED WITH ANCHOVIES DELUXE (2-PACK) BY LA ESPAÑOLA",
                    price: 80,
                    category: "Oils",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/153/584/la-espa-ola-duo-aceitunas-rellenas-anchoas-twin-pack-olives-stuffed-with-anchioves-two-easy-open-cans-of-200g-each-5__50008.1605544848.png?c=1",
                    name: "SPANISH OLIVES STUFFED WITH ANCHOVIES DELUXE (2-PACK) BY LA ESPAÑOLA",
                    price: 80,
                    category: "Oils",
                    quantity: 10,
                    available: false
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/153/584/la-espa-ola-duo-aceitunas-rellenas-anchoas-twin-pack-olives-stuffed-with-anchioves-two-easy-open-cans-of-200g-each-5__50008.1605544848.png?c=1",
                    name: "SPANISH OLIVES STUFFED WITH ANCHOVIES DELUXE (2-PACK) BY LA ESPAÑOLA",
                    price: 80,
                    category: "Oils",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/153/584/la-espa-ola-duo-aceitunas-rellenas-anchoas-twin-pack-olives-stuffed-with-anchioves-two-easy-open-cans-of-200g-each-5__50008.1605544848.png?c=1",
                    name: "SPANISH OLIVES STUFFED WITH ANCHOVIES DELUXE (2-PACK) BY LA ESPAÑOLA",
                    price: 80,
                    category: "Oils",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/153/584/la-espa-ola-duo-aceitunas-rellenas-anchoas-twin-pack-olives-stuffed-with-anchioves-two-easy-open-cans-of-200g-each-5__50008.1605544848.png?c=1",
                    name: "SPANISH OLIVES STUFFED WITH ANCHOVIES DELUXE (2-PACK) BY LA ESPAÑOLA",
                    price: 80,
                    category: "Oils",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/153/584/la-espa-ola-duo-aceitunas-rellenas-anchoas-twin-pack-olives-stuffed-with-anchioves-two-easy-open-cans-of-200g-each-5__50008.1605544848.png?c=1",
                    name: "SPANISH OLIVES STUFFED WITH ANCHOVIES DELUXE (2-PACK) BY LA ESPAÑOLA",
                    price: 80,
                    category: "Oils",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: false
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: true
                },
            ],
            searchText: "",
            tempData: [
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/180/888/39__65309.1604725799.png?c=1",
                    name: "SPANISH ARBEQUINA EXTRA VIRGIN OLIVE OIL BY PONS / ACEITE DE OLIVA VIRGEN EXTRA PONS - 500ML (17 FL OZ)",
                    price: 80,
                    category: "Pantry",
                    quantity: 10,
                    available: false
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/180/888/39__65309.1604725799.png?c=1",
                    name: "SPANISH ARBEQUINA EXTRA VIRGIN OLIVE OIL BY PONS / ACEITE DE OLIVA VIRGEN EXTRA PONS - 500ML (17 FL OZ)",
                    price: 80,
                    category: "Pantry",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/180/888/39__65309.1604725799.png?c=1",
                    name: "SPANISH ARBEQUINA EXTRA VIRGIN OLIVE OIL BY PONS / ACEITE DE OLIVA VIRGEN EXTRA PONS - 500ML (17 FL OZ)",
                    price: 80,
                    category: "Pantry",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/180/888/39__65309.1604725799.png?c=1",
                    name: "SPANISH ARBEQUINA EXTRA VIRGIN OLIVE OIL BY PONS / ACEITE DE OLIVA VIRGEN EXTRA PONS - 500ML (17 FL OZ)",
                    price: 80,
                    category: "Pantry",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/180/888/39__65309.1604725799.png?c=1",
                    name: "SPANISH ARBEQUINA EXTRA VIRGIN OLIVE OIL BY PONS / ACEITE DE OLIVA VIRGEN EXTRA PONS - 500ML (17 FL OZ)",
                    price: 80,
                    category: "Pantry",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/153/584/la-espa-ola-duo-aceitunas-rellenas-anchoas-twin-pack-olives-stuffed-with-anchioves-two-easy-open-cans-of-200g-each-5__50008.1605544848.png?c=1",
                    name: "SPANISH OLIVES STUFFED WITH ANCHOVIES DELUXE (2-PACK) BY LA ESPAÑOLA",
                    price: 80,
                    category: "Oils",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/153/584/la-espa-ola-duo-aceitunas-rellenas-anchoas-twin-pack-olives-stuffed-with-anchioves-two-easy-open-cans-of-200g-each-5__50008.1605544848.png?c=1",
                    name: "SPANISH OLIVES STUFFED WITH ANCHOVIES DELUXE (2-PACK) BY LA ESPAÑOLA",
                    price: 80,
                    category: "Oils",
                    quantity: 10,
                    available: false
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/153/584/la-espa-ola-duo-aceitunas-rellenas-anchoas-twin-pack-olives-stuffed-with-anchioves-two-easy-open-cans-of-200g-each-5__50008.1605544848.png?c=1",
                    name: "SPANISH OLIVES STUFFED WITH ANCHOVIES DELUXE (2-PACK) BY LA ESPAÑOLA",
                    price: 80,
                    category: "Oils",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/153/584/la-espa-ola-duo-aceitunas-rellenas-anchoas-twin-pack-olives-stuffed-with-anchioves-two-easy-open-cans-of-200g-each-5__50008.1605544848.png?c=1",
                    name: "SPANISH OLIVES STUFFED WITH ANCHOVIES DELUXE (2-PACK) BY LA ESPAÑOLA",
                    price: 80,
                    category: "Oils",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/153/584/la-espa-ola-duo-aceitunas-rellenas-anchoas-twin-pack-olives-stuffed-with-anchioves-two-easy-open-cans-of-200g-each-5__50008.1605544848.png?c=1",
                    name: "SPANISH OLIVES STUFFED WITH ANCHOVIES DELUXE (2-PACK) BY LA ESPAÑOLA",
                    price: 80,
                    category: "Oils",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/153/584/la-espa-ola-duo-aceitunas-rellenas-anchoas-twin-pack-olives-stuffed-with-anchioves-two-easy-open-cans-of-200g-each-5__50008.1605544848.png?c=1",
                    name: "SPANISH OLIVES STUFFED WITH ANCHOVIES DELUXE (2-PACK) BY LA ESPAÑOLA",
                    price: 80,
                    category: "Oils",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: false
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: true
                },
                {
                    id: 90384023403248320982304234,
                    image: "https://cdn11.bigcommerce.com/s-6yfyhv23lh/images/stencil/800x800/products/183/852/Untitled_design_1__74701.1605196761.png?c=1",
                    name: "ITALIAN BLACK TRUFFLE HONEY - 3.9 OZ (110G)",
                    price: 80,
                    category: "Condiments",
                    quantity: 10,
                    available: true
                },
            ],
            updated: false,
            filters: {department: "", cost: ""},
            departments: ["All departments", "pantry", "oil", "spreads"],
            departmentChecked: [],
            costChecked: [],
            cost: ["All Price", "$1-$10", "$11-$30", "$30+"],
            userName: "admin"
        };
        this.searchText = this.searchText.bind(this);
    };

    componentDidMount() {
        fetch("http://localhost:4000/products/",{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("data is:", data);
                this.setState({
                    data: data,
                    tempData: data,
                })
            })
            .catch(console.log);
    }

    searchText(event) {
        if(event.key === "Enter") {
            console.log(event.key, event.target.value);
            const tempValue = this.state.data.filter((value) => value.name.toLowerCase().includes(event.target.value.toLowerCase()));
            this.setState({
                searchText: event.target.value,
                tempData: tempValue,
                updated: !this.state.updated
            })
        }
    }

    handleCheckbox = (e, s, category) => {
        if(category === "department") {
            let checkedBoxes = [...this.state.departmentChecked];
            if (e.target.checked) {
                checkedBoxes.push(s);
                /*if(s !== "All departments") {
                    const tempData = this.state.data.filter((value) => value.category === s);
                    this.setState({
                        tempData: tempData
                    })
                }*/
            } else {
                const index = checkedBoxes.findIndex((ch) => ch === s);
                checkedBoxes.splice(index, 1);
            }
            this.setState({departmentChecked: checkedBoxes});
            let updatedData = [];
            var old_data = this.state.data;
            console.log(checkedBoxes);
            if(checkedBoxes.length <= 0 || checkedBoxes.length === undefined) {
                this.setState({
                    tempData: old_data,
                })
            }
            else {
                if (s !== "All departments") {
                    for (var i = 0; i < checkedBoxes.length; i++) {
                        for (var j = 0; j < this.state.data.length; j++) {
                            if (checkedBoxes[i] === this.state.data[j].category) {
                                updatedData.push(this.state.tempData[j]);
                            }
                        }
                    };
                    this.setState({
                        tempData: updatedData
                    })
                }
            }
        }
        else {
            const checkedBoxes = [...this.state.costChecked];
            if (e.target.checked) {
                checkedBoxes.push(s);
                if(s !== "All Price") {
                    let tempData;
                    if(s === "$1-$10") {
                        tempData = this.state.data.filter((value) => value.price >= 1 && value.price <= 10);
                    }
                    else if(s === "$11-$30") {
                        tempData = this.state.data.filter((value) => value.price >= 11 && value.price <= 30);
                    }
                    else {
                        tempData = this.state.data.filter((value) => value.price > 30);
                    }
                    this.setState({
                        tempData: tempData
                    })
                }
            } else {
                const index = checkedBoxes.findIndex((ch) => ch === s);
                checkedBoxes.splice(index, 1);
            }
            this.setState({costChecked: checkedBoxes});
        }
    };

    render() {
        console.log("updated search value is:", this.state.tempData);
        return(
            <div className={"main bg-light"}>
                <Header userName={this.state.userName}/>
                {/*<h1>Hello</h1>*/}
                {/*<Footer style={"display: sticky; bottom: 0px"}/>*/}
                <div className="row mt-5 mb-5" style={{marginLeft: 100, marginRight: 100}}>
                    <div className="col-md-2">
                        <input type="text" placeholder={"search"} onKeyDown={this.searchText} className={"border pl-2"} />
                        <div className={"mt-5"}>
                            <h5>Departments</h5>
                            <hr />
                            <div className={"col"}>
                                {this.state.departments.map((data) => {return (
                                        <label className={"col"}>
                                            <input
                                                className={"mr-2"}
                                                name={data}
                                                type="checkbox"
                                                checked={this.state.departmentChecked.find((ch) => ch === data)}
                                                onChange={(e) => this.handleCheckbox(e, data, "department")} />
                                            {data}
                                        </label>
                                )})}
                            </div>
                        </div>
                        {/*<div className={"mt-5"}>
                            <h5>Cost</h5>
                            <hr />
                            <div className={"col"}>
                                {this.state.cost.map((data) => {return (
                                    <label className={"col"}>
                                        <input
                                            className={"mr-2"}
                                            name={data}
                                            type="checkbox"
                                            checked={this.state.departmentChecked.find((ch) => ch === data)}
                                            onChange={(e) => this.handleCheckbox(e, data, "cost")} />
                                        {data}
                                    </label>
                                )})}
                            </div>
                        </div>*/}
                    </div>
                    <div className="col-md-10">
                        <Samplecarousel />
                        <SamplePagination data={this.state.tempData} userName={this.state.userName}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);
