import React from 'react'

const userRoleContext=React.createContext("user")
const Userprovider=userRoleContext.Provider
const Userconsumer=userRoleContext.Consumer

export {Userprovider,Userconsumer}