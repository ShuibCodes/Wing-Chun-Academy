import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import FooterLayout from '../components/Layouts/BlogLayout'
import {BiRightArrowAlt} from 'react-icons/bi'
import {Helmet} from 'react-helmet'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <FooterLayout >
        <Helmet title="Blog" />
            <div className={blogStyles.background} >   
            <h1 className={blogStyles.Maintitle} >Blog Articles:</h1>
             <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                     
                 
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <div className={blogStyles.text}>
                               
                                    <h2 className={blogStyles.title} >{edge.node.title}</h2>
                                    <p className={blogStyles.para} >{edge.node.publishedDate}</p>
                                    <span> Read More <BiRightArrowAlt/> </span>  
                                </div>
                            </Link>
                        </li>
                       
                       
                    )
                })}
            </ol>
            </div>
             

            
                 

        </FooterLayout>
       
        
    )
}

export default BlogPage
