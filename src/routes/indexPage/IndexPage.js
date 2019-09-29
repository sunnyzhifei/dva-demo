import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import IndexPageComponent from '../../components/indexPage/indexPage'

class IndexPage extends React.Component{

  render(){
    // console.log(this.props)
    const { productList, dispatch } = this.props
    // console.log(productList)
    return (
      <div>
        <IndexPageComponent title='商品类型'  productList={ productList } dispatch= {dispatch}/>
      </div>
    )
  }}

  const mapStateToProps = (state) => {
    return {productList:state.index}
  }

export default connect(mapStateToProps)(IndexPage);
