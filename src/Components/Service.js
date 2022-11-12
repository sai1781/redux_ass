// import { useContext } from "react"
// import contextTheme from "../Context"
import Button from "./Button";
import Nav from "./Nav";
import { useSelector } from "react-redux";

const Service = () => {

  const value = useSelector(state => state.value)

  const Data = [
    {
      name: "The WET Codbase",
      date: "sunday 4th 20, 11min read",
      description: "come waste your time with me"

    },
    {
      name: "Goodby, Clean Code",
      date: "Friday 2nd, 2019 5mins read",
      description: "Let Clean code guide you, Then let it go"

    },
    {
      name: "My Decade In Review",
      date: "saturday 11t, 2016 5 min read",
      description: "A personal reflection"

    },
    {
      name: "What Are The React Team Principles",
      date: "saturday 11t, 2016 5 min read",
      description: "A personal reflection"

    }
  ]

  // const { light} = useContext(contextTheme);


  return (
    <div className={value === true ? "light" : "dark"}>
      <Nav />
      <h1>Service Page</h1>

      <Button />

      {Data.map((e, idx) => {

        return (
          <div key={idx} className="content"  >
            <div className="content2">
              <h2 style={{ color: "#d13565" }}>{e.name}</h2>
              <span >{e.date}</span>
              <span>{e.description}</span>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Service