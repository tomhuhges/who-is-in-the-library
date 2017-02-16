import React from 'react'

const Signup = (props) =>
  <div className="minh-100 flex items-center justify-center">
    <div className="bg-white dark-gray flex flex-column justify-center br4 pa4 w-90 w-80-m w-40-l mw6-ns tc">
      <h1 className="f-subheadline mt4 mb0">😎</h1>
      <h2 className="lh-title">Sign in with your Github account</h2>
      <p className="lh-copy">You must be a member of the CodingForEveryone organization to sign in.</p>
      <button
        onClick={props.signIn}
        className="bg-dark-gray white pa3 br2 shadow-0 bn mv4 ma4-ns pointer">
        <span className="flex justify-center">
          <img className="w2 h2 ph2" src="http://www.iconsplace.com/icons/preview/white/github-256.png" alt="github-icon"/>
          <p className="code h2 ma0 lh-double">Sign in with Github</p>
        </span>
      </button>
    </div>
  </div>

export default Signup
