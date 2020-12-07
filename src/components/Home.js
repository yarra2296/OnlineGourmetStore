import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Samplecarousel from "./Carousel";
import SamplePagination from "./SamplePagination";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchText: "",
            tempData: [],
            updated: false,
            filters: {department: "", cost: ""},
            departments: ["pantry", "oil", "spreads"],
            departmentChecked: [],
            costChecked: [],
            cost: ["All Price", "$1-$10", "$11-$30", "$30+"],
            userName: "admin"
        };
        this.searchText = this.searchText.bind(this);
    }

  componentDidMount() {
    fetch("http://localhost:4000/products/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data is:", data);
        this.setState({
          data: data,
          tempData: data,
        });
      })
      .catch(console.log);
  }

  searchText(event) {
        if(this.state.departmentChecked.length > 0) {
            if (event.key === "Enter") {
                if (event.target.value !== "") {
                    const tempValue = this.state.tempData.filter((value) =>
                        value.name.toLowerCase().includes(event.target.value.toLowerCase())
                    );
                    this.setState({
                        searchText: event.target.value,
                        tempData: tempValue,
                        updated: !this.state.updated,
                    });
                }
                else {
                    let checkedBoxes = [...this.state.departmentChecked];
                    let updatedData = [];
                    var old_data = this.state.data;
                    console.log(checkedBoxes);
                    if (checkedBoxes.length <= 0 || checkedBoxes.length === undefined) {
                        this.setState({
                            tempData: old_data,
                        });
                    } else {
                        for(var i = 0; i < checkedBoxes.length; i++) {
                            for(var j = 0; j < this.state.data.length; j++) {
                                if (checkedBoxes[i] === this.state.data[j].category) {
                                    updatedData.push(this.state.data[j]);
                                }
                            }
                        }
                        this.setState({
                            tempData: updatedData,
                        });
                        console.log("Value of updated data to check is:", updatedData)
                    }
                }
            }
        }
        else {
            if (event.key === "Enter") {
                const tempValue = this.state.data.filter((value) =>
                    value.name.toLowerCase().includes(event.target.value.toLowerCase())
                );
                this.setState({
                    searchText: event.target.value,
                    tempData: tempValue,
                    updated: !this.state.updated,
                });
            }
        }
  }

  handleCheckbox = (e, s, category) => {
        if(this.state.searchText !== "") {
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
            if (checkedBoxes.length <= 0 || checkedBoxes.length === undefined) {
                const tempValue = this.state.data.filter((value) =>
                    value.name.toLowerCase().includes(this.state.searchText.toLowerCase())
                );
                this.setState({
                    tempData: tempValue,
                    updated: !this.state.updated,
                    searchText: this.state.searchText
                });
            } else {
                if (s !== "All departments") {
                    for (var i = 0; i < checkedBoxes.length; i++) {
                        for (var j = 0; j < this.state.tempData.length; j++) {
                            if (checkedBoxes[i] === this.state.tempData[j].category) {
                                updatedData.push(this.state.tempData[j]);
                            }
                        }
                    }
                    this.setState({
                        tempData: updatedData,
                    });
                }
            }
        }
        else {
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
            if (checkedBoxes.length <= 0 || checkedBoxes.length === undefined) {
                this.setState({
                    tempData: old_data,
                });
            } else {
                if (s !== "All departments") {
                    for (var i = 0; i < checkedBoxes.length; i++) {
                        for (var j = 0; j < this.state.data.length; j++) {
                            if (checkedBoxes[i] === this.state.data[j].category) {
                                updatedData.push(this.state.data[j]);
                            }
                        }
                    }
                    this.setState({
                        tempData: updatedData,
                    });
                }
            }
        }
  };

    render() {
        console.log("updated search value is:", this.state.tempData);
        return(
            <div className={"main bg-light"}>
                <Header userName={this.state.userName} style={{display: "fixed", top: 0}}/>
            {this.state.tempData.length !== 0 ? (
              <div
                className="row mt-5 mb-5"
                style={{ marginLeft: 100, marginRight: 100 }}
              >
                <div className="col-md-2">
                  <input
                    type="text"
                    placeholder={"search"}
                    onChange={(event) => this.setState({searchText: event.target.value})}
                    onKeyDown={this.searchText}
                    value={this.state.searchText}
                    className={"border pl-2"}
                  />
                  <div className={"mt-5"}>
                    <h5>Departments</h5>
                    <hr />
                    <div className={"col"}>
                      {this.state.departments.map((data) => {
                        return (
                          <label className={"col"}>
                            <input
                              className={"mr-2"}
                              name={data}
                              type="checkbox"
                              checked={this.state.departmentChecked.find(
                                (ch) => ch === data
                              )}
                              onChange={(e) =>
                                this.handleCheckbox(e, data, "department")
                              }
                            />
                            {data}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-md-10">
                  <Samplecarousel />
                  <SamplePagination
                    data={this.state.tempData}
                    userName={this.state.userName}
                  />
                </div>
              </div>
            ) : (
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                  <h1>Your Products are loading...</h1>
              </div>
            )}
            <Footer></Footer>
          </div>
    );
  }
}

export default withRouter(Home);
