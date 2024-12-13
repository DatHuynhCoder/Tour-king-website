import React, {useState, createContext} from 'react'

const ContextStore = createContext()
const ContextProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [userid, setUserid] = useState()
  const [name, setName] = useState()
  const [isAdmin, setIsAdmin] = useState(0)
  const [useravatarurl, setUseravatarurl] = useState('')
  return (
    <ContextStore.Provider value={{
      accessToken, setAccessToken,
      refreshToken, setRefreshToken,
      userid, setUserid,
      name, setName,
      isAdmin, setIsAdmin,
      useravatarurl, setUseravatarurl
    }}>
      {children}
    </ContextStore.Provider>
  )
}

export {ContextStore, ContextProvider}