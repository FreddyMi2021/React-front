import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ConfirmeFooter from './ConfimeFooter/ConfirmeFooter';
import ConfirmeHeader from './ConfirmeHeader/ConfirmeHeader';
import './styles/ConfirmePass.css';
export const ConfirmationComponent = ({ checkData, setEmail }) => {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  const content = useRef(null);
  function toggleAccordion() {
    setActive(active === '' ? 'active' : '');
    setHeight(
      active === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    // console.log(content.current.scrollHeight);
  }
  return(
    <section className='confirmPass absolute w-full h-full py-6'>
      <div className="w-full">
          <ConfirmeHeader/>
      </div>
      <div className='mx-auto h-full'>
        <div className='flex content-center items-center justify-center h-full'>
          <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4'>
            <div className='relative bottom-14 flex flex-col min-w-0 break-words w-full mb-6 shadow-sm rounded-sm bg-gray-50 border-0 rounded-lg'>
              <div className='rounded-t mb-0 px-6 py-4'>
                <div className='text-center'>
                  <h2 className='text-gray-600 text-xl font-bold mb-4'>
                    Confirmation
                  </h2>
                  <p className='text-sm'>
                  If you have not received the confirmation email,
                  please click on this link:{' '}
                  </p>
                </div>
                {/* <hr className='mt-6 border-b-1 border-gray-400' /> */}
              </div>
              <div className='flex-auto px-4 lg:px-4 py-10 pt-0'>
                <label
                  className={`${active} cursor-pointer text-green-700 font-bold hover:underline flex justify-center mb-4`}
                  onClick={toggleAccordion}
                >
                  Resend email
                </label>
                {/* Form email */}
                <div
                  ref={content}
                  style={{ maxHeight: `${height}` }}
                  className='overflow-hidden transition-height duration-500 ease mb-4'
                >
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      checkData();
                    }}
                  >
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-left text-gray-700 text-xs font-bold mb-2'
                        htmlFor='grid-password'
                      >
                        Email adress
                      </label>
                      <input
                        className="confirmForm h-10 pl-4 placeholder-opacity-50 shadow rounded-md w-full text-gray-500 font-semibold outline-none focus:outline-none"
                        type="email"
                        placeholder='Email adress'
                        style={{ transition: 'all .15s ease' }}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <small className='text-red-400 leading-tight'>
                      Enter your Email address so that we can
                      resend confirmation email
                      </small>
                    </div>

                    <div className='text-center mt-3'>
                      <button
                        className='bg-green-700 text-white rounded-full active:bg-indigo-800 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-1/2'
                        style={{ transition: 'all .15s ease' }}
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
                {/* END Form email */}

                <div className='flex justify-center mb-4'>
                  <div className='text-gray-600 font-bold text-xl bg-white text-center w-max p-4 rounded-full'>
                    OR
                  </div>
                </div>
                <div className='text-center'>
                  <p className='text-sm mb-2'>If you received it: </p>
                  <div className=''>
                    {' '}
                    <Link
                      to='/login_page'
                      className='cursor-pointer text-green-700 font-bold hover:underline text-xl flex justify-center'
                    >
                      <small>Login</small>
                    </Link>{' '}
                  </div>
                </div>

                {/* <div className='w-1/2 text-right'>
                  <Link
                    to='/register'
                    className='text-blue-500 font-bold hover:underline'
                  >
                    <small>Inscription</small>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
          <ConfirmeFooter/>
      </div>
    </section>
  )
}