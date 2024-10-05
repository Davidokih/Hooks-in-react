const Header = () => {
  return (
      <div className='flex justify-center items-center border-b border-red-600 font-semibold text-lg'>
          <div className='w-[90%] flex justify-between h-20 items-center'>
              <div>Logo</div>
              <div className='flex gap-3 text-small'>
                  <div>Home</div>
                  <div>Home</div>
                  <div>Home</div>
                  <div>Home</div>
              </div>
              <button className='bg-green-600 py-2 px-5 rounded-se-md'>Get Started</button>
          </div>
    </div>
  )
}

export default Header;
