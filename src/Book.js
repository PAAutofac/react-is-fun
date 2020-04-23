import React,{Component} from "react"
import {render} from 'react-dom'
import PropTypes from 'prop-types'

export const Book = ({title="No title provided" ,author="No author",pages=0,freeBookMark}) => {
    return(
            <section>
                  <h2>{title}</h2>
                  <p>by: {author}</p>
                  <p>Pages: {pages} pages</p>
                  <p>Free Book Mark: {freeBookMark ? 'yes' : 'No'} !!</p>
            </section>
          )
    }