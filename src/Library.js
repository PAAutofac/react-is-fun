import React,{Component} from "react"
import propTypes from 'prop-types'
import { Book } from "./Book"
import { Hiring } from "./Hiring"
import { NotHiring } from "./NotHiring"

class Library extends React.Component {

    static defaultProps = {
        books: [
          {"title": "Sai Cheritra", "author": "Hemadpant", "pages": 250}
        ]
    }
  
     state = {
             open: true,
              freeBookMark: false,
              hiring: false,
              data: [],
              loading: false
            }
   
    componentDidMount () {
      console.log("The component is now mounted")
      this.setState({loading : true})
      fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading : false}))
    }
    
    componentDidUpdate () {
      console.log("The component is now Updated")
    }
  
    toggleOpenClosed = () =>{
      this.setState(prevState =>({
        open: !prevState.open
      }))
    }
   render (){
     const {books} = this.props
      return (
        <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading ? 
              "Loading..." :
              <div>
              {this.state.data.map(
                product => {
                  return (
                    <div key={product.id}>
                        <h3>Library product of the week</h3>
                        <h4>{product.name}</h4>
                        <img alt={product.name} src={product.image} height={100} />
                    </div>
                  )
                }
              )}
              </div>
            }
  
  
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Changed</button>
            {books.map(
              (book,i ) => <Book 
                            key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages} 
                            freeBookMark={this.state.freeBookMark}
                      />
            )}
        </div>
      )
  }
  }
  
  Library.propTypes = {
    books: propTypes.array
  }

  Book.propTypes = {
    title : propTypes.string,
    author : propTypes.string,
    pages : propTypes.number,
    freeBookMark : propTypes.bool
  }

  export default Library