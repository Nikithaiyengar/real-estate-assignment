import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'

 const Header = () => {
    let Links = [
      {name: 'Home', link: ''},
      {name: 'Buy', link: ''},
      {name: 'Rent', link: ''},
      {name: 'Sell', link: ''},
      {name: 'Conatct Us', link: ''},
      {name: 'Login', link: ''}

    ]

  return (
    <>
    <div className='py-10 flex flex-row-reverse justify-between content-center text-lg mx-6'>
      <ul className={'flex items-center space-x-7 tablet:text-sm laptop:text-base'}>
        {Links.map((link) => (
            <li key={ link.link } className='tablet:mx-6 laptop:mx-5 text-black-400'>
              <a className='no-underline text-black hover:underline' href={ link.link }>{ link.name }</a>
            </li>
        ))}
        <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-violet-600'>
          Sign Up
        </button>
      </ul>
    </div>
    </>
  );
};
export default Header;