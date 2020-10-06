import React, { Component } from "react";
import Dropdown from "./Sections/DropDown";
import MenuBar from "../Reusable/MenuBar";
import Information from "./Sections/Information";
import { connect } from "react-redux";

let DropDownData = [
  {
    id: 0,
    name: "Technology",
    info:
      "Given technology’s current rate of acceleration, the best tech blogs and websites have the Herculean task of travelling at the speed of a Core i7 processor. And while the responsibility certainly offers no shortage of perks (as in all the free gadgets one could ever ask for), it also means staying consistently ahead of the curve by not just determining trends, but even setting them on occasion. After all, is a product or gadget really any good if a tech publication like The Verge or Wired doesn’t say it is? Sometimes, perhaps, but a brand will have a hard time surviving if the best tech blogs aren’t picking up what they’re throwing down. Likewise, any savvy enthusiast owes it to himself to keep pace with the industry at large by checking in daily with the Internet’s most viable sources. Here are the 10 Best Tech Blogs. May they guide you well.",
  },
  {
    id: 1,
    name: "ReactJs",
    info:
      "React (also known as React.js or ReactJS) is an open-source JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries.",
  },
  {
    id: 2,
    name: "Redux",
    info:
      "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebooks Flux architecture, it was created by Dan Abramov and Andrew Clark.",
  },
];


class Home extends Component {
  initial = DropDownData[0].info;
  constructor() {
    super();
    this.state = {
      selectedItem: "0",
      info: this.initial
    };
  }

  onHandleFilter = (value) => {
    DropDownData.filter((item) => {
      if (item.id === parseInt(value)) {
        this.setState({ info: item.info });
      }
    });
  };

  render() {
    let { info } = this.state;
    return (
      <React.Fragment>
        <MenuBar />
        <div className="container mt-5">
          <Dropdown
            list={DropDownData}
            filters={this.onHandleFilter}
            initial={this.state.selectedItem}
          />
          <Information info={info} />
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Home);
