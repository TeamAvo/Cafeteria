import React from 'react'

class Item extends React.Component {
  render() {
    const data = this.props.data
    var items = []
    for (var i = 0; i < data.length; i++) {
      if (data[i].food != null) {
        var imgURL
        if (data[i].food.image_url == null) {
          imgURL = `https://source.unsplash.com/300x300/?${data[i].food.name}`
        } else {
          imgURL = data[i].food.image_url
        }
        items.push(
          <div key={i} className='item'>
            <a target='_blank' href={imgURL}>
              <img src={imgURL} className='img' alt={data[i].food.name} />
            </a>
            <p className='name'>{data[i].food.name}</p>
            <p className='description'>{data[i].food.description}</p>
          </div>
        )
      }
    }
    return (
      <>
        <div className={`itemcontainer ${this.props.color}`}>
          <div className='title'>{this.props.title}</div>
          <div>{items}</div>
        </div>
      </>
    )
  }
}

export default Item