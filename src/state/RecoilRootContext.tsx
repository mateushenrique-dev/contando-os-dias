"use client"

import { RecoilRoot } from 'recoil'

export default function RecoilRootAsClient({ children }) {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}