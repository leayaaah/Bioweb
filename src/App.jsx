import { useState } from 'react'
import './App.css'
import Product from './components/Product'

function App() {
  const products = [
    { id: 1, name: 'Cardigan dehood', image: '/assets/cardigan.webp', link: 'https://shope.ee/link-den-ngu' },
    { id: 2, name: 'Thảm lông mềm trải sàn', image: '/assets/tham-long.jpg', link: 'https://shope.ee/link-tham' },
    { id: 3, name: 'Kệ gỗ chữ A decor', image: '/assets/ke-go.jpg', link: 'https://shope.ee/link-ke-go' },
    { id: 4, name: 'Gương lượn sóng', image: '/assets/guong-luong.jpg', link: 'https://shope.ee/link-guong' },
  ];
  return (
    <div className="container">
      <div className="profile">
        <img src="/assets/IMG_9888.PNG" alt="Avatar" className="avatar" />
        <h1 className="title">Link Sản Phẩm Của Mình</h1>
        <p className="bio">Tổng hợp link sản phẩm yêu thích ✨</p>
      </div>

      <div className="product-list">
        {products.map((item) => (
          <Product 
            key={item.id} 
            name={item.name} 
            image={item.image} 
            link={item.link} 
          />
        ))}
      </div>
    </div>
  )
}

export default App
