import React,{Component} from "react"
import {render} from 'react-dom'
import { blue } from "color-name";
import Library from './Library'

/*----------------Excercse 8 Forms -------------------------*/
/*
class FavoriteColorForm extends  React.Component {
  state = { value: ''}

 newColor = e => this.setState({value: e.target.value}) 

 submit =e =>{
    console.log(`New Color: ${this.state.value}`)
    e.preventDefault()
 }

  render()
  {
      return(
        <form onSubmit={this.submit}>
          <label> Favorite Color:
            <input type="color" onChange={this.newColor} />
          </label>
          <button>Submit</button>
        </form>
      )
  }
}

render (
  <FavoriteColorForm/>,
  document.getElementById("root")
)
*/

/*----------------Excercise 6 Introduction to States , default props-------------------------*/

let bookList = [
  {"title":"The Sun Also Rises", "author":"Ernest Hemingway", "pages":300},
  {"title":"White Teeth", "author":"Zadie Smith", "pages":400},
  {"title":"Cat's Cradle", "author":"Kurt Vonnegut", "pages":500},
]

render(
  <Library books={bookList}/>,
  document.getElementById('root')
)


/*----------------Excercse 5 Child components-------------------------*/
/*
let bookList = [
  {"title":"The Sun Also Rises", "author":"Ernest Hemingway", "pages":300},
  {"title":"White Teeth", "author":"Zadie Smith", "pages":400},
  {"title":"Cat's Cradle", "author":"Kurt Vonnegut", "pages":500},
]
const Book = ({title,author,pages}) => {
return(
        <section>
              <h2>{title}</h2>
              <p>by: {author}</p>
              <p>Pages: {pages} pages</p>
        </section>
      )
}

const Library = ({books}) =>{  
  return (
    <div>
        {books.map(
          (book,i ) => <Book 
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages} 
                   />
        )}
    </div>
  )
}

render(
  <Library books={bookList}/>,
  document.getElementById('root')
)
*/


/*----------------Excercse 4 multiple different components-------------------------*/
/*
const Book = ({title,author,pages}) => {
return(
        <section>
              <h2>{title}</h2>
              <p>by: {author}</p>
              <p>Pages: {pages} pages</p>
        </section>
      )
}

const Library = () =>{  
  return (
    <div>
        <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={300}/>
        <Book title="White Teeth" author="Zadie Smith" pages={500}/>
        <Book title="Cat's Cradle" author="Kurt Vonnegut" pages={390}/>
    </div>
  )
}

render(
  <Library/>,
  document.getElementById('root')
)
*/

/*
let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}
*/

/*----------------Excercse 3 creating a React component using functions-------------------------*/
/*
const getPercent = decimal => {
  return decimal * 100 + '%'
}

const calcGoalProgress = (total, goal) =>{
  return getPercent(total/goal)
}

const SkiDataCounter = ({total,backcountry,goal,powder}) => {
  return(
    <section>
        <div>
          <p>total days: {total}</p>
        </div>
        <div>
        <p>powder days: {powder}</p>
      </div>
      <div>
      <p>Backcountry: {backcountry}</p>
    </div>
    <div>
    <p> Goal progress: {calcGoalProgress(total,goal)}</p>
  </div>
      </section>
  )
}
render(
  <SkiDataCounter total={skiData.total}
                  powder={skiData.powder}
                  backcountry={skiData.backcountry}
                  goal={skiData.goal} />,
  document.getElementById('root')
)
*/

/*----------------Excercse 2 creating a React component using class-------------------------*/
/*class SkiDataCounter extends Component {
  getPercent = decimal => {
    return decimal * 100 + '%'
  }

  calcGoalProgress = (total, goal) =>{
    return this.getPercent(total/goal)
  }

  render(){
    const {total,powder,backcountry,goal} = this.props
    return(
      <section>
        <div>
          <p>total days: {total}</p>
        </div>
        <div>
        <p>powder days: {powder}</p>
      </div>
      <div>
      <p>Backcountry: {backcountry}</p>
    </div>
    <div>
    <p> Goal progress: {this.calcGoalProgress(total,goal)}</p>
  </div>
      </section>
    )
  }
}
render(
  <SkiDataCounter total={skiData.total}
                  powder={skiData.powder}
                  backcountry={skiData.backcountry}
                  goal={skiData.goal} />,
  document.getElementById('root')
)
*/


/*----------------Excercse 1 creating a React component and using Props-------------------------*/
/* class Message extends React.Component {
  render(){
    console.log(this.props)
    return(
      <div>
        <h1 style={{color: this.props.color}} id="heading-element">
          {this.props.msg}
        </h1>
        <p>We will be back in {this.props.minutes} minutes</p>
      </div>
    )
  }
}


ReactDOM.render(
  <Message color="blue" age={30} msg="Hello World" minutes={60}/>,
  document.getElementById('root')
)
*/