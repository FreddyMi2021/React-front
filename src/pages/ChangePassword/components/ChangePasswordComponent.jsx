export const ChangePasswordComponent = ({
  onSubmit,
  onChangePassword,
  onChangePasswordConfirmation,
}) => {
  return (
    <div style={{ background: '#48BAB2' }}>
      <div className="text-center m-auto">
        <a href="/">
          <img
            className="w-48 text-center m-auto"
            src="HomePage/Sayna.png"
            alt="Logo SAYNA"
          />
        </a>
      </div>
      <section
        style={{ background: '#48BAB2' }}
        className="absolute w-full h-full overflow-auto"
      >
        <div className="container mx-auto h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4">
              <div className="relative bottom-14 flex flex-col min-w-0 break-words w-full mb-6 shadow-sm rounded-sm bg-gray-100 border-0 rounded-lg">
                <div className="rounded-t mb-0 px-6 py-4">
                  <div className="text-center">
                    <h2 className="text-gray-600 text-xl font-bold mb-4">
                      Formulaire de récupération
                    </h2>
                    <p className=" text-gray-600 text-sm w-10/12 mx-auto mb-4">
                      Entrez votre nouvelle mot de passe
                    </p>
                  </div>
                  {/* <hr className='mt-6 border-b-1 border-gray-400' /> */}
                </div>
                <div className="flex-auto px-4 lg:px-4 py-10 pt-0">
                  {/* Form email */}
                  <div className="overflow-hidden transition-height duration-500 ease mb-4">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit();
                      }}
                    >
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-left text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Mot de passe
                        </label>
                        <input
                          type="password"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="password"
                          style={{ transition: 'all .15s ease' }}
                          onChange={(e) => onChangePassword(e.target.value)}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-left text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Confirmer votre mot de passe
                        </label>
                        <input
                          type="password"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="password confirmation"
                          style={{ transition: 'all .15s ease' }}
                          onChange={(e) =>
                            onChangePasswordConfirmation(e.target.value)
                          }
                        />
                      </div>

                      <div className="text-center mt-3">
                        <button
                          className="bg-blue-500 text-white rounded-full active:bg-indigo-800 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-1/2"
                          style={{ transition: 'all .15s ease' }}
                        >
                          Envoyer
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* END Form email */}

                  <div className="text-center">
                    <div className="">
                      {/* {' '}
                    <Link
                      to='/login'
                      className='cursor-pointer text-blue-500 font-bold hover:underline text-xl flex justify-center'
                    >
                      <small>Se connecter</small>
                    </Link>{' '} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
