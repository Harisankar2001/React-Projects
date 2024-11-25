import React from 'react'




const Header = () => {
  let customCSS = "error";
  const isLoggedIn = false;
  const greeting = isLoggedIn ? <p>Welcome Back!</p> : <p>Please Log in.</p>
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <>
      <div>
        <h1 className="bannerText">Hari Sankar</h1>
        <p className="slogan">Learn More Be Smart</p>
        <p className={customCSS}>25+45={25+45}</p>
        {greeting}

        <ul>
          {items.map((item, index)=>(<li key={index}>{item}</li>))}
        </ul>
      </div>
    </>
  )
}

export default Header

